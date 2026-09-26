// services/codebookExplorer.ts
//
// Builds the structured view the codebook explorer screen renders. The
// domain/subcategory tree comes from codebook.domains; definitions,
// examples, notes and framework names are parsed out of
// codebook.definitionsText (the same text sent to the model), and linked
// research comes from the codebook's source registry (see codebookSources.ts). Nothing
// here is hand-copied, so the explorer stays in step with the codebook.

import { Codebook } from '../codebooks/types.js';
import { SourceEntry, SourceStatus, getSourceRegistry } from './codebookSources.js';

export interface ExplorerSource {
  id: string;
  citeAs: string;
  publisher?: string;
  year?: string;
  url?: string;
  status: SourceStatus;
  tier?: string;
  excerpt?: string;
  verifiedOn?: string;
  openCp?: string;
  /** Which part of the source supports this particular code. */
  component?: string;
}

export interface ExplorerField {
  label: string;
  text: string;
}

export interface ExplorerCode {
  /** Full code string as used in prompts, schema enums and exports. */
  code: string;
  /** Leading number, e.g. "3.2.2", "01" or "Y1.4". */
  number: string;
  title: string;
  /** Parenthetical after the title in definitionsText, e.g. "Gap Fill: Epstein". */
  tag?: string;
  /** SEL-style category header this code sits under, e.g. "Self-Awareness". */
  group?: string;
  hint?: string;
  definition?: string;
  examples: string[];
  /** Framework names as written in definitionsText ("Source Framework:"). */
  frameworks: string[];
  notes: string[];
  /** Any other labelled fields (e.g. Inclusion/Exclusion Criteria). */
  fields: ExplorerField[];
  sources: ExplorerSource[];
  /** Registry note for a code kept without a framework anchor. */
  sourceGap?: string;
}

export interface ExplorerDomain extends Omit<ExplorerCode, 'group' | 'sourceGap'> {
  /** Plain-language overview from the codebook's `description` field. */
  description?: string;
  frameworkBasis?: string;
  subcategories: ExplorerCode[];
}

export interface ExplorerCodebook {
  id: string;
  label: string;
  version: string;
  hasRegistry: boolean;
  registryReviewed?: string;
  domains: ExplorerDomain[];
  /** Every distinct source in the registry that supports at least one code. */
  sources: ExplorerSource[];
}

const CODE_RE = /^(?:(?:Domain|Code)\s+)?([A-Z]?\d+(?:\.\d+)*)[.:]?\s+(.+)$/;
const FIELD_RE = /^-?\s*([A-Z][A-Za-z /&-]{1,40}?):\s+(.*)$/;
const GROUP_RE = /^([A-Z]?\d+(?:\.[\dA-Z]+)+)\s+(.+?)\s*\(Category Header[^)]*\)\s*$/;

export const splitCode = (code: string): { number: string; title: string } => {
  const m = code.trim().match(CODE_RE);
  return m ? { number: m[1], title: m[2].trim() } : { number: '', title: code.trim() };
};

const stripQuotes = (s: string) => s.trim().replace(/^["“]|["”]$/g, '').trim();

const splitExamples = (text: string): string[] =>
  text
    .split(/["”]\s+OR\s+["“]/)
    .map(stripQuotes)
    .filter(Boolean);

interface ParsedBlock {
  tag?: string;
  group?: string;
  fields: ExplorerField[];
  parenNotes: string[];
}

/**
 * Splits definitionsText into one block per domain/subcategory code. A block
 * starts at a line that begins with a known code string and runs until the
 * next such line.
 */
export const parseDefinitions = (codebook: Codebook): Map<string, ParsedBlock> => {
  const known = [
    ...codebook.domains.map(d => d.code),
    ...codebook.domains.flatMap(d => d.subcategories.map(s => s.code)),
  ]
    // Longest first so "11.1 ..." can never be claimed by a shorter prefix.
    .sort((a, b) => b.length - a.length);

  const blocks = new Map<string, ParsedBlock>();
  let current: ParsedBlock | null = null;
  let currentGroup: string | undefined;

  for (const raw of codebook.definitionsText.split('\n')) {
    const line = raw.trim();
    if (!line) continue;

    const group = line.match(GROUP_RE);
    if (group) {
      currentGroup = group[2].trim();
      current = null;
      continue;
    }

    const code = known.find(k => line.startsWith(k));
    if (code) {
      const isDomain = codebook.domains.some(d => d.code === code);
      if (isDomain) currentGroup = undefined;
      const rest = line.slice(code.length).trim();
      const tag = rest.match(/^\((.*)\)$/)?.[1];
      current = { tag, group: isDomain ? undefined : currentGroup, fields: [], parenNotes: [] };
      blocks.set(code, current);
      continue;
    }

    if (!current) continue;

    if (line.startsWith('(')) {
      const inner = line.replace(/^\(/, '').replace(/\)$/, '');
      current.parenNotes.push(inner.replace(/^(Note|Important):\s*/i, ''));
      continue;
    }

    const field = line.match(FIELD_RE);
    if (field) {
      current.fields.push({ label: field[1].trim(), text: field[2].trim() });
    } else if (current.fields.length) {
      const last = current.fields[current.fields.length - 1];
      last.text = `${last.text} ${line.replace(/^-\s*/, '')}`;
    }
  }
  return blocks;
};

