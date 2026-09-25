// api/_lib/feedbackStore.ts
//
// Storage for visitor feedback on the codebook explorer. The API routes talk
// to the FeedbackStore interface so tests can swap in an in-memory store; in
// production it is a Postgres table on Neon, reached over HTTP with the
// connection string Vercel's Neon integration sets as DATABASE_URL.
//
// The folder name starts with "_" so Vercel does not deploy this file as a
// route of its own.

import { neon } from '@neondatabase/serverless';
import type { AdminFeedback, FeedbackStatus, PublicFeedback, ValidFeedback } from '../../services/feedback.js';

export interface FeedbackStore {
  insert(entry: ValidFeedback, ipHash: string | null): Promise<number>;
  /** How many entries this visitor submitted in the last `minutes` minutes. */
  countRecent(ipHash: string, minutes: number): Promise<number>;
  listApproved(codebookId: string): Promise<PublicFeedback[]>;
  list(status: FeedbackStatus | 'all'): Promise<AdminFeedback[]>;
  setStatus(id: number, status: FeedbackStatus): Promise<boolean>;
  remove(id: number): Promise<boolean>;
  /**
   * Try-it usage (api/try-code.ts). Only a timestamp and hashed IP are kept,
   * never the statement.
   */
  recordTry(ipHash: string | null): Promise<void>;
  /** Tries in the last `minutes` minutes, by one visitor or (null) by everyone. */
  countTries(ipHash: string | null, minutes: number): Promise<number>;
}

export const SCHEMA_SQL = `
CREATE TABLE IF NOT EXISTS codebook_feedback (
  id               BIGSERIAL PRIMARY KEY,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT now(),
  codebook_id      TEXT NOT NULL,
  codebook_version TEXT NOT NULL,
  target_type      TEXT NOT NULL CHECK (target_type IN ('domain', 'code', 'general')),
  target_code      TEXT NOT NULL,
  target_label     TEXT NOT NULL,
  kind             TEXT NOT NULL,
  body             TEXT NOT NULL,
  example_statement TEXT,
  related_code     TEXT,
  author_name      TEXT,
  author_email     TEXT,
  author_org       TEXT,
  status           TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  reviewed_at      TIMESTAMPTZ,
  ip_hash          TEXT
);
-- Upgrades a table created before note kinds and the two optional fields
-- existed. Kinds are checked in services/feedback.ts, not by the database.
ALTER TABLE codebook_feedback DROP CONSTRAINT IF EXISTS codebook_feedback_kind_check;
ALTER TABLE codebook_feedback ADD COLUMN IF NOT EXISTS example_statement TEXT;
ALTER TABLE codebook_feedback ADD COLUMN IF NOT EXISTS related_code TEXT;
CREATE INDEX IF NOT EXISTS codebook_feedback_status_idx ON codebook_feedback (codebook_id, status);
CREATE INDEX IF NOT EXISTS codebook_feedback_ip_idx ON codebook_feedback (ip_hash, created_at);
CREATE TABLE IF NOT EXISTS codebook_try_usage (
  id         BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  ip_hash    TEXT
);
CREATE INDEX IF NOT EXISTS codebook_try_usage_idx ON codebook_try_usage (created_at, ip_hash);
`;

export const databaseUrl = (): string | undefined => process.env.DATABASE_URL || process.env.POSTGRES_URL || undefined;

const toIso = (v: unknown): string | null => (v ? new Date(v as string).toISOString() : null);

const toPublic = (r: Record<string, any>): PublicFeedback => ({
  id: Number(r.id),
  createdAt: toIso(r.created_at) ?? '',
  codebookVersion: r.codebook_version,
  targetType: r.target_type,
  targetCode: r.target_code,
  targetLabel: r.target_label,
  kind: r.kind,
  body: r.body,
  exampleStatement: r.example_statement ?? null,
  relatedCode: r.related_code ?? null,
  name: r.author_name ?? null,
  organization: r.author_org ?? null,
});

const toAdmin = (r: Record<string, any>): AdminFeedback => ({
  ...toPublic(r),
  codebookId: r.codebook_id,
  email: r.author_email ?? null,
  status: r.status,
  reviewedAt: toIso(r.reviewed_at),
});

let schemaReady: Promise<void> | null = null;

/** The Neon-backed store. Creates the table on first use, once per instance. */
export const neonFeedbackStore = (url: string): FeedbackStore => {
  const sql = neon(url);
  const ready = () => {
    if (!schemaReady) {
      schemaReady = (async () => {
        for (const statement of SCHEMA_SQL.split(';').map(s => s.trim()).filter(Boolean)) {
          await sql.query(statement);
        }
      })().catch(e => {
        schemaReady = null;
        throw e;
      });
    }
    return schemaReady;
  };

  return {
    async insert(e, ipHash) {
      await ready();
      const rows = await sql`
        INSERT INTO codebook_feedback
          (codebook_id, codebook_version, target_type, target_code, target_label, kind, body,
           example_statement, related_code, author_name, author_email, author_org, ip_hash)
        VALUES
          (${e.codebookId}, ${e.codebookVersion}, ${e.targetType}, ${e.targetCode}, ${e.targetLabel}, ${e.kind}, ${e.body},
           ${e.exampleStatement}, ${e.relatedCode}, ${e.name}, ${e.email}, ${e.organization}, ${ipHash})
        RETURNING id`;
      return Number(rows[0].id);
    },
    async countRecent(ipHash, minutes) {
      await ready();
      const rows = await sql`
        SELECT count(*)::int AS n FROM codebook_feedback
        WHERE ip_hash = ${ipHash} AND created_at > now() - make_interval(mins => ${minutes})`;
      return Number(rows[0].n);
    },
    async listApproved(codebookId) {
      await ready();
      const rows = await sql`
        SELECT * FROM codebook_feedback
        WHERE codebook_id = ${codebookId} AND status = 'approved'
        ORDER BY created_at`;
      return rows.map(toPublic);
    },
    async list(status) {
      await ready();
      const rows = status === 'all'
        ? await sql`SELECT * FROM codebook_feedback ORDER BY created_at DESC LIMIT 1000`
        : await sql`SELECT * FROM codebook_feedback WHERE status = ${status} ORDER BY created_at DESC LIMIT 1000`;
      return rows.map(toAdmin);
    },
    async setStatus(id, status) {
      await ready();
      const rows = await sql`
        UPDATE codebook_feedback SET status = ${status}, reviewed_at = now()
        WHERE id = ${id} RETURNING id`;
      return rows.length > 0;
    },
    async remove(id) {
      await ready();
      const rows = await sql`DELETE FROM codebook_feedback WHERE id = ${id} RETURNING id`;
      return rows.length > 0;
    },
    async recordTry(ipHash) {
      await ready();
      await sql`INSERT INTO codebook_try_usage (ip_hash) VALUES (${ipHash})`;
    },
    async countTries(ipHash, minutes) {
      await ready();
      const rows = ipHash
        ? await sql`SELECT count(*)::int AS n FROM codebook_try_usage
            WHERE ip_hash = ${ipHash} AND created_at > now() - make_interval(mins => ${minutes})`
        : await sql`SELECT count(*)::int AS n FROM codebook_try_usage
            WHERE created_at > now() - make_interval(mins => ${minutes})`;
      return Number(rows[0].n);
    },
  };
};

/** The production store, or null when no database is connected yet. */
export const defaultFeedbackStore = (): FeedbackStore | null => {
  const url = databaseUrl();
  return url ? neonFeedbackStore(url) : null;
};
