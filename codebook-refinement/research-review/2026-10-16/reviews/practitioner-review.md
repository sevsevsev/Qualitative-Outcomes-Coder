# Y1 pilot: practitioner and coder review (2026-10-16)

Reviewer role: practitioner and coder. Question: would each change help code real Philadelphia partner logic models (LM, 2,441 rows, 3.1.2) and program descriptions (NLM, 1,859 rows)? I counted rows with pandas and checked blind-coder output (`real-run-review/queue_coded.csv`, `review-desk/blind-nlm/`). Gold: design file `youth_outcomes_v3.gold.csv` and `youth_outcomes_v3.domain-only.gold.csv` only. I did not open the held-out file.

**Where a fix lives.** `CONFUSIONS.md` is the 2.x registry (1.x/5.x numbers). For 3.x, tie-breakers live in `rulesText` and `useInstead`. Under S3.1, a new CF entry needs at least two gold rows per side. None of the pairs below has them yet, so every CF recommendation also needs proposed gold rows for Severin.

## The six tests

| # | Issue | Fix type | Real rows moved | Gold check | Verdict |
|---|---|---|---|---|---|
| 1 | Y1.8 early-literacy template | useInstead hint (PATCH) | 35 (35 programs) | S100 supports; S025 limits the wording | ACCEPT WITH CHANGES |
| 2 | Y1.15 vs domain-only | rulesText example (PATCH) + FD entry | 4-5 | G-D06 contradicts one aside | ACCEPT WITH CHANGES; new code DEFER |
| 3 | Engagement split Y1.9 / Y3.1 / Y1.13 | hint; CF only with new gold | 0-2 on the proposed pair; 3-6 on the real pair | no gold either side | ACCEPT WITH CHANGES (retarget) |
| 4 | Executive function / focus | hint + Y4.3 definition edit | ~7 | S103 supports Y4, picks Y4.2 | ACCEPT WITH CHANGES |
| 5 | Middle-to-high-school transition | nothing now | 0-1 | none | DEFER |
| 6 | Readiness for coursework in Y1.16 | Y1.16 exclude hint (PATCH) | 3-4 | S014 limits the wording | ACCEPT WITH CHANGES |

### 1. Y1.8: "build early-literacy skills" (F2.2)
The data match the finding. There are 36 NLM Y1.8 rows. Thirty-five are this one OCF template, all medium confidence, and the beneficiary column says "Elementary participants". The 2,441 LM rows hold one true pre-K row, and NLM holds none. The atomic text drops the subject, so "early" becomes the only signal. Both blind coders chose Y1.1 under 3.1.2 (runner-up Y1.8), so this is a Gemini error, not a gap in the codebook.
- **Fix:** add a useInstead clause to Y1.8: "literacy for kindergarten and older, elementary or named grades, including 'early literacy' → Y1.1". Also fix the 35 rows now with a single review-desk correction. Fixing them moves 35 of 197 NLM program rollups.
- **Gold:** S100 ("Third graders will read on grade level" → Y1.1) supports the change. S025 ("Children will demonstrate age-appropriate pre-literacy skills" → Y1.8, alternate Y1.1) names no grade. A rule triggered by "early" or by skill words (phonemic awareness) would flip S025, so the trigger must be the stated grade or age.
- **Re-anchor (NASEM Indicator 1 vs RTT-ELC):** two researchers propose different anchors, and both were verified SUPPORTED. Choosing between them moves no real rows. Leave the choice to the citation pass; RTT-ELC is the closer definitional fit.