const toExplorerSource = (s: SourceEntry, component?: string): ExplorerSource => ({
  id: s.id,
  citeAs: s.cite_as,
  publisher: s.publisher ?? undefined,
  year: s.year != null ? String(s.year) : undefined,
  url: s.url ?? undefined,
  status: s.status,
  tier: s.tier,
  excerpt: s.excerpt,
  verifiedOn: s.verified_on,
  openCp: s.open_cp,
  component,
});

const STATUS_RANK: Record<SourceStatus, number> = {
  verified: 0,
  located: 1,
  unverified: 2,
  misattributed: 3,
  needs_replacement: 4,
};

const byStatus = (a: ExplorerSource, b: ExplorerSource) =>
  STATUS_RANK[a.status] - STATUS_RANK[b.status] || a.citeAs.localeCompare(b.citeAs);

const fieldsToParts = (block: ParsedBlock | undefined) => {
  const out = {
    definition: undefined as string | undefined,
    examples: [] as string[],
    frameworks: [] as string[],
    notes: [...(block?.parenNotes ?? [])],
    fields: [] as ExplorerField[],
    frameworkBasis: undefined as string | undefined,
  };
  for (const f of block?.fields ?? []) {
    const label = f.label.toLowerCase();
    if (label === 'definition') out.definition = f.text;
    else if (label === 'example' || label === 'examples') out.examples.push(...splitExamples(f.text));
    else if (label === 'source framework') out.frameworks.push(f.text.replace(/\.$/, ''));
    else if (label === 'framework basis') out.frameworkBasis = f.text;
    else if (label === 'note') out.notes.push(f.text);
    else out.fields.push(f);
  }
  return out;
};

export const buildExplorerCodebook = (codebook: Codebook): ExplorerCodebook => {
  const blocks = parseDefinitions(codebook);
  const registry = getSourceRegistry(codebook.id);

  const sourcesFor = (number: string): ExplorerSource[] => {
    if (!registry || !number) return [];
    return registry.sources
      .flatMap(s =>
        s.supports
          // Flagged supports (a code not yet live, or one a verifier rejected)
          // aren't evidence for the code, so they aren't shown as its sources.
          .filter(sup => sup.code === number && !sup.proposed && !sup.unsupported)
          .map(sup => toExplorerSource(s, sup.component)),
      )
      .sort(byStatus);
  };

  const gapFor = (number: string) =>
    registry?.codebook_extensions?.find(e => e.code === number)?.reason;

  const domains: ExplorerDomain[] = codebook.domains.map(d => {
    const { number, title } = splitCode(d.code);
    const block = blocks.get(d.code);
    const parts = fieldsToParts(block);

    const subcategories: ExplorerCode[] = d.subcategories.map(s => {
      const split = splitCode(s.code);
      const sb = blocks.get(s.code);
      const sp = fieldsToParts(sb);
      return {
        code: s.code,
        number: split.number,
        title: split.title,
        tag: sb?.tag,
        group: sb?.group,
        hint: s.hint,
        definition: sp.definition,
        examples: sp.examples,
        frameworks: sp.frameworks,
        notes: sp.notes,
        fields: sp.fields,
        sources: sourcesFor(split.number),
        sourceGap: gapFor(split.number),
      };
    });

    // A domain's sources are its own plus the distinct sources of its codes.
    const seen = new Set<string>();
    const domainSources = [...sourcesFor(number), ...subcategories.flatMap(s => s.sources)]
      .filter(s => (seen.has(s.id) ? false : (seen.add(s.id), true)))
      .map(s => ({ ...s, component: undefined }))
      .sort(byStatus);

    return {
      code: d.code,
      number,
      title,
      tag: block?.tag,
      hint: d.hint,
      description: d.description,
      definition: parts.definition,
      examples: parts.examples,
      frameworks: parts.frameworks,
      notes: parts.notes,
      fields: parts.fields,
      frameworkBasis: parts.frameworkBasis,
      sources: domainSources,
      subcategories,
    };
  });

  const allSources = registry
    ? registry.sources
        .filter(s => s.supports.length > 0)
        .map(s => toExplorerSource(s))
        .sort(byStatus)
    : [];

  return {
    id: codebook.id,
    label: codebook.label,
    version: codebook.version,
    hasRegistry: Boolean(registry),
    registryReviewed: registry?.last_reviewed,
    domains,
    sources: allSources,
  };
};

/** Lower-cased text blob used for search across everything a code shows. */
export const searchText = (c: ExplorerCode | ExplorerDomain): string =>
  [
    c.number,
    c.title,
    c.tag,
    c.hint,
    'description' in c ? c.description : undefined,
    c.definition,
    ...c.examples,
    ...c.frameworks,
    ...c.notes,
    ...c.fields.map(f => f.text),
    ...c.sources.map(s => `${s.citeAs} ${s.publisher ?? ''}`),
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
