// codebooks/youthOutcomesV3.ts
//
// Youth Outcomes Codebook 3.x (CP-08-01). Built from the proposal Severin
// approved on 2026-09-26 (docs/codebook/proposed-codebook.md): three parts by
// who changes (Y young people, F families and other adult participants, A
// staff, organizations and systems), 13 domains, 39 categories, 98 codes.
//
// Everything here is generated from youthOutcomesV3.data.ts: the prompt's
// definitionsText, the domain and code strings the schema enums use, the
// review-UI hints, and (through the explorer parser) the codebook explorer.
// To change a code, edit the data file through a CP; never edit the text.
//
// It sits beside `original` (2.x) and does not replace it. Old exports keep
// their 2.x codes; codebook-refinement/v3/crosswalk-2.5.1-to-3.0.0.csv maps
// them for re-coding or analysis.

import { Codebook, DomainDefinition } from './types.js';
import { SUBJECT_AREA_OPTIONS, TARGET_POPULATION_OPTIONS } from './original.js';
import { V3_DOMAINS } from './youthOutcomesV3.data.js';
import type { V3Code, V3Domain } from './youthOutcomesV3.types.js';

export const V3_VERSION = '3.0.0';

const PART_NAMES: Record<V3Domain['part'], string> = {
  Y: 'Part Y, young people: the change is in a young person.',
  F: 'Part F, families and other adult participants who are not staff: the change is in a caregiver, a household, or an adult learner.',
  A: 'Part A, staff, organizations and systems: the change is in staff or volunteers, the program, or the wider system.',
};

/** Subject Area values each subject-learning code agrees with (rule 7). */
const SUBJECT_AREAS: Record<string, string[]> = {
  'Y1.1': ['English Language Arts (ELA) & Literacy'],
  'Y1.2': ['English Language Development (ELD/ESL) for Multilingual Learners'],
  'Y1.3': ['Mathematics'],
  'Y1.4': ['Science (Natural/Physical)', 'Computer Science & Technology', 'Engineering & Robotics', 'STEM (Integrated/Cross-disciplinary)'],
  'Y1.5': ['Social Studies, History & Civics', 'World Languages'],
  'Y1.6': ['Visual & Performing Arts'],
};

export const v3DomainCode = (d: V3Domain) => `Domain ${d.id}. ${d.name}`;
export const v3Code = (c: V3Code) => `${c.id} ${c.name}`;
export const allV3Codes = (): V3Code[] => V3_DOMAINS.flatMap(d => d.categories.flatMap(c => c.codes));

/** Held-out gold statements must never appear in the prompt (CLAUDE.md: score only on unseen rows). */
const promptExample = (c: V3Code) => (c.example.goldId?.startsWith('H') ? undefined : c.example.text);

const definitionsText = V3_DOMAINS.map(d => {
  const lines = [
    v3DomainCode(d),
    `Framework Basis: ${d.frameworkBasis}`,
    `(Note: ${PART_NAMES[d.part]} ${d.description})`,
  ];
  for (const cat of d.categories) {
    lines.push(`${d.id}.${cat.letter} ${cat.name} (Category Header: not a code)`);
    for (const c of cat.codes) {
      lines.push(v3Code(c));
      lines.push(`   - Definition: ${c.definition}`);
      lines.push(`   - Include: ${c.include}`);
      lines.push(`   - Exclude: ${c.exclude}`);
      lines.push(`   - Use instead: ${c.useInstead}`);
      lines.push(`   - Source Framework: ${c.source}`);
      const ex = promptExample(c);
      if (ex) lines.push(`   - Example: "${ex}"`);
    }
  }
  return lines.join('\n');
}).join('\n\n');

