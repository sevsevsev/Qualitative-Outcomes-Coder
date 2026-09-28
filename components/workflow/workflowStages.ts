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
  /** Short name used in the overview strip. */
  label: string;
  who: string;
  title: string;
  /** What happens at this stage. */
  lead: string;
  /** Why the stage matters, or what it builds toward. */
  why: string;
  facts: [string, string][];
  /** "More about this step": definitions and detail, one paragraph per entry. */
  more: string[];
  /** What has happened to the followed statement by this stage. */
  follow: string;
  planned?: boolean;
}

/** Three chapters over the six stages: [title, first stage index, last stage index]. */
export const CHAPTERS: [string, number, number][] = [
  ['Gather the plans', 0, 1],
  ['Put them in shared terms', 2, 3],
  ['Look across programs', 4, 5],
];

export const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    key: 'receive',
    label: 'Partners share',
    who: 'Partner organizations',
    title: 'Partners share their logic models',
    lead: 'Partner programs send the Office of Strategic Partnerships their logic models. A logic model is a short plan that sets out what a program does and what it hopes will change for the people it serves.',
    why: 'Everything that follows starts from the partner’s own words. We do not set anyone’s goals here. We start from the goals programs set for themselves.',
    facts: [['Who', 'Partner organizations'], ['What comes out', 'A logic model for each program']],
    more: [
      'Most partners upload their logic model on the annual School Partner onboarding form, which they fill in while preparing their School Partner Agreement. Others email it or send it another way.',
      'A logic model usually has columns like these: inputs (staff, space, funding), activities (what the program does), outputs (how much it does, such as sessions held) and outcomes (what it hopes will change).',
    ],
    follow: 'In Program A’s logic model, under outcomes',
  },
  {
    key: 'extract',
    label: 'Outcomes pulled out',
    who: 'Logic Model Extractor',
    title: 'A tool sorts each plan into rows and pulls out the outcomes',
    lead: 'An internal tool puts every item in a logic model on its own row, labeled with the section it came from: activity, output, outcome, and so on.',
    why: 'Once every plan has the same shape, each program’s intended outcomes can be found, whatever the original layout looked like. Only the outcome rows move on to the next stage.',
    facts: [['Who', 'Logic Model Extractor (internal tool)'], ['What comes out', 'One row per item; only outcomes move on']],
    more: [
      'Activities and outputs matter; they are just not what this codebook sorts. “Weekly tutoring sessions” describes what a program does. “Students will attend school more regularly” describes a change it hopes to see: an intended outcome. The codebook is a list of those changes.',
    ],
    follow: 'Pulled out as a short-term outcome',
  },
  {
    key: 'suggest',
    label: 'AI suggests codes',
    who: 'AI assistant',
    title: 'An AI assistant suggests a code for each outcome',
    lead: 'An AI assistant (Google Gemini) suggests which code from the codebook fits each outcome. A code is a short, defined label, such as “Attendance & School Stability”.',
    why: 'Programs say the same thing in different words. A code gives all of those versions one name, so they can be counted together. A suggestion is only a first draft.',
    facts: [['Who', 'AI assistant'], ['What comes out', 'A suggested code for each outcome']],
    more: [
      'A sentence that holds more than one outcome is split first, so each outcome gets its own code. Our example becomes two outcomes, one about students and one about families.',
      'The assistant can only choose codes that exist in the codebook. If a sentence names no outcome, or is too vague to place, it is left without a code. When the fit is weak, the suggestion is marked low confidence so the reviewer looks closely. You can try the same assistant on a sentence of your own on the Code a statement page.',
    ],
    follow: 'Split into 2 outcomes, each with a suggested code',
  },
  {
    key: 'check',
    label: 'A person checks',
    who: 'Reviewer',
    title: 'A person checks every suggestion',
    lead: 'A reviewer reads each outcome with its suggested code, then confirms the code or picks a better one.',
    why: 'An AI can misread a sentence. In our example, it reads “confidence speaking in front of groups” as general confidence, and the reviewer picks a better code. The AI suggests; a person decides.',
    facts: [['Who', 'A reviewer'], ['What comes out', 'Codes a person has checked']],
    more: ['When the reviewer changes a code, the checked code is saved in its place. Only checked codes go into the shared record.'],
    follow: 'Both codes confirmed by a reviewer',
  },
  {
    key: 'record',
    label: 'Shared record',
    who: 'All programs together',
    title: 'Programs’ outcomes, in shared terms',
    lead: 'The checked rows are saved together in one record of every program’s intended outcomes, all labeled with the same codes.',
    why: 'This is the stage that lets programs be seen together. Two programs that described their goals in different words now share a code, so they can sit side by side.',
    facts: [['Where', 'One shared record'], ['What comes out', 'Coded intended outcomes for every program']],
    more: [
      'Each code belongs to a larger topic called a domain, such as Academic Learning & Achievement. Each domain is about who changes: young people; families and other adults in a program; or staff, organizations and systems.',
      'Each row also notes which version of the codebook it was coded with. The codebook is revised over time, so the version shows which definitions applied.',
    ],
    follow: 'Saved as two rows in the shared record',
  },
  {
    key: 'explore',
    label: 'Explore by school',
    who: 'Partnerships Dashboard',
    title: 'See what each school’s partners aim for',
    lead: 'We plan to add the shared record to the public Partnerships Dashboard. You would pick a school and see what its partner programs aim for, together.',
    why: 'One program at a time, you cannot see overlap or gaps. Side by side, you could see where many programs aim for the same outcome and where none do. Partners, funders and the district could then plan together.',
    facts: [['Where', 'Partnerships Dashboard (planned)'], ['What comes out', 'A view of each school’s intended outcomes']],
    more: [
      'We will look for two kinds of gap. A content gap is an outcome that few programs across the city aim for. A programming gap is an outcome that no program at a school aims for.',
      'Both describe coverage: what programs wrote down as their goals. They say nothing about how well a school or program is doing, and they are not a rating or ranking of anyone.',
    ],
    follow: 'Program A’s two outcomes, on the school’s chart',
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