### 2. Y1.15 catch-all vs domain-only (F2.1)
- **Size of the catch-all:** 59 of 95 Y1.15 rows are generic achievement ("academic success" ×4, "Improved academic achievement" ×2), not grades or credits. That is the 3.1.2 rule working as written. CP-09-09 decision 2 (Severin, 2026-09-27) kept the catch-all: "only non-performance generics ('academic enrichment', 'academic growth') go to Y1 domain-only".
- **Where the inconsistency is:** the live prompt lists only "academic enrichment" as a domain-only example. Two "academic growth" rows went to Y1.15, which contradicts the owner's decision. "Improved academic skills" and "Students demonstrate better academic skills" (Y1.15) sit against "Youth will build foundational academic skills" and "building academic skills for college and career success" (Y1/none). Blind coders split on "Improved academic skills" (A: Y1, B: Y1.15) and on "prepare students for long-term academic success".
- **Fix:** a PATCH to the DOMAIN ONLY rule, adding "academic growth" and "academic skills or knowledge" with no result named as Y1 domain-only. "Achievement, performance, success" stay Y1.15. About 4-5 rows move.
- **(i) FD entry:** ACCEPT. The verifier marked NASEM Indicator 5 PARTIAL because it always names subjects, so it cannot support the no-subject catch-all. Cite Indicator 4 for grades and credits only, and log the catch-all as codebook-defined. The attainment researcher reached the same conclusion independently.
- **Researcher aside that "academic enrichment" should be uncoded or A2:** REJECT. It contradicts adjudicated G-D06 ("Documented improvement in academic enrichment" → Y1).
- **(iii) New "general achievement" code:** DEFER. It would move about 59 rows and add 1 to the enum (160→161). It also reverses an owner decision. S4.7 allows that only with new evidence, and the 59-row count may qualify, but Severin decides.

### 3. School engagement (F1.3)
The coder is already consistent on the pair the finding proposes:
- Generic school or academic engagement goes to Y1.9 (about 18 rows).
- "Connectedness to school" goes to Y3.1 (about 6 rows).
- Where connectedness is the means, the result is coded ("attendance/graduation rates through increased school connectedness" → Y1.13 / Y1.17, 5 rows). Rule 2 ("do not split off the means") already requires this.

A Y1.9/Y3.1 hint would move 0-2 rows ("Motivated to stay in school" Y1.13; "Students feel engaged with schoolwork").

The boundary that actually wobbles is **Y1.9 vs Y2**:
- "Increased student engagement" went to Y1.9 from Gemini but to Y2 domain-only from both blind coders.
- "Increased engagement" was left uncoded.
- "engagement in science" went to Y2.2 once and stayed uncoded once.
- "engagement and interest in reading" went to Y2.3.

**Change:** write the hint for that pair. Engagement in school, class or learning, or a bare "student engagement", goes to Y1.9; the GPRA "engagement in learning" measure is verified SUPPORTED, and three LM rows quote it word for word. Engagement in a subject, art form or program activity goes to Y2. Connectedness goes to Y3.1. This moves about 3-6 rows. Fredricks is PARTIAL (abstract only), so use it as rationale only.

### 4. Executive function and focus (F2.3)
I found about 15 rows:
- Y1.9: 4 ("Improved Focus", "Brain Break" classroom focus, "Stronger academic focus", "better able to focus and follow routines").
- Y4.2: 4 ("focus", "greater focus", "augment focus", focus plus stress).
- Y4.3: 5 (including "executive functioning" and "mental focus and self-discipline in the school setting").
- Y1.11: 1.
- Y8.2: 1 (left unsplit).

Blind coders also split between Y4.3 and Y1.9. Gold S103 ("improved self-regulation and ability to follow classroom routines" → Y4.2, alternate Y4.3) supports the researcher's direction and contradicts the Y1.9 code on the nearly identical "focus and follow routines" row.

The finding's hint says "Y4" and names no code, but choosing a code is the whole problem. **Smallest change I would accept:**
- Focus, attention and executive function in any setting go to Y4.3.
- Self-control, impulses and self-regulation go to Y4.2, following S103.
- Y1.9 keeps observable participation only.

This requires changing Y4.3's "outside schoolwork" so that it applies to persistence only. That is a definition change under FD-P03. CASEL Self-Management does not name attention, so state the deviation. The change moves about 7 rows and needs the Y4 owner. It also conflicts with Fredricks, who lists attention under behavioral engagement. If Fredricks lands on Y1.9 as a citation, the hint has to name the exception.

### 5. Middle-to-high-school transition (F2.4)
About 10 rows spread across four codes:
- Y1.15: 4, including "matriculate to priority high schools" ×2.
- A2.2: 3. These are Heights' "state that Heights helped them transition"; the AI coded one copy Y1.13, and Claude's review changed it to A2.2.
- Y3.1: 2 ("Eased transition ... through SEL-focused group mentoring"; both blind coders agreed).
- Y7.2: 1.

