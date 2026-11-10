// codebooks/portraitOfAGraduate.ts
//
// Portrait of a Graduate codebook (CP-13-01, testing). Codes partner outcome
// statements directly to the School District of Philadelphia Portrait of a
// Graduate competencies and skills (version 11.2): competencies are domains,
// skills are codes. A codebook-defined "Outside the Portrait" competency (OUT)
// sorts youth results the framework does not name, so they are not forced
// into a skill. Progression stages are never coded: outcome statements almost
// never say how well or at what grade (assessment of 2026-11-10).
//
// Everything is generated from portraitOfAGraduate.data.ts.

import { Codebook, DomainDefinition } from './types.js';
import { TARGET_POPULATION_OPTIONS } from './original.js';
import { POG_COMPETENCIES, POG_SOURCE, type PogCompetency, type PogSkill } from './portraitOfAGraduate.data.js';

export const POG_VERSION = '0.1.0';

export const pogDomainCode = (c: PogCompetency) => `${c.id} ${c.name}`;
export const pogCode = (s: PogSkill) => `${s.id} ${s.name}`;

const definitionsText = POG_COMPETENCIES.map(c => {
  const lines = [pogDomainCode(c)];
  if (c.codebookDefined) {
    lines.push('(Note: codebook-defined, NOT part of the Portrait of a Graduate. Use it for a result about young people, or anyone else, that no Portrait skill names. Never use it when a Portrait skill fits.)');
  } else {
    lines.push(`Portrait group: ${c.group}. Competency statement: "${c.statement}"`);
  }
  for (const s of c.skills) {
    lines.push(pogCode(s));
    if (s.statement) lines.push(`   - Skill statement: "${s.statement}"`);
    lines.push(`   - Definition: ${s.definition}`);
    lines.push(`   - Include: ${s.include}`);
    lines.push(`   - Exclude: ${s.exclude}`);
    lines.push(`   - Use instead: ${s.useInstead}`);
  }
  return lines.join('\n');
}).join('\n\n');

const firstDomain = POG_COMPETENCIES[0];

