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
- `npm run typecheck` — type-checks the whole project under the same "bundler" resolution Vite uses.
- `npm run typecheck:server` — type-checks `api/` + `codebooks/` under strict Node ESM resolution (`moduleResolution: "NodeNext"`) -- the same rules Vercel's Node.js Function runtime actually enforces at request time. **Run this one whenever you add or move a file under `api/` or `codebooks/`, or add a new relative import between them** -- `tsconfig.json`'s "bundler" resolution is deliberately lenient (it tolerates a bare directory import like `from '../codebooks'`, which Vite/tsx resolve fine) and will not catch a relative import missing its `.js` extension the way this config does. A codebook-registry import graph that passes `typecheck` but fails `typecheck:server` shipped a completely broken `/api/analyze-batch` to production once already (`ERR_UNSUPPORTED_DIR_IMPORT` on every single request) before this check existed.

### Deploying

Deploy the repo to Vercel as-is (zero-config: it auto-detects the Vite frontend and the `api/` function). Set `GEMINI_API_KEY` in the Vercel project's **Environment Variables** — it's read server-side only, at request time, and is never part of the built client bundle.

### Which Gemini model, and what happens when it's deprecated

`api/analyze-batch.ts` calls a specific pinned Gemini model (`DEFAULT_MODEL`), not a Google `-latest` alias — Google's own docs say that alias can silently point to a preview/experimental release rather than the newest *stable* one, and can change behavior with as little as ~2 weeks' notice. Given how much of this app's behavior turned out to depend on this specific model's quirks (the response-schema enum-size limit, the exact shape `thinkingConfig` expects), an unreviewed automatic model swap is a bigger risk than a pinned model eventually going stale — so model choice here is a deliberate, reviewed decision, just a cheap one to change:

- **Override without a code change**: set a `GEMINI_MODEL` environment variable in Vercel to any valid Gemini model ID and redeploy. If unset, it falls back to the `DEFAULT_MODEL` constant in `api/analyze-batch.ts`.
- **Automatic fallback on a retired model**: if the configured model returns a 404 (Gemini's signal for "this model ID doesn't exist or isn't available to this key" — the shape a deprecated/retired model takes), the function automatically retries once against `FALLBACK_MODEL` (a second constant in the same file) and logs that it did so (`console.error`, visible in Vercel's Function logs — that log line is your signal to update `GEMINI_MODEL`/`DEFAULT_MODEL` deliberately rather than keep running on the fallback). Every exported row also carries a `model_used` column naming the model that actually coded it, so fallback-coded rows are easy to spot in the results. Other failure types (bad request, rate limit, content policy) do **not** trigger the fallback, since retrying those against a different model wouldn't fix them and would just mask the real problem — see `isModelUnavailableError` in `api/analyze-batch.ts` and its tests in `api/analyze-batch.test.ts`.
- **Periodic manual review**: Google announces model deprecations with lead time. When you get one of those emails (or see the fallback-usage log line), that's the trigger to bump `DEFAULT_MODEL` to the current recommended model for this task — check `ai.google.dev/gemini-api/docs/models` (or the AI Studio model picker) for the current lineup, sanity-check with a small batch, then update the constant.

As of this line being written, `DEFAULT_MODEL` is `gemini-3.8-flash` (an explicit user choice, made 2026-09-15) and `FALLBACK_MODEL` is `gemini-2.5-flash` (confirmed against the installed `@google/genai` SDK's own bundled model list, not just a web search). Unlike `FALLBACK_MODEL`, `gemini-3.8-flash` was **not** independently verified against Google's own docs or the SDK's model list before being set as the default — `ai.google.dev` was unreachable from the environment that made this change, and it doesn't appear in the installed SDK's bundled model type list either (that list can lag real model releases, so its absence isn't proof the model doesn't exist — see the code comment on `DEFAULT_MODEL` in `api/analyze-batch.ts`). If it turns out to be invalid, `GEMINI_MODEL` can override it with zero code changes, and a 404 automatically falls back to `gemini-2.5-flash`; a model-specific rejection of the `thinkingBudget` value (a narrower, harder-to-rule-out risk noted in the same code comment) would instead surface as a readable error in the batch progress log. Re-verify against the SDK/official docs, not general web search, before trusting either constant months from now.

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