The proposed hint moves 0-1 rows. Its second half (process supports → Y7.2) widens Y7.2, which is defined as "college or work", so REJECT that half. Optional: one Y1.15 include clause, "promotion to, or admission into, high school". No gold row exists.

### 6. "Readiness for higher-level coursework" (F2.4)
- "Demonstrated readiness for high-level university coursework" appears three times and got three codes (Y1.16, Y7.2, Y1.12).
- "Improved student readiness for long-term mathematics success and higher-level coursework" went to Y1.16; both blind coders said Y1.3.

**Fix:** add to the Y1.16 exclude: readiness or preparation for advanced or college coursework, *with no course enrolled in or completed*, goes to the subject code if one is named, otherwise to Y1 domain-only. This moves 3-4 rows.
- **Target code:** not Y1.15 as the researcher proposes. Readiness is not a performance measure, so under CP-09-09 decision 2 it belongs in domain-only.
- **Gold:** S014 ("Seniors will complete college-level coursework to be ready for freshman year" → Y1.16) must stay, which is why the clause requires that no course is enrolled in or completed.

## Other findings (coding impact)
- **F1.1 keep A/B/C:** ACCEPT. NASEM as the domain anchor is verified PARTIAL (y1-taxonomy-04: NASEM never calls these one domain), so put it in research-basis as a structural parallel, not in `frameworkBasis` as an anchor. Moves 0 rows.
- **F1.2 and F1.4:** ACCEPT (no change).
- **Act 158:** the same requirement went to Y1.15 once and Y1.17 once. A Y1.17 hint is a fine PATCH; it moves 1 row.
- **SAT/ACT:** 1 row. Nothing needed.
- **Y1.12 belonging narrowing (mindsets 4.2):** fine, but no real row says "belong in class", so it moves 0 rows.

## Real-run leads where they touch Y1
- **Adult volunteering:** no Y1 effect. All 785 Y1-primary rows target students_youth, and no tutor or mentor outcome landed in Y1.
- **Digital and career skills:** about 4 Y1.4 rows ("Digital literacy", "Increased digital literacy", "grade-appropriate technology skills") move to Y7.3 under PR #62, which is out of scope. PR #62 also flips adjudicated H077 ("digital literacy skills, including email and video conferencing" → Y1.4) and must name that row (S4.4).
- **Multi-outcome splitting:** 82 Y1-primary rows carry a secondary code and contain "and" or a comma. At least 10 of the top 25 are clearly two results:
  - "reading comprehension and critical thinking" (Y1.1 + Y1.7)
  - "critical thinking and communication skills" (Y1.7 + Y4.6)
  - "academic and social confidence" (Y1.12 + Y5.4)
  - "disciplinary referrals and incidents" (Y1.14 + Y8.12)
  - "physical flexibility and classroom focus" (Y8.2, not split)

  Rule 2 already requires a split here. This is prompt compliance, not a Y1 definition issue: nothing to change in Y1, but it belongs in a split audit.

## What the researchers missed
1. The engagement pair that is actually unstable is Y1.9 vs Y2 (bare and subject engagement), not Y1.9 vs Y3.1.
2. **The same text gets different codes.** "Demonstrated readiness for high-level university coursework" got 3 codes, Heights' transition item got 2, and "Improved school climate and sense of community" went to both A2.1 and Y3.1. School climate is split about 12 rows across A2.1, A3.1, A3.3 and Y3.1. A same-text consistency check on the review desk would catch these cheaply.
3. **The root cause of the Y1.8 error is the atomizer.** It strips the subject ("Elementary participants") from the atomic text. Carrying the grade or beneficiary into the atomic text would prevent this class of error everywhere, not only in Y1.8.
4. **Gold is missing for every pair above.** No design gold row covers generic school engagement, school connectedness, focus or executive function, "academic skills" or "academic growth", the move to high school, or coursework readiness. S3.1 needs two rows per side before a CF entry, and only Severin can adjudicate them.
5. **Row counts overstate the problems.** One shared template (×35) and Musicopia's four program_keys inflate row counts. Program counts should drive the priority calls.
6. **Prompt and gold disagree on G-D10.** The prompt still lists "support overall youth development" as uncoded, while the adjudicated gold row says Y5. CP-09-09 flagged this and it is still unfixed. It is not a Y1 issue, but it sits next to the domain-only rule that fixes 2 and 6 change.
