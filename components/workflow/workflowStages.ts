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
    lead: 'Each partner program sends the Office of Strategic Partnerships its logic model: a short plan that sets out what the program does and what it hopes will change for the people it serves.',
    why: 'Everything that follows starts from the partner’s own words. The district does not set anyone’s goals here. It collects the goals programs set for themselves.',
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
    title: 'Each plan is sorted into rows, and the outcomes are pulled out',
    lead: 'An internal tool puts every item in a logic model on its own row, labeled with the section it came from: activity, output, outcome, and so on.',
    why: 'Once every plan has the same shape, each program’s intended outcomes can be found, whatever the original layout looked like. Only the outcome rows go on.',
    facts: [['Who', 'Logic Model Extractor (internal tool)'], ['What comes out', 'One row per item; outcome rows go on']],
    more: [
      'Why leave out activities and outputs? “Weekly tutoring sessions” describes what a program does. “Students will attend school more regularly” describes a change it hopes to see: an intended outcome. The codebook is a list of those changes.',
      'If the tool cannot tell which section an item belongs to, it flags the item for a person to look at.',
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
      'The assistant can only choose codes that exist in the codebook. If nothing fits, it leaves the outcome uncoded rather than forcing a match. You can try the same assistant on a sentence of your own on the Code a statement page.',
    ],
    follow: 'Split into 2 outcomes, each with a suggested code',
  },
  {
    key: 'check',
    label: 'A person checks',
    who: 'Reviewer',
    title: 'A person checks every suggestion',
    lead: 'A reviewer reads each outcome with its suggested code, then confirms the code or picks a better one. Nothing is saved until a person has decided.',
    why: 'An AI can misread a sentence. Here it read “confidence speaking in front of groups” as general confidence, and the reviewer picked a better code. The AI suggests; a person decides.',
    facts: [['Who', 'A reviewer'], ['What comes out', 'Codes a person has checked']],
    more: ['Every suggested code is reviewed, not a sample. When the reviewer changes one, the checked code is saved in its place.'],
    follow: 'Both codes confirmed by a reviewer',
  },
  {
    key: 'record',
    label: 'Shared record',
    who: 'One list for all programs',
    title: 'Every program’s goals, in one shared language',
    lead: 'The checked rows are saved together in one record of every program’s intended outcomes, all labeled with the same codes.',
    why: 'This is the step that makes comparison possible. Two programs that described their goals in different words now share a code, so they can sit side by side.',
    facts: [['Where', 'One shared record'], ['What comes out', 'Coded intended outcomes for every program']],
    more: [
      'Each code belongs to a larger group called a domain, such as Academic Learning & Achievement. Each domain is about one of three groups: young people; families; or staff, organizations and systems.',
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
    why: 'One program at a time, you cannot see overlap or gaps. Side by side, you can see where many programs aim for the same outcome and where none do, so partners, funders and the district can plan together.',
    facts: [['Where', 'Partnerships Dashboard (planned)'], ['What comes out', 'A view of each school’s intended outcomes']],
    more: [
      'We will look for two kinds of gap. A content gap is an outcome few partners aim for anywhere. A programming gap is an outcome no program at a school, or in a region, aims for.',
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
