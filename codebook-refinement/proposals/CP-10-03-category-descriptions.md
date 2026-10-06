# CP-10-03: A short description for each category

| Field | Value |
|---|---|
| Type | HINT |
| Codes touched | none; all 39 categories gain a `description` |
| Version bump | PATCH (3.1.2 → 3.1.3) |
| Requirement served | R4 drift (readers of the explorer and dashboard see what a category holds) |
| Status | approved by Severin 2026-10-06 in the outcomes-dashboard wheel thread ("Category wording looks good to me") |
| Enum cost | +0 (160 → 160) |
| Framework deviation | none. Each description restates what the category's own codes already cover; no code's scope changes. |

## Problem

Categories carried only a letter and a name. The outcomes dashboard shows the codebook's text for whatever
a reader opens, and for a category it had nothing to say beyond "A category in <domain>". Severin asked
for real category definitions on 2026-10-06.

## Change

`V3Category` gains a required `description` field. The text is display-only: it is not added to
`definitionsText`, `rulesText` or any hint, so the coding prompt is unchanged (a test checks that no
description appears in `definitionsText`). No citation is added; each sentence is a summary of the
category's codes, written from their definitions.

| Category | Name | Description |
|---|---|---|
| Y1.A | Subject learning | Demonstrated learning in a subject: reading and writing, English and home languages, math, science and computing, other academic subjects, the arts, critical thinking and inquiry, and early learning before kindergarten. |
| Y1.B | Learning behaviors & mindsets | The behaviors and beliefs that shape how a young person learns: taking part in schoolwork, persisting with hard tasks, using study strategies, and believing in oneself as a learner. |
| Y1.C | Educational progress & attainment | A young person's status and progress through school and beyond: attendance, discipline, grades and credits, advanced courses, graduation, and college or training after high school. |
| Y2.A | Enjoyment & interest | How young people feel about learning and activities: enjoying them, becoming curious, developing a lasting interest of their own, and seeing why learning matters for their goals. |
| Y2.B | Expression & participation | Young people expressing themselves by making, performing or responding to creative work, and choosing to take part in enriching activities in or outside the program. |
| Y3.A | Connectedness | Feeling accepted, valued and safe in a program, school or community. |
| Y3.B | Close relationships | A young person's close relationships: with caring adults outside the family, with friends and peers, and with their own family. |
| Y3.C | Networks | A wider network of adults, peers, professionals and employers that a young person can draw on for educational or career opportunities. |
| Y4.A | Self-awareness | Recognizing and naming one's own emotions. This is the part of CASEL's self-awareness competency coded here; beliefs about oneself are in Identity, Confidence & Agency. |
| Y4.B | Self-management | Managing emotions, stress and impulses, and setting and working toward personal goals. |
| Y4.C | Social awareness | Understanding others' feelings and perspectives, reading social settings, and respecting people of different backgrounds. |
| Y4.D | Relationship skills | Communicating, working in teams, building relationships and resolving conflict, and seeking or offering help. |
| Y4.E | Responsible decision-making | Weighing options and solving problems, making ethical and prosocial choices, and avoiding risks and negative peer pressure. |
| Y5.A | Identity | Who a young person understands themselves to be: exploring their identity, taking pride in their cultural and social identities, and seeing themselves as part of a field such as STEM or the arts. |
| Y5.B | Self-beliefs | A young person's general belief in their own ability and worth: confidence, self-efficacy and self-esteem. |
| Y5.C | Purpose & agency | A sense of purpose, hope and aspiration for the future, and acting as the agent in one's own life by making choices and advocating for one's needs. |
| Y6.A | Character | General character traits and guiding values such as integrity, honesty and responsibility. |
| Y6.B | Civic understanding | Understanding how government and civic institutions work, and analyzing power, inequity and injustice. |
| Y6.C | Civic action | Taking part in civic and community life: civic voice and leadership, community service and projects, and caring for the environment. |
| Y6.D | Digital citizenship | Behaving safely, legally and ethically online. |
| Y7.A | Exploration & navigation | Learning about careers and pathways, and knowing and completing the steps into college or work. |
| Y7.B | Work readiness | Skills and credentials for the workplace: professionalism, technical and industry skills, certifications, internships and apprenticeships. |
| Y7.C | Employment & independence | Results in work and adult independence: getting and keeping a job, managing money, and the daily living skills needed to live on one's own. |
| Y8.A | Physical health | A young person's physical health: daily health habits, motor and sport skills, health knowledge, sexual and reproductive health, and access to health care. |
| Y8.B | Mental health | A young person's mental health: fewer symptoms and distress, flourishing and life satisfaction, healing from trauma, and access to mental health services. |
| Y8.C | Safety, risk & justice | A young person's safety and risk: feeling safe, substance use, violence and bullying, and involvement with the justice system. |
| F1.A | Parenting & home learning | How caregivers raise children and support their learning: parenting knowledge and practices, learning routines at home, and family health practices. |
| F1.B | Caregiver well-being & support | The caregiver's own well-being, resilience and supportive connections with other parents and the community. |
| F1.C | Adult development & navigation | Caregivers and other adult participants building their own education, skills and employment, and learning to navigate systems and know their rights. |
| F1.D | Family-program partnership | The family's relationship with the program or school: trust and communication, and taking part in program or school activities and decisions. |
| F2.A | Economic stability | Household or independent-youth income, public benefits and financial stability. |
| F2.B | Food & housing | Having enough healthy food and a safe, stable place to live. |
| A1.A | Staff learning & practice | What staff and volunteers learn and how they apply it in their practice. |
| A1.B | Workforce | Whether the workforce stays and stays well: staff retention, turnover and well-being. |
| A2.A | Quality & experience | How good the program is and how it is experienced: assessed program quality and participant or family satisfaction. |
| A2.B | Access & inclusion | Making the program reachable for everyone: providing resources and removing barriers through accommodations and language access. |
| A2.C | Reach & engagement systems | How many people the program reaches and how much they receive, and the program's systems for engaging families. |
| A3.A | Policy & institutions | Changes in policy, funding or institutional practice in schools, districts, cities or states. |
| A3.B | Partnerships & community | Change across organizations and neighborhoods: cross-sector partnerships and community cohesion and collective efficacy. |

## Sources

None new.

## Gold impact

None: the prompt does not change.

## Judge result

Not run: a display-only PATCH with no prompt change.
