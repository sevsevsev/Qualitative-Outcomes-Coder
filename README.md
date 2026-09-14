<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Qualitative Outcome Coder

An AI-assisted tool for coding nonprofit/youth-development program outcomes against a codebook (taxonomy), with a human-in-the-loop review step before export. Upload a CSV of outcome statements, pick a codebook, let Gemini propose codes, then review/correct them in-browser before exporting a verified CSV.

Originally scaffolded in [AI Studio](https://ai.studio/apps/ade107f6-adfe-429e-b83c-e4c99c61080f); this repo has since moved the Gemini API key server-side (see [Architecture](#architecture) below), so treat the AI Studio link as historical context, not the current deployment target.

## Run Locally

**Prerequisites:** Node.js, and either the [Vercel CLI](https://vercel.com/docs/cli) installed globally (`npm i -g vercel`) or just `npx` (no global install needed).

1. Install dependencies:
   `npm install`
2. Set `GEMINI_API_KEY` in `.env.local` to your Gemini API key. **Do not prefix it with `VITE_`** — it must stay a plain server-side environment variable, never bundled into client JS (see [Architecture](#architecture)).
3. Run the app:
   `npm run dev`

   This runs `vercel dev`, which serves both the Vite frontend and the `/api/analyze-batch` serverless function together on one port (detects `.env.local` automatically). This is the only way to exercise the full app locally, since batch analysis requires the API route.

   If you only need to iterate on UI that doesn't call the AI (e.g. layout/styling), `npm run dev:vite-only` runs plain `vite` — faster reloads, but any "Process Batch" click will fail with a 404 since there's no API route behind it.

### Testing & linting

- `npm test` — runs the Vitest suite (CSV parsing, domain/subcategory normalization).
- `npm run lint` — runs ESLint.
- `npx tsc --noEmit` — type-checks the whole project, including the `api/` serverless function.

### Deploying

Deploy the repo to Vercel as-is (zero-config: it auto-detects the Vite frontend and the `api/` function). Set `GEMINI_API_KEY` in the Vercel project's **Environment Variables** — it's read server-side only, at request time, and is never part of the built client bundle.

## Architecture

```
App.tsx                        top-level state, upload form, resume-session banner
components/
  ReviewDashboard.tsx           the review/correct/export table
  ProcessingStatus.tsx          batch-analysis progress view
services/
  geminiService.ts              CSV parsing, chunking/retry orchestration, CSV export
                                 (calls /api/analyze-batch — no AI SDK usage here)
  reviewNormalization.ts        pure domain/subcategory string-matching logic,
                                 pulled out of ReviewDashboard so it's unit-testable
  reviewStorage.ts               localStorage autosave for in-progress review sessions
codebooks/
  types.ts                      the Codebook data model (domains, subcategories,
                                 hints, prompt text, capability flags)
  original.ts                   the youth-development codebook (10 domains)
  acceleratePhilly.ts           the Accelerate Philly strategic-plan crosswalk
  index.ts                      registry — CODEBOOK_REGISTRY maps id -> Codebook
  geminiSchema.ts                (server-only) builds the enum-constrained Gemini
                                 response schema from a Codebook
api/
  analyze-batch.ts              Vercel serverless function; the ONLY place that
                                 holds GEMINI_API_KEY and calls the Gemini SDK
```

**Why a serverless function?** The original AI Studio scaffold called the Gemini SDK directly from the browser, which meant `GEMINI_API_KEY` was baked into the client bundle — visible to anyone who opened devtools. `api/analyze-batch.ts` now holds the key server-side; the client only ever calls its own `/api/analyze-batch` endpoint over `fetch`.

**Why enum-constrained schema?** Each codebook's domain/subcategory/subject-area/population values are passed to Gemini's structured-output `enum` field (see `codebooks/geminiSchema.ts`), so the model cannot return a value outside the codebook's own vocabulary. This replaced an earlier approach of accepting free-text and then regex-cleaning it after the fact.

### Adding a new codebook

1. Create `codebooks/yourCodebook.ts` exporting a `Codebook` object (see `codebooks/types.ts` for the shape — domains, subcategories, `rulesText` for process instructions, `definitionsText` for the actual domain/subcategory definitions and examples that get sent to the model, and `capabilities` flags for which optional columns — subcategory, subject area, target population — the review table should show).
2. Register it in `codebooks/index.ts`'s `CODEBOOK_REGISTRY`.
3. That's it — the codebook picker, review table columns, Gemini schema, and CSV export all read from the registry automatically.

The one exception: `services/reviewNormalization.ts`'s fuzzy-matching for re-imported/legacy CSVs (e.g. recognizing `"1. Joy..."` as `"Domain 1. Joy..."`) is keyed on codebook id, because each codebook's domain-numbering syntax differs. If your new codebook's raw exports need the same forgiving re-import behavior, add a case there.

### Data note

Outcome text and any other CSV columns you upload are sent to Google's Gemini API via `api/analyze-batch.ts` for coding. If your data could include information about identifiable individuals (students, families, staff), review your organization's data-handling policy before uploading — there is currently no PII redaction step.
