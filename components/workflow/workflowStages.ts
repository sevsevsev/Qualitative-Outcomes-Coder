// components/workflow/workflowStages.ts
//
// Content for the explorer site's "The bigger picture" page: the six stages
// of the logic model project, and the example outcomes that travel through
// them. Code names, domain names and counts are NOT written here. The stepper
// looks them up in the live codebook (codebooks/youthOutcomesV3.data.ts) by
// ID, so a renamed code can't drift, and workflowStages.test.ts fails if an
// ID stops resolving.
//
// A standalone copy of this visual (for PowerPoint and Streamlit) lives in the
// project's shared files under workflow-visual/. That copy is a snapshot; this
// file is the source for the site.

import { V3_DOMAINS } from '../../codebooks/youthOutcomesV3.data.js';
import type { V3Code, V3Domain } from '../../codebooks/youthOutcomesV3.types.js';

export const PARTNERSHIPS_DASHBOARD_URL = 'https://dashboards.philasd.org/extensions/schoolpartnerships/index.html#/';

export const FOLLOWED_STATEMENT = 'Students will attend school more regularly and families will read together at home.';

export interface WorkflowStage {
  key: 'receive' | 'extract' | 'suggest' | 'check' | 'record' | 'explore';
  label: string;
  who: string;
  title: string;
  lead: string;
  facts: [string, string][];
  /** What has happened to the followed statement by this stage. */
  follow: string;
  planned?: boolean;
}

export const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    key: 'receive',
    label: 'Partners share',
    who: 'Partner organizations',
    title: 'Partners share their logic models',
    lead: 'Most partners upload a logic model on the form they complete during annual school partner onboarding. Others email it or send it another way.',
    facts: [['Who', 'Partner organizations'], ['Comes out', 'A logic model for each program']],
    follow: "In Program A's logic model",
  },
  {
    key: 'extract',
    label: 'Content extracted',
    who: 'Logic Model Extractor',
    title: 'The content is pulled out of each logic model',
    lead: 'An internal tool writes every item in a logic model to its own row, labelled by section. The outcome rows go on to be coded.',
    facts: [['Who', 'Logic Model Extractor (internal)'], ['Comes out', 'One row per item, by section']],
    follow: 'Extracted as a short-term outcome',
  },
  {
    key: 'suggest',
    label: 'AI suggests codes',
    who: 'Outcomes coder',
    title: 'An AI assistant suggests a code for each outcome',
    lead: 'The outcomes coder splits sentences that bundle several outcomes, then suggests one code for each from this codebook. It can only pick codes that exist here, and it can leave a statement uncoded.',
    facts: [['Who', 'AI assistant in the outcomes coder']],
    follow: 'Split into 2 outcomes, codes suggested',
  },
  {
    key: 'check',
    label: 'A person checks',
    who: 'Reviewer',
    title: 'A person checks every row',
    lead: 'A reviewer confirms or corrects each suggestion before anything is saved. The AI suggests; a person decides.',
    facts: [['Who', 'A reviewer'], ['Comes out', 'Codes a person has checked']],
    follow: 'Both codes confirmed by a reviewer',
  },
  {
    key: 'record',
    label: 'Checked record',
    who: 'Outcomes coder',
    title: 'One checked, shared record',
    lead: "Every program's intended outcomes now use the same codes, so they can sit side by side. Each row records the codebook version it was coded with.",
    facts: [['Comes out', 'Coded intended outcomes for every program']],
    follow: 'Two coded rows in the shared record',
  },
  {
    key: 'explore',
    label: 'Explore by school',
    who: 'Partnerships Dashboard',
    title: "See what each school's partners aim for",
    lead: "We plan to add the coded outcomes to the Partnerships Dashboard. Pick a school to see what its partners are working toward together, and where no program is aiming.",
    facts: [['Where', 'Partnerships Dashboard (planned)']],
    follow: 'Counted under Program A',
    planned: true,
  },
];

/** Example rows shown in stages 3–5. `suggested` differs from `code` only where the reviewer changed it. */
export interface ExampleRow {
  program: string;
  text: string;
  code: string;
  suggested: string;
  followed?: boolean;
}

export const EXAMPLE_ROWS: ExampleRow[] = [
  { program: 'A', text: 'Students will attend school more regularly', code: 'Y1.13', suggested: 'Y1.13', followed: true },
  { program: 'A', text: 'Families will read together at home', code: 'F1.2', suggested: 'F1.2', followed: true },
  { program: 'A', text: 'Youth will gain confidence speaking in front of groups', code: 'Y4.6', suggested: 'Y5.4' },
  { program: 'B', text: 'Teens will explore careers in health care', code: 'Y7.1', suggested: 'Y7.1' },
  { program: 'C', text: 'Students will feel they belong at the program', code: 'Y3.1', suggested: 'Y3.1' },
];

/** Illustrative data only: which domains each program at an example school has an outcome in. */
export const EXAMPLE_SCHOOL: Record<string, string[]> = {
  A: ['Y1', 'Y4', 'F1'],
  B: ['Y1', 'Y4', 'Y5', 'Y7'],
  C: ['Y1', 'Y2', 'Y3', 'Y8'],
  D: ['Y1', 'Y4', 'Y8', 'F2', 'A2'],
  E: ['Y1', 'Y6', 'Y7', 'A1'],
};

export const findV3Code = (id: string): V3Code | undefined => {
  for (const d of V3_DOMAINS) for (const cat of d.categories) for (const c of cat.codes) if (c.id === id) return c;
  return undefined;
};

/** Domain that owns a code ID ("Y1.13" -> Y1), and its index in codebook order (used for the domain hue). */
export const domainOf = (codeOrDomainId: string): { domain: V3Domain; index: number } | undefined => {
  const id = codeOrDomainId.split('.')[0];
  const index = V3_DOMAINS.findIndex(d => d.id === id);
  return index < 0 ? undefined : { domain: V3_DOMAINS[index], index };
};

/** Every code ID the page refers to, for the drift test. */
export const referencedCodeIds = (): string[] =>
  [...new Set(EXAMPLE_ROWS.flatMap(r => [r.code, r.suggested]))];
