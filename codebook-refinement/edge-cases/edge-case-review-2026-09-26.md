# Edge cases in codebook 3.0: determinations and recommendations

2026-09-26 · for Severin · codebook 3.0.0 (`youth_outcomes_v3`) · nothing here changes the
codebook, the prompt or any gold row

## The short version

Codebook 3.0 already settles most of the edge cases the 2.x work collected. All 36 gold
rows you tagged "no good fit" in 2.x now have a 3.0 home you confirmed, and 60 of the 73
probe statements in `edge_cases_v1.csv` now have a clear 3.0 answer (both blind coders
agree with it). What is left falls into ten patterns:

| # | Pattern | Rows | Determination | Recommendation |
|---|---|---|---|---|
| P1 | Attendance thresholds | S127, H080, H001, S047, N034\*, E066 | Your gold says dosage (A2.5); 3.0's text says F1.9 / Y2.6 | **CP-09-01**: text follows your gold |
| P2 | Inclusion of youth with disabilities; interpretation | S001, H058, S098, E046 | Your gold says A2.4; 3.0's text says Y2.6 | **CP-09-02**: text follows your gold |
| P3 | Arts appreciation and audiences | N005\*, N027\*, S197, E018, E024, E026; 15 live rows | Y2.5 (Responding); Y3.1 when about feeling welcome | **CP-09-04**: one rule line |
| P4 | College campus visits | S188 | Your gold Y7.2; 3.0 text lists them in Y7.1 | **CP-09-03**, if the source checks out |
| P5 | Generic SEL ("social-emotional skills") | E001–E003, N040\*, N064\*, N078\*; ~8 live rows | Uncoded | **CP-09-07**: an explicit rule. Your call vs. a new general code |
| P6 | The organization's own operations | E010–E013 | Uncoded (your 2026-09-23 decision) | **CP-09-05**: say so in the prompt |
| P7 | Activity descriptions | N090\*, E053, E040 | Code the targeted learning if content is named, else A2.5 | **CP-09-05** |
| P8 | Missing context (leadership, "voice", "healthy relationships") | N099\*, N035\*, N088\*, N094\* | Defaults: Y4.7, Y5.4, Y3.3, Y2.4 | **CP-09-08**; spends held-out rows |
| P9 | Digital skills | H077, S206, H076 | Your note: work skills, not academic | **CP-09-06**, if the source checks out |
| P10 | Leave alone | adult volunteering, community-level rows, staff pay, cultural preservation, 3 held-out "none" rows | see below | no change |

\* = a row from the fresh 100-row held-out set. A fix made from it turns that row into design
data (see "Held-out" below).

**No proposal adds a code.** Every CP costs +0 to the enum footprint (stays at 160), unless
you choose option B in P5 (+1, 161).

## Decisions only you can make

1. **Which CPs go to testing.** I recommend all eight, tested together in one preview run,
   then a fresh held-out sample (see "Held-out").
2. **Generic SEL (P5):** leave it uncoded (recommended, matches your N040 and N064 calls) or
   add a general code Y4.13 so it rolls up to the SEL domain.
3. **Gold rows where 3.0's own text disagrees with your adjudication** (only you can change
   them; I have not):
   - **S255** "build confidence in outdoor physical skills": you chose Y8.2 and noted it
     was not a perfect fit. Y5.4's text sends confidence to Y5.4 unless the skill gain is the
     point, and you coded the similar H033 ("confidence spending time outdoors") Y5.4. I'd
     move S255 to Y5.4 with Y8.2 as an alternate.
   - **N091** "Schools adopt sustainable composting and greening programs": you chose
     Y6.6; rule 1 (who changes) makes a school's adoption Part A, which is A3.1, and that is
     what the app chose in both runs. I'd move it to A3.1 with Y6.6 as an alternate, or keep
     it and accept the rule-1 exception.
   - **H077** digital literacy: if you approve CP-09-06, move it from Y1.4 to Y7.3 and drop
     the gap tag.
4. **The 2026-09-23 decision** that the organization's own finances and branding are out of
   scope: confirm it still holds for 3.0 (CP-09-05 writes it into the prompt).

## What I treated