const rulesText = `
You are an expert qualitative data coder specializing in youth-serving programs.
Your task is to code a batch of program outcome statements to the ${POG_SOURCE.title.split(',')[0]}: competencies (domains) and skills (codes).

RULES:
1. Input is a JSON array of objects. Each object has "row_id", "outcome_text", and optionally "group".
2. For each item:
   - Determine if it contains multiple distinct outcomes (split_needed: "yes" or "no").
   - If "yes" (e.g. "Students will improve their public speaking AND make new friends"):
     - Create multiple "split_items".
     - Assign codes to each split item separately.
   - If "no":
     - Create a single "split_item" with the original text.
   - Split when a statement names two or more distinct results, even if they are only loosely joined. A list of named skills is split and each skill coded.
   - Do NOT split off the means, activity, or setting through which an outcome is reached ("by designing murals", "while leading a cleanup"). Split only when the statement names two or more results.
3. CODING PROCESS for each item:
   - Select the BEST FIT "Primary Domain" (a competency) and "Primary Subcategory" (a skill). The domain is always the one whose ID prefixes the skill (POG.5.1 is in POG.5).
   - Code the skill the statement says a young person builds or uses. A partner outcome is a goal for a group; do NOT judge or record how well or at what stage or grade young people perform it.
   - Assign a "Confidence" level (high, medium, low, none). Confidence says how well the codebook fits the statement:
     - high: the statement clearly names the chosen skill.
     - medium: a reasonable best fit, but the statement only partly matches the skill or goes beyond it.
     - low: a forced placement, including an activity or exposure that names what is taught but no result ("exposure to careers in science" -> POG.13.1, low).
     - none: only for uncoded items.
   - OUTSIDE THE PORTRAIT: a real result that no Portrait skill names goes to competency OUT with the matching OUT code, with "Uncoded" false. Feelings, beliefs and identity -> OUT.1 (confidence, self-esteem, feeling one belongs, enjoyment, interest). Relationships a young person has -> OUT.2 (a mentor, friends, family). Status and attainment -> OUT.3 (attendance, grades, graduation, college enrollment, jobs). Health, safety and services -> OUT.4. Results for families, staff, programs or systems -> OUT.5, including program attendance and numbers served. Skills or knowledge the Portrait does not name -> OUT.6. Never use OUT when a Portrait skill fits the statement.
   - "Uncoded": set to true only for text that states no result at all: a header or fragment ("Participants will show growth in the following areas:"), a bare program name, a data-collection note, or text too vague to code ("N/A", "Improve outcomes for students").
   - DOMAIN ONLY: when a statement names one Portrait competency but no specific skill in it, code the competency and set primary_subcategory to "none", with "Uncoded" false. Examples: "critical thinking" or "higher-order thinking" -> POG.7, subcategory none; "college and career readiness" -> POG.13, subcategory none. A broad label spanning several competencies ("21st-century skills", "soft skills", "life skills", "social-emotional growth") stays uncoded. Never use OUT with subcategory none.
   - Whenever "Uncoded" is true, set primary_confidence to "none" and primary_subcategory to "none". Whenever you assign a skill, an OUT code or a competency only, set "Uncoded" to false and use high, medium, or low.
   - "Target Population":
     - Default to "students_youth" for outcomes about participants, children, or students.
     - Use "families_caregivers" ONLY if parents/families are the subject; "educators_staff" ONLY if teachers/staff are the subject; "mentors_volunteers" for volunteers, mentors or coaches. These results go to OUT.5.
   - "Subject Area": always "none".
4. OUTPUT FORMAT:
   - Return a strictly valid JSON object.
   - Root property: "coded_items" (array).
   - Match the schema provided in the tool definition exactly.

HOW TO CHOOSE A SKILL:
1. SKILL vs. FEELING: the Portrait names skills ("I can..."). A feeling or belief with no skill ("feel confident", "feel they belong", "enjoy reading") -> OUT.1. Confidence in a named skill where the skill is the result ("confidently present their work") -> the skill.
2. BELONGING: making others feel welcome -> POG.6.1; feeling one belongs -> OUT.1.
3. MENTORS AND NETWORKS: using mentors and contacts to reach opportunities or help with a goal -> POG.6.2; having a caring mentor or trusted adult -> OUT.2.
4. LEADERSHIP: leading peers within a group task, or leadership with no setting -> POG.5.1; leading community improvement -> POG.6.3; influencing public or institutional decisions -> POG.10.2; launching a venture or initiative -> POG.9.4.
5. COMMUNICATION: communication with no medium -> POG.3.1; public speaking and presenting -> POG.3.3; writing -> POG.3.2; listening and discussion -> POG.4.1; debate as dialogue on hard issues -> POG.4.2, as reasoning about arguments -> POG.7.5; workplace communication -> POG.14.6.
6. SELF-MANAGEMENT: organization, time management and follow-through -> POG.1.3; setting goals and tracking progress -> POG.1.4; perseverance, grit and resilience -> POG.2.4; emotions, stress and impulses -> POG.2.3.
7. PROBLEM SOLVING AND DECISIONS: problem solving or decision-making in general -> POG.8.2; interpersonal conflict -> POG.4.2; team conflict -> POG.5.2; ethical dilemmas -> POG.11.1; choosing a college or career path -> POG.13.3.
8. ACADEMICS: reading and literacy -> POG.12.1; writing -> POG.3.2; math -> POG.12.3; science -> POG.12.5; history -> POG.10.4; test preparation or academic growth with no subject -> POG.12.6; grades, credits and graduation -> OUT.3.
9. ARTS AND CREATIVITY: creating or performing original work -> POG.9.2; generating ideas or creativity in general -> POG.9.1; art technique or vocabulary alone -> OUT.6; visual work made to convey a message -> POG.3.4; stories -> POG.3.5.
10. CAREER AND COLLEGE: career interest and exposure -> POG.13.1; learning what pathways require, visits and job shadowing -> POG.13.2; applications, aid forms, plans and credentials as steps -> POG.13.4; resumes and essays -> POG.14.3; interviews -> POG.14.4; professionalism on the job -> POG.13.5; having a job or enrolling in college -> OUT.3.
11. DIGITAL: online safety and conduct -> POG.6.4; ethical use of technology or artificial intelligence -> POG.11.3; using digital tools to learn or work -> POG.12.7; coding -> OUT.6; a professional online profile -> POG.14.7; having a device -> OUT.5.
12. CIVIC AND ETHICAL: civic knowledge and participation -> POG.10.2; understanding social issues and their causes -> POG.10.3; standing up for others or against injustice -> POG.4.4; community service -> POG.6.3; environmental stewardship -> POG.11.2; honesty, responsibility, sportsmanship -> POG.11.4; naming one's values or purpose -> POG.2.1.
13. HEALTH: healthy habits and self-care -> POG.2.2; coping strategies -> POG.2.3; symptoms, services, safety, substance use and violence -> OUT.4; sport and motor skills -> OUT.6.
14. ORDER CARRIES NO WEIGHT. Competency and skill numbers do not signal priority.

CRITICAL for Formatting:
- Ensure the 'primary_domain' string exactly matches a competency header (e.g. "${pogDomainCode(firstDomain)}").
- Ensure the 'primary_subcategory' string exactly matches a skill (e.g. "${pogCode(firstDomain.skills[0])}").
`;

const domains: DomainDefinition[] = POG_COMPETENCIES.map(c => ({
  code: pogDomainCode(c),
  hint: c.codebookDefined ? 'Codebook-defined: not part of the Portrait of a Graduate.' : `${c.group}${c.hasProgression ? '' : ' (no progression in version 11.2)'}`,
  description: c.codebookDefined
    ? 'Results the Portrait of a Graduate does not name: feelings and identity, relationships, status and attainment, health and safety, results for families, staff and systems, and other skills.'
    : c.statement,
  subcategories: c.skills.map(s => ({ code: pogCode(s), hint: `Use instead: ${s.useInstead}` })),
}));

export const portraitOfAGraduateCodebook: Codebook = {
  id: 'portrait_of_a_graduate',
  version: POG_VERSION,
  label: 'Portrait of a Graduate (testing)',
  promptLabel: 'Portrait of a Graduate',
  rulesText,
  definitionsText,
  capabilities: {
    hasSubcategories: true,
    hasSubjectArea: false,
    hasTargetPopulation: true,
    domainOnly: true,
  },
  targetPopulationOptions: TARGET_POPULATION_OPTIONS,
  domains,
};
