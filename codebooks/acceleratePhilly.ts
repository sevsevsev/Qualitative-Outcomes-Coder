// codebooks/acceleratePhilly.ts
//
// Crosswalk codebook: codes nonprofit logic-model outcomes against the
// Accelerate Philly Strategic Plan's five priority areas. Unlike the
// "original" codebook, this is a flat crosswalk (no subcategories, subject
// area, or target population dimensions).

import { Codebook } from './types';

const definitionsText = `
Accelerate Philly Codebook:
    Code 01: Improve Safety and Well-being
        Definition: Focuses on improving the physical, social-emotional, and environmental safety of students and staff.
        Inclusion Criteria: Apply this code when the outcome explicitly addresses school facility improvements (e.g., lead/asbestos remediation, security cameras) , safe travel to and from school , school climate and restorative justice programs (e.g., PBIS, SEL) , mental and behavioral health services , nursing and physical health supports , food security and breakfast programs , or supervised recess models.
        Exclusion Criteria: Do NOT apply this code if the outcome focuses strictly on academic tutoring or family communication that does not directly address physical or emotional safety.

    Code 02: Partner with Families and Community
        Definition: Focuses on fostering trusting relationships, two-way communication, and collaborative structures with parents, guardians, and the community.
        Inclusion Criteria: Apply this code when the outcome explicitly mentions developing multilingual communication systems , facilitating parent/guardian or community advisory groups , improving coordination of community partnerships , adult education via Parent University , utilizing parent ambassadors , or replicating Community School wrap-around models.
        Exclusion Criteria: Do NOT apply this code for general student out-of-school time that lacks a structural family engagement component.

    Code 03: Accelerate Academic Achievement
        Definition: Focuses on improving student learning, achieving grade-level proficiency on state assessments, providing well-rounded educational opportunities, and keeping students on track for graduation.
        Inclusion Criteria: Apply this code when the outcome explicitly targets access to high-quality Pre-K , standards-aligned core curriculum (Math, ELA/Science of Reading, Science) , high-impact tutoring , extended-day or out-of-school time programming , Individualized Education Plan (IEP) compliance or English Learner support , expansion of arts, music, and rigorous course offerings , Career and Technical Education (CTE) , 9th Grade On-Track initiatives , dropout reduction , or financial literacy.
        Exclusion Criteria: Do NOT apply this code for programs focused solely on basic physiological needs or standalone teacher recruitment.

    Code 04: Recruit and Retain Diverse and Highly Effective Educators
        Definition: Focuses on hiring, developing, and retaining a workforce of teachers and leaders that reflect the diversity of the student population and are well-supported.
        Inclusion Criteria: Apply this code when the outcome explicitly addresses teacher/principal recruitment and retention incentives , recruiting Black and Latino male educators , "Grow-Your-Own" and paraprofessional-to-teacher pathways , establishing instructional leadership teams , instructional coaching and feedback models , or providing ongoing professional development for instructional and non-instructional staff.
        Exclusion Criteria: Do NOT apply this code for direct student instruction or student mentoring programs.

    Code 05: Deliver Efficient, High-Quality, Cost-Effective Operations
        Definition: Focuses on improving district-level systems, budgeting transparency, facilities maintenance, and central office accountability.
        Inclusion Criteria: Apply this code when the outcome explicitly mentions building project management capacity , streamlining staff onboarding/hiring timelines , organizational succession planning , implementing equitable school selection processes , maintaining school cleanliness standards , or extending evidence-based budgeting practices.
        Exclusion Criteria: Do NOT apply this code for school-level student climate initiatives or individual classroom curriculum execution.
`;

const rulesText = `
Task: Your objective is to perform rigorous qualitative coding on non-profit program logic models. You will crosswalk the stated outcomes of these programs against the Accelerate Philly Strategic Plan Codebook provided below.

Strict Coding Rules:
    Substantive Connection Only: You must only apply a code if the non-profit's outcome demonstrates a direct, substantive, and logical contribution to the strategic plan priority. Do not infer or stretch connections. If an outcome only tangentially touches a priority area, do not code it.
    Mutually Exclusive vs. Exhaustive: A single outcome may align with multiple codes. Apply multiple codes only if distinct elements of the outcome independently satisfy the inclusion criteria for each code.
    Confidence Threshold: If you are unsure whether an outcome meets the inclusion criteria, default to excluding it. Precision is more important than volume.

RULES:
1. Input is a JSON array of objects. Each object has "row_id", "outcome_text", and optionally "group".
2. For each item:
   - Determine if it contains multiple distinct outcomes (split_needed: "yes" or "no").
   - If "yes" (e.g. "Students will improve math scores AND make new friends"):
     - Create multiple "split_items".
     - Assign codes to each split item separately.
   - If "no":
     - Create a single "split_item" with the original text.
3. CODING PROCESS for each item:
   - Select the BEST FIT "Primary Domain" from the codebook.
   - Assign a "Confidence" level (high, medium, low, none).
   - "Uncoded": Set to true IF the text is vague, irrelevant, or does not fit any domain (e.g. "N/A", "See above").

OUTPUT FORMAT:
   - Return a strictly valid JSON object.
   - Root property: "coded_items" (array).
   - Match the schema provided in the tool definition exactly.
   - For each item, output the results as a flat, structured JSON array of objects in "split_items". Do not nest arrays within the objects to ensure seamless transformation into tabular datasets. Use the following keys for each split item:
     - text: The exact text of the non-profit's stated outcome (or the specific split portion).
     - primary_domain: The specific code applied (e.g., "Code 03: Accelerate Academic Achievement").
     - primary_subcategory: Use "none".
     - primary_confidence: High or Medium.
     - notes: A brief explanation citing the specific language from the logic model that triggered the code.
     - subject_area: Use "none".
     - target_population_primary: Use "none".
     - secondary_codes: Leave empty array.
     - uncoded: true if no code applies, false otherwise.
`;

export const acceleratePhillyCodebook: Codebook = {
  id: 'accelerate_philly',
  version: '1.0.0',
  label: 'Accelerate Philly Strategic Plan',
  rulesText,
  definitionsText,
  capabilities: {
    hasSubcategories: false,
    hasSubjectArea: false,
    hasTargetPopulation: false,
  },
  domains: [
    { code: "Code 01: Improve Safety and Well-being", subcategories: [] },
    { code: "Code 02: Partner with Families and Community", subcategories: [] },
    { code: "Code 03: Accelerate Academic Achievement", subcategories: [] },
    { code: "Code 04: Recruit and Retain Diverse and Highly Effective Educators", subcategories: [] },
    { code: "Code 05: Deliver Efficient, High-Quality, Cost-Effective Operations", subcategories: [] },
  ],
};