| Source | Rows | What I did |
|---|---|---|
| `/mnt/project-files/eval/edge_cases_v1.csv` (73 probes, 2.0.0 numbers) | 73 | Translated the expected codes to 3.0 by script (`translate_edge_cases.py`: 2.0.0 labels checked against the 2.5.1 labels, then the 2.5.1→3.0.0 crosswalk; no label drift). Two blind coders (A: Opus, B: Sonnet) coded all 73 with the 3.0 prompt text and nothing else. Per-row results: `edge-case-determinations-3.0.csv`. |
| `edge_cases_v1_run_2026-09-23*.csv` | 73 × 2 | Read only for history: they are 1.1.x runs and say nothing about 3.0. |
| `eval/disagreements_v1.csv`, `eval/codebook_gaps_v0.md` | 4 + 15 gap groups | Used as the pattern list and for frequency. The gap groups map onto P3, P5, P6, P7, P9 and P10. |
| `gold/gold-cycle02.csv` rows tagged "no good fit" | 36 | Checked each against its 3.0 gold: all 36 now have a 3.0 home you confirmed (`codebook_gap=0`). Two still carry your doubt (S255 above; S247 gardening → Y6.6, fine as is). |
| `gold/youth_outcomes_v3.gold.csv` and `.heldout.gold.csv`: rows with your notes or a gap tag | 23 | Each one is placed in a pattern below. |
| 3.0 misses: design (PR #37) and fresh held-out (PR #38) | 5 + 15 | Each one is placed in a pattern below. |
| Three leads from the research-basis thread | 3 | P9 (digital), P10 (adult volunteering), and "Splitting" below. |
| Live export of 2026-09-23 (1,367 unique texts) | — | Keyword counts only, to size each pattern. |

The 73 probes were written against 2.x, so their "what to look for" notes still use v1.1
numbers. The translated expectations are for comparison; the determinations are made
fresh against 3.0.

## P1. Attendance thresholds are dosage (CP-09-01)

**The conflict.** 3.0 sends a per-person attendance threshold to the person: rule 2 says
"each youth will return" is Y2.6 "or F1.9 for families", Y2.6 includes "per-person
participation thresholds", and F1.9 includes "attending workshops (per-family thresholds)".
Your adjudications say otherwise, every time:

| Row | Statement | Your gold | 3.0 text says |
|---|---|---|---|
| S127 | Parents will attend at least 4 family workshops during the program year. | A2.5 | F1.9 (the app chose F1.9 in both runs) |
| H080 | Participants attended weekly youth group and volunteered at least once… | A2.5 | Y2.6 (+ Y6.5) |
| H001 | 85% of enrolled youth attended at least 30 program sessions… | A2.5 | A2.5 |
| S047 | Match pairs will meet consistently for at least 12 months. | A2.5 | A2.5 |
| N034\* | Young people will be engaged year-round | A2.5 | Y2.6 (the app chose Y2.6 in both runs) |

And where a young person *chooses* something, you kept Y2.6: S003 (return for a second
year), N076 (return visits), N100 (other STEM programs), N048 (theatre activities).

**Determination.** Your line is consistent and easy to state: attending *this* program at
some dose is an output (A2.5), whether it is counted for the program or set as a
per-person threshold. Choosing to return, join, or take part in activities beyond the
program is Y2.6. For families, volunteering and decision-making are F1.9; attending
workshops is dosage.

**Recommendation.** CP-09-01 rewrites rule 2 and the Y2.6, F1.9 and A2.5 include lines to
say that. It moves F1.9 closer to its anchor (Epstein Type 3 Volunteering and Type 5
Decision Making). It fixes S127 and N034 and flips no adjudicated row. E066 ("Parents will
attend family workshops and read to their children") becomes A2.5 + F1.2; both blind coders
chose F1.9 because that is what the text says today.

## P2. Inclusion of youth with disabilities (CP-09-02)

**The conflict.** A2.4 explicitly excludes "youth participating alongside peers (their
participation)" and sends it to Y2.6, and Y2.6 includes "participating fully alongside
peers". You coded both such rows A2.4:

- S001 "Youth with disabilities will participate fully in program activities alongside their
  peers." Gold A2.4; the app chose Y2.6 (high) in both runs.
- H058 "Youth with disabilities participated in inclusive recreational activities alongside
  peers without disabilities." Gold A2.4.

**Determination.** Two consistent adjudications beat the text. Rule 1 (who changes) could
argue for Y2.6, since the youth are the subject, but in these statements the point is that
the program included a group that is usually excluded. That is what A2.4 is for.

**Recommendation.** CP-09-02 moves "youth with disabilities (or another group facing
barriers) taking part alongside peers, when inclusion is the point" into A2.4 and out of
Y2.6. It also adds a line for S098 ("Parents will access interpretation and translation
services to communicate with teachers": gold A2.4, app chose F1.7): families *using*
interpretation or translation is A2.4; families learning to navigate a system is F1.7.
A2.4 is codebook-defined, so this changes FD-P19 and needs an entry in `DEVIATIONS.md`.
If you would rather keep the text, the alternative is to move S001 and H058 to Y2.6
yourself; I don't recommend it.

## P3. Arts appreciation and audiences (CP-09-04)

"Appreciation" is one of the most common arts outcomes in the live data (15 unique
texts: "Increased appreciation for the arts", "Build an appreciation for art", "Deepen
students' appreciation of art and encourage habitual theatergoing…"). 3.0 has a home for it,
Y2.5's "responding to art", but no line says so, and the coders and the app scatter it:

| Row | Statement | Gold / determination | What happened |
|---|---|---|---|
| N005\* | Students' and partners' increased appreciation of music | Y2.5 (your gold) | App: Y2.3 both runs |
| N027\* | …will become audiences for the arts, recognizing that they are welcome in those spaces | Y3.1 (your gold) | App: Y2.6 both runs |
| S197 | Students will critique a peer's artwork using the language of the discipline. | Y2.5 (your gold) | App: Y1.6 both runs ("vocabulary") |
| E024 | …increase their appreciation of classical music. | Y2.5 | Coder A Y2.5, coder B Y2.1 |
| E026 | …feel comfortable visiting museums and cultural institutions. | Y3.1 | Coder A Y3.1, coder B Y2.1 |
| E018 | Increased audience attendance at community concerts. | A2.5 | Both coders A2.5 |

**Determination.** Appreciating or critiquing art is the National Core Arts Standards'
Responding process, which Y2.5 already cites (verified). A lasting habit of pursuing an art
form is Y2.3. Appreciating other cultures is Y4.5. Feeling welcome or comfortable in arts
and cultural spaces is Y3.1. Audiences who are not participants are reach (A2.5).

**Recommendation.** CP-09-04 adds those five lines to rule 9 and "appreciation" to Y2.5's
include line. Critiquing counts as Responding (Y2.5) even when it uses the discipline's
vocabulary, unless a skill gain is stated. It fixes S197 (design) and N005 and N027
(held-out).

## P4. College campus visits (CP-09-03)

S188 "Students will visit at least three college campuses before senior year": your gold is
Y7.2 (transition knowledge); Y7.1's definition lists "workplace and campus visits" and its
include line lists "college visits", so the app chose Y7.1 in both runs.

**Determination.** Your reading is the better one: visiting colleges is a college-going
step, like applications and FAFSA, while workplace visits and job shadowing explore careers.

**Recommendation.** CP-09-03 moves college visits from Y7.1 to Y7.2. It depends on a
source check: Y7.2 cites Conley's Key Transition Knowledge & Skills only as "located", and
the move needs the component (knowledge of postsecondary options and the college-going
process) verified. That check has not run yet (marked [VERIFY] in the CP).

## P5. Generic SEL (CP-09-07)

"Students will strengthen their social-emotional skills" has no home in 3.0: Y4 has twelve
specific CASEL codes and no general one. The coders split (A: Y4.2 low on E001 and E003;
B: uncoded). Your own held-out calls lean to uncoded: N040 "Soft Skills — Positive
behaviors" and N064 "Students acquire skills and strategies" are uncoded as "not specific
enough", while N078 "Behavioral Competency Improvement" got Y4.2 and N093 got Y5.4. In the
live data, about 8 of 1,367 unique texts name SEL only generically; most SEL rows list
skills and split.

**Two options:**

- **A. Uncoded, by rule (recommended).** Add to the uncoded list: "social-emotional,
  soft or life skills named only as a whole, with no specific skill ('strengthen their SEL
  skills', 'growth in all five CASEL competencies')". A list of named skills still splits.
  This is the smallest fit (S2.2), costs nothing, and matches your N040 and N064 calls.
  It loses the SEL roll-up for those few rows. "Life skills" alone stays Y7.7 (your N055).
- **B. A general code, Y4.13 Social-Emotional Skills (General).** Parallel to how Y1.15
  catches "academic performance" with no subject. The anchor is CASEL itself, so it needs no
  deviation entry, but it adds a code (+1 enum, 161) and a code that coders may reach for
  instead of the specific one.

CP-09-07 is written for option A, with option B's text alongside.

## P6. The organization's own operations (CP-09-05)

E010 "Fund 20% of operations through government and foundation grants", E011 "Short-Term
Fiscal Stability", E012 "Improved organizational visibility and brand recognition",
E013 "Evaluation results show clear evidence…". On 2026-09-23 you decided these are out of
scope (uncoded), but the 3.0 prompt never says so. Both blind coders forced E010 into A3.1
(low) and E012 into A2.5 or A2.1 (low), and the app did the same to N028 (A3.1, low; your
gold: uncoded).

**Determination.** Uncoded, for the organization's own finances, fundraising, visibility
and evaluation. Not for staffing or growth: you coded N079 (fully staffed libraries) A1.3 and
N007 (more sites) A2.5, and those stay. E014 (data sharing with partners) is A3.2 in 3.0.

**Recommendation.** CP-09-05 adds that clause to the uncoded list, if you confirm the
2026-09-23 decision still holds.

## P7. Activity descriptions (CP-09-05)

N090 "Weekly synthetic phonics instruction": you coded it Y1.1; the app left it uncoded in
both runs. E053 "Weekly 90-minute sessions led by teaching artists": coders split A2.5 /
uncoded. E040 "Students will be exposed to four art disciplines": both coders A2.5. The live
data has 17 "exposure" texts.

**Determination.** An activity that names what is taught ("phonics instruction",
"exposure to careers in environmental science") is coded to the learning it targets, at low
confidence. An activity that names only a format, schedule or dose ("weekly 90-minute
sessions", "exposed to four art disciplines") is A2.5. Exposure to careers stays Y7.1
(E041).

**Recommendation.** CP-09-05 adds this as one rule line next to the uncoded rules.

## P8. Missing context (CP-09-08)

Four held-out misses come from statements too short to trigger the existing tie-breakers:

| Row | Statement | Your gold | App | Default to add |
|---|---|---|---|---|
| N099 | Students initiate more leadership action. | Y4.7 | Y6.4 | Leadership with no setting named → Y4.7 (rule 13) |
| N035 | Student's increased confidence in their voice | Y5.4 | Y5.6 | Confidence in one's voice → Y5.4; acting on it → Y5.6 or Y6.4 |
| N088 | Girls develop healthy relationships. | Y3.3 | Y4.8 | "Healthy relationships" with no skill named → Y3.3; Y8.4 in a dating or sexual-health context (rule 16) |
| N094 | Students/families better understand the employment security of a college degree | Y2.4 | Y7.2 | Seeing why education pays off → Y2.4; knowing the steps → Y7.2 |

**Recommendation.** CP-09-08 adds these four defaults. They come only from held-out rows,
so they are the clearest case of spending the held-out set. Take them only in the same batch
as the other held-out-derived fixes.

## P9. Digital skills (CP-09-06)

Your note on H077 ("Participants improved their digital literacy skills, including email and
video conferencing") asks whether these are career or workforce skills rather than academic
ones. 3.0 puts "digital-literacy skills" in Y1.4 next to coding, and gives adults F1.6.

**Determination.** Agreed for young people: email, video calls, online forms and office
software are workplace and daily-life skills. Y1.4's anchors (NGSS, CSTA) are about science
and computer science, not everyday digital literacy, so taking it out of Y1.4 also brings Y1.4
closer to its framework. The OCTAE Employability Skills Framework (already Y7.3's verified
source) has a Technology Use component, which would make the move framework-faithful.

**Recommendation.** CP-09-06: general digital skills → Y7.3 for young people, F1.6 for adults
(unchanged); coding and computational thinking stay Y1.4; online safety stays Y6.7. It
depends on verifying the Technology Use component, which the registry's current excerpt
does not cover (marked [VERIFY] in the CP). The live data has only
two such texts, so this is about getting the definition right, not volume. H077 is design
data for 3.0 (seen during design), so this spends nothing.

## P10. Leave alone

- **Adult community volunteering (the research-thread lead).** The live data has one real
  example ("Provide meaningful community-based volunteer opportunities for adults", N073), and
  it is an output, which you coded A2.5. Parents volunteering in the program are F1.9;
  volunteer retention is A1.3; young people's service is Y6.5. Adults volunteering in the wider
  community have no home, but there is no second row to justify a code (S2.2). Revisit if five
  such rows turn up.
- **Community-level health and conditions** (E015 neighbors' health, E017 "healthier,
  greener, safer neighborhoods"): A3.3 at low confidence. E016 (communities accepting cultural
  differences) fits A3.3 at medium. Rare in the data; no change.
- **Staff pay** (E021 teaching artists' income): A1.3 at low confidence; rare.
- **Cultural preservation** (E027): a mission statement, not a participant result; Y5.2 at
  low confidence if coded.
- **Held-out rows you left uncoded that the app coded:** N028, N032, N033. N028 is covered by
  P6. N032 ("Number of professional Black and Latinx designers increases") is a field-level
  change the program does not measure, as you noted; a coder can't tell that from the text, so
  no rule would catch it reliably. N033 ("Understand what the museum can offer them…") is close
  to Y2.4, which the app chose. Accept these as known misses.
- **H057** (welcoming environment for LGBTQ+ youth; you were torn between A2.1 and Y3.1): the
  program is the subject, so A2.1 (your gold) is right by rule 1. It would be Y3.1 if youth
  reported feeling welcome. No change.
- **H005** (tutors completed 40 hours of training; you asked whether A2.5 covers it): yes.
  A2.5 names "training hours"; A1.1 is for what the tutors learned.
- **N036** ("Trauma-informed practices are institutionalized, resulting in a safe…
  environment"): gold A1.2, app A2.1. Rule 2 already says to split a chain of results; the app
  didn't. No text change; this is the splitting issue below.
- **Body image** (E043) → Y5.4; **sleep** (E044) → Y8.1; **IEP self-advocacy** (E045) → Y5.6.
  All closed by 3.0.

## Splitting multi-outcome statements (the research-thread lead)

3.0 already splits well: in the live runs it split 10 of 255 design statements and 21 of the
100 held-out statements, including N095 into seven parts. Three things are left:

1. **"Knowledge and skill" pairs are not split.** S187 ("knowledge of nutrition and healthy
   cooking skills") and S206 stay whole; you said both should split.
2. **Causal chains are not always split** (N036). Rule 2 covers them; the app is inconsistent.
3. **The gold can hold only one code per statement.** When the app splits correctly, the
   scorer credits it only if one part matches the single gold code, and nothing checks the
   other parts. This is the real gap: we can't measure splitting.

**Recommendation.** No codebook change. Give split-worthy gold rows a list of codes (one per
part, which you adjudicate) and have the scorer check each part. That is a scorer and gold
format change, not a CP; I can build it as a separate task. Your notes on H012, N095, S009,
S187 and S206 are the first rows for it.

## Held-out

Fixes drawn from the fresh held-out misses spend those rows: CP-09-04 (N005, N027), CP-09-05
(N090), CP-09-08 (N035, N088, N094, N099), and CP-09-01 is corroborated by N034. Per
CP-08-01, the set is spent as soon as any of these is made. I recommend batching every
held-out-derived fix into one version (3.1.0), testing it on the design set, then drawing a
fresh 100-statement held-out sample from the roughly 1,000 unused texts in the 2026-09-23
export (same method as PR #38). That gives one clean generalization number for 3.1.

## Something 3.0 is missing

STANDARDS S3.1 asks for a CONFUSIONS.md entry, with two gold examples, for every
confusable pair. `CONFUSIONS.md` covers only 2.x; 3.0's tie-breakers (rules 4–16) live only in
the prompt. Not urgent, but the regression judge can't check 3.0 tie-breakers until they are
written up. Worth a separate task.

## Files

- `edge-case-determinations-3.0.csv`: all 73 probes, with the old expectation in 3.0 codes,
  both blind coders' codes, my determination, and the pattern.
- `translate_edge_cases.py`, `edge_cases_v1_to_3_0.csv`: the scripted 2.0.0 → 3.0 translation.
- `determinations.py`: builds the CSV above.
- `blind/`: the statements file and both coders' outputs (agreement 62 of 73; agreement is not
  accuracy).
- `../proposals/CP-09-01` to `CP-09-08`: the change proposals, all status draft.