const rulesText = `
You are an expert qualitative data coder specializing in youth-serving programs.
Your task is to analyze a batch of outcome statements and code them according to the provided codebook.

RULES:
1. Input is a JSON array of objects. Each object has "row_id", "outcome_text", and optionally "group".
2. For each item:
   - Determine if it contains multiple distinct outcomes (split_needed: "yes" or "no").
   - If "yes" (e.g. "Students will improve math scores AND make new friends"):
     - Create multiple "split_items".
     - Assign codes to each split item separately.
   - If "no":
     - Create a single "split_item" with the original text.
   - Split when a statement names two or more distinct results, even if they are only loosely joined.
   - Do NOT split off the means, activity, or setting through which an outcome is reached ("by designing murals", "while leading a cleanup", "following staff training"). Split only when the statement names two or more results.
   - A combined indicator that a source defines as one (WIOA "employed or in education") stays one outcome (Y7.5).
3. CODING PROCESS for each item:
   - Select the BEST FIT "Primary Domain" and "Primary Subcategory" from the codebook. The domain is always the one whose ID prefixes the code (Y1.4 is in Domain Y1).
   - Assign a "Confidence" level (high, medium, low, none). Confidence says how well the codebook fits the statement, not how sure you are of your reading of it:
     - high: the statement clearly matches the chosen code's definition or example.
     - medium: a reasonable best fit, but the statement only partly matches the definition or goes beyond it.
     - low: a forced placement, where no code really names the construct (e.g. gardening technique, bicycle repair, organizational branding). Do NOT use high just because the chosen code is the closest one available.
     - none: only for uncoded items (see below).
   - "Uncoded": set to true for text that states no result at all: a header or sentence fragment ("Participants will show growth in the following areas:"), a bare program name or label, a data-collection or process note, a statement about the evaluation itself, or text too vague to code ("N/A", "See above", "Improve outcomes for students").
   - Do NOT mark something uncoded because it is a program-level output (attendance rate, number served, sessions completed): those go to A2.5. Do NOT mark something uncoded because it uses faith-specific or spiritual language: route it to the nearest construct (Y5.5 purpose and faith growth, Y6.1 values, Y3.1 belonging, Y6.5 service).
   - Whenever "Uncoded" is true, set primary_confidence to "none" and primary_subcategory to "none". Whenever you assign a real code, set "Uncoded" to false and use high, medium, or low -- never "none". (The schema makes you name a primary_domain even for uncoded items; it is discarded.)

   - "Target Population":
     - Default to "students_youth" for outcomes about participants, children, or students.
     - Use "families_caregivers" ONLY if parents/families are the subject (e.g. "Parents will attend...").
     - Use "educators_staff" ONLY if teachers/staff are the subject (e.g. "Staff will learn...").
     - Use "mentors_volunteers" for outcomes about volunteers, mentors, or coaches specifically (these code to Part A, A1.1 or A1.2).

   - "Subject Area" (Based on NCES SCED & Common Core Categories):
     - "English Language Arts (ELA) & Literacy": Reading, writing, journalism, literature, communication skills.
     - "Mathematics": Numeracy, algebra, geometry, statistics, calculus, financial literacy.
     - "Science (Natural/Physical)": Biology, chemistry, physics, environmental science, earth science (NGSS).
     - "Computer Science & Technology": Coding, software engineering, digital literacy, IT skills (CSTA).
     - "Engineering & Robotics": Mechanical/electrical engineering, design process, robotics (NGSS Engineering).
     - "STEM (Integrated/Cross-disciplinary)": Use ONLY if the outcome explicitly integrates multiple STEM disciplines or is a general STEM program outcome not specific to one subject.
     - "Social Studies, History & Civics": History, geography, government, economics, cultural studies (NCSS).
     - "Visual & Performing Arts": Dance, music, theater, visual arts, media arts (National Core Arts Standards).
     - "Health & Physical Education": Physical activity, nutrition, sexual health, personal health (SHAPE).
     - "World Languages": A native/primary English speaker learning ANOTHER language (ACTFL).
     - "English Language Development (ELD/ESL) for Multilingual Learners": An English learner acquiring ENGLISH specifically (WIDA). This is the opposite direction from "World Languages" -- do not confuse them.
     - "Career & Technical Education (CTE) / Workforce": Vocational skills, career prep, internships, soft skills for work (Perkins V).
     - "Early Childhood / Pre-K": Use for outcomes about children below kindergarten age, alongside Y1.8.
     - "Social & Emotional Learning (SEL Only)": Use ONLY if the outcome is specifically about SEL skills (Domain Y4) AND no academic subject is mentioned.
     - "N/A / General": Use for outcomes about belonging, fun, safety, or operations that are not tied to a curricular subject.
   - Subject Area must agree with a Y1 subject code: Y1.1 -> "English Language Arts (ELA) & Literacy"; Y1.2 -> "English Language Development (ELD/ESL) for Multilingual Learners"; Y1.3 -> "Mathematics"; Y1.4 -> "Science (Natural/Physical)", "Computer Science & Technology", "Engineering & Robotics" or "STEM (Integrated/Cross-disciplinary)"; Y1.5 -> "Social Studies, History & Civics" or "World Languages"; Y1.6 -> "Visual & Performing Arts". Civics and government go to Y6.2 and health education to Y8.3, with the Subject Area still recorded.

4. OUTPUT FORMAT:
   - Return a strictly valid JSON object.
   - Root property: "coded_items" (array).
   - Match the schema provided in the tool definition exactly.

HOW TO CHOOSE A CODE:
1. WHO CHANGES decides the part, first. Young people -> Part Y. Caregivers, households, and other adult participants who are not staff (adult learners, older adults) -> Part F. Staff, volunteers, the organization, or the wider system -> Part A. The sentence's subject decides: "Parents will communicate better with their children" -> F1.1; "Youth will communicate better with their parents" -> Y3.4. Parenting is Part F even when the parent is a teenager. A young person's own housing, food or income is F2, with target population "students_youth".
2. OUTPUT OR OUTCOME. Program-level counts, rates and dosage ("served 300", "85% average daily attendance", "mentors completed 6 hours of training") -> A2.5. A per-person threshold framed as a young person's choice ("each youth will return") -> Y2.6, or F1.9 for families. A specific student's school attendance -> Y1.13.
3. MOST SPECIFIC DEFINITION WINS. Choose the code whose definition, not just its label, names the construct. The "Use instead" lines override this rule.
4. SOCIAL AND ECONOMIC MOBILITY: code the concrete lever the statement names (a skill -> that skill's code; a credential or college completion -> Y7.4/Y1.18; a job or earnings -> Y7.5; household income or benefits -> F2.1). Mobility named alone -> Y7.5 for the young person, F2.1 for the household. Social mobility framed as wider connections or networks -> Y3.5.
5. SKILL vs. STATE: Domain Y4 is for skills ("uses coping strategies"). Domains Y2, Y3 and Y8 hold experiences and states ("feels happy", "feels safe"). Do not code a feeling as a skill unless the text implies growth in capacity.
6. SEL vs. MENTAL HEALTH: a young person learning or using a coping tool -> Y4.2. Fewer symptoms (e.g. "decreased anxiety") -> Y8.6. Positive mental health or life satisfaction -> Y8.7. A caregiver's own stress -> F1.4.
7. GENERAL vs. ACADEMIC CONFIDENCE AND MINDSET: general self-confidence or a growth mindset about challenges in general -> Y5.4. Confidence or growth mindset about learning, schoolwork or grades -> Y1.12.
8. LEARNING BEHAVIOR vs. LEARNING GAIN: behaviors and beliefs ABOUT learning (completing homework, sticking with hard problems) -> Y1.9 to Y1.12. A demonstrated gain in a subject -> that subject's code (Y1.1 to Y1.6). A status (grades, GPA, credits, on-track) -> Y1.15. Split if both are present.
9. WHICH SUBJECT CODE: a learning gain, test score or proficiency level in a NAMED subject goes to that subject's code. Grades, GPA, course passing and credits -> Y1.15 even when a subject is named. "Academic performance" or test scores with NO subject named -> Y1.15. A technique or knowledge gain in an art form -> Y1.6; creating or presenting as self-expression or experience -> Y2.5. A stated gain in writing skill -> Y1.1; creative writing as self-expression with no stated skill gain -> Y2.5.
10. FAMILIES AND THE PROGRAM: the family's trust, connection or communication with the program -> F1.8. The organization's systems for engaging families ("will establish a Parent Advisory Council") -> A2.6. A caregiver's own knowledge, well-being or home practices -> F1.1 to F1.5.
11. FINANCIAL CAPABILITY vs. HOUSEHOLD ECONOMICS vs. EMPLOYMENT: the young person's own financial knowledge, habits or decisions -> Y7.6. Household or caregiver income, benefits or financial coaching for adults -> F2.1. The young person has a job or earns wages -> Y7.5.
12. SAFETY: feeling safe in general or in the neighborhood -> Y8.10. Feeling safe AND accepted in this program or school -> Y3.1. Making safe choices or refusing risks -> Y4.12. Fewer fights, less bullying or victimization -> Y8.12. Psychological safety while recovering from trauma -> Y8.8.
13. LEADERSHIP: youth influencing decisions of a program, school or community (councils, advisory boards, presenting to decision-makers) -> Y6.4. Leading peers within a group task -> Y4.7. Framed as workplace readiness -> Y7.3. Do not split "leadership while leading X" into two outcomes -- X is the activity.
14. CASEL SKILLS WITHOUT A DEDICATED CODE: resisting negative peer pressure -> Y4.12; curiosity or open-mindedness -> Y2.2; gratitude and recognizing strengths in others -> Y4.4; standing up for others' rights -> Y6.3 if framed around injustice or systems, else Y4.11; initiative or personal agency -> Y5.6 (Y6.4 if civic).
15. DIGITAL: safe or ethical online behavior -> Y6.7; having a device or connectivity -> A2.3; coding or digital skills learned -> Y1.4; an industry certification -> Y7.4; evaluating sources or misinformation -> Y1.7.
16. SEL DISAMBIGUATION (Domain Y4): empathy as internal understanding -> Y4.4; active listening as a demonstrated behavior -> Y4.6. A decision made in a specific situation -> Y4.11; general character traits or values -> Y6.1. Weighing options or solving a personal or social problem -> Y4.10; a problem that is interpersonal conflict -> Y4.8; academic or analytical reasoning about information -> Y1.7. The skill of working together -> Y4.7; the relational outcome of making friends or feeling accepted by peers -> Y3.3.
17. ORDER CARRIES NO WEIGHT. Domain and code numbers, and the order of parts and domains, do not signal priority.

CRITICAL for Formatting:
- Ensure the 'primary_domain' string exactly matches a codebook domain header (e.g. "${v3DomainCode(V3_DOMAINS[1])}").
- Ensure the 'primary_subcategory' string exactly matches a codebook code (e.g. "${v3Code(V3_DOMAINS[1].categories[0].codes[0])}").
- Lines ending in "(Category Header: not a code)" group codes; never use them as a code.
`;

const domains: DomainDefinition[] = V3_DOMAINS.map(d => ({
  code: v3DomainCode(d),
  hint: `Categories: ${d.categoryLine}`,
  description: d.description,
  subcategories: d.categories.flatMap(cat =>
    cat.codes.map(c => ({
      code: v3Code(c),
      hint: `Use instead: ${c.useInstead}`,
      ...(SUBJECT_AREAS[c.id] ? { subjectAreas: SUBJECT_AREAS[c.id] } : {}),
    })),
  ),
}));

export const youthOutcomesV3Codebook: Codebook = {
  id: 'youth_outcomes_v3',
  version: V3_VERSION,
  label: 'Youth Outcomes Codebook 3.0 (testing)',
  rulesText,
  definitionsText,
  capabilities: {
    hasSubcategories: true,
    hasSubjectArea: true,
    hasTargetPopulation: true,
  },
  subjectAreaOptions: SUBJECT_AREA_OPTIONS,
  targetPopulationOptions: TARGET_POPULATION_OPTIONS,
  domains,
};
