# CP-06-01: Give every domain a hint and an overview

| Field | Value |
|---|---|
| Type | HINT |
| Codes touched | Domain 1-12 headers (`domains[].hint` for 6-11, new `domains[].description` for all 12) |
| Version bump | PATCH (2.0.0 -> 2.0.1) |
| Requirement served | R3 tie-breakers (scope guidance for reviewers) |
| Status | applied on the PR; Severin approves by merging |
| Enum cost | +0 |

## Problem

Severin, 2026-09-24: "the Codebook section provides 'What belongs here' and domain
explanations for some domains, but not others. I want all domains to have this."

The explorer was rendering what the codebook holds; nothing was lost in parsing.
Domains 6-11 had no `hint`, so they had no "What belongs here" card. Only
Domains 1, 4, 5, 9 and 12 had a domain-level `(Note: ...)` line in
`definitionsText`, and Domains 4 and 9 use theirs for a routing rule, not an
overview.

## Change

- `DomainDefinition` gains an optional `description` field. It is UI-only, like
  `hint`: `buildSystemInstruction` sends only `rulesText` and `definitionsText`
  to the model, so **the prompt and coding behavior do not change** and no gold
  row can move.
- Domains 6-11 get a `hint`. Every domain gets a `description`.
- Every sentence restates the domain's existing subcategory definitions, notes
  and framework basis in `definitionsText`. No new scope, codes or citations are
  added. The cross-references (4.5.5, 3.1, 4.2.2, 12.2, 11.2, 11.5, Domain 1, 4)
  repeat routing that the subcategory notes already give.
- `definitionsText`, `rulesText`, `CONFUSIONS.md` and the registry are unchanged.

## New text

### Domain 1

**hint**: unchanged.

**description** (new):

> Outcomes where young people show what they have learned: skill gains in a subject (literacy, math, science and technology, the arts, and other subjects), English language development, and early learning, plus school status measures such as attendance, grades, credits and graduation.

### Domain 2

**hint**: unchanged.

**description** (new):

> Outcomes about how young people feel about learning: enjoyment, curiosity, seeing learning as meaningful, and expressing themselves by creating, performing or responding to creative work.

### Domain 3

**hint**: unchanged.

**description** (new):

> Outcomes about the relationships around a young person: feeling part of the school or program, supportive adults, friendships with peers, pride in their own identity and culture, and the family's connection with the program.

### Domain 4

**hint**: unchanged.

**description** (new):

> Outcomes where young people build social and emotional skills, organized by CASEL's five competencies: self-awareness, self-management, social awareness, relationship skills and responsible decision-making.

### Domain 5

**hint**: unchanged.

**description** (new):

> Outcomes about how young people approach learning: engagement in class, persistence with schoolwork, study and learning strategies, and confidence about academics.

### Domain 6

**hint** (new):

> Broad developmental assets and states (mattering, values, identity, time spent in activities outside this program), not specific SEL skills -- see Domain 4. Belonging to this school/program -> 3.1.

**description** (new):

> Outcomes about broad developmental assets: feeling empowered and safe, holding positive values, spending time in enriching activities outside the program, and a positive sense of identity and purpose.

### Domain 7

**hint** (new):

> Youth understanding or acting on their community and its systems: civic knowledge, organized service, voice and leadership, criticality, and digital citizenship. Small daily classroom/program contributions -> 4.5.5.

**description** (new):

> Outcomes where young people understand and take part in community and civic life: knowing how systems work, service and community action, voice and leadership in decisions, analyzing power and injustice, and safe, responsible behavior online.

### Domain 8

**hint** (new):

> The YOUTH's own physical, mental and behavioral health status, service use and risk behaviors. Learning a coping skill -> 4.2.2; a caregiver's own stress -> 12.2; staff adopting trauma-informed practice -> 11.2.

**description** (new):

> Outcomes about a young person's health: physical activity and nutrition, mental health symptoms, recovery from trauma, use of mental health services, and prevention of substance use, sexual risk, violence and injury, and justice involvement.

### Domain 9

**hint** (new):

> Readiness for and results after high school, EXPLICITLY framed around college or career. General learning gains not framed that way -> Domain 1; general SEL skills outside a work context -> Domain 4.

**description** (new):

> Outcomes about readiness for life after high school and what follows: college- and career-framed knowledge and thinking skills, navigating applications and financial aid, career exploration, employability and technical skills, and postsecondary enrollment, completion and employment.

### Domain 10

**hint** (new):

> Availability of resources (materials, technology, connectivity, facilities) and removal of barriers to entry for specific groups -- whether youth can get to and take part in the opportunity.

**description** (new):

> Outcomes about whether young people can reach and take part in learning opportunities: access to materials, technology, connectivity and facilities, and removing barriers that keep specific groups from participating.

### Domain 11

**hint** (new):

> Change in the ADULTS and ORGANIZATIONS around youth (staff/volunteer learning, practice change, systems, family-engagement systems), plus program outputs such as attendance and reach (11.5). Not a change in a young person.

**description** (new):

> Outcomes about the adults and organizations serving young people rather than the young people themselves: staff and volunteer learning, changes in practice, system and policy improvements, the organization's family-engagement systems, and program reach and participation counts.

### Domain 12

**hint**: unchanged.

**description** (new):

> Outcomes about caregivers and households: parenting knowledge and practices, caregiver well-being and support networks, the home learning environment, and economic, food and housing stability.

## Sources

None added or changed.

## Verification requests

None.

## Gold impact

None. Hints and descriptions are not part of the model prompt.

## Checks

`services/codebookExplorer.test.ts` now requires every domain to have a hint and a
description, and requires any code or domain it mentions to exist.
`codebook-refinement/sync.test.ts` already checks the code references in hints.

## Judge result

Not run: the change cannot affect model output, so there is nothing for the
regression gate to score.
