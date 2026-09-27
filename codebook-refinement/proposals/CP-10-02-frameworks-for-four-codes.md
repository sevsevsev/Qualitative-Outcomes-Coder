# CP-10-02: Verified frameworks for four codes that had none

| Field | Value |
|---|---|
| Type | CITATION_FIX |
| Codes touched | Y4.12, Y6.4, Y6.5, A3.1 (source lines, basis notes, fidelity); Y6 and A3 framework basis lines |
| Version bump | PATCH (3.1.1 → 3.1.2) |
| Requirement served | R1 frameworks, R4 drift |
| Status | approved by Severin 2026-09-27 in the source-verification thread ("I agree" to drafting it); applied on the CP-10-01 PR |
| Enum cost | +0 (160 → 160) |
| Framework deviation | changed FD-P09, FD-P13, FD-P14, FD-P20: all four closed. Y6 and A3 gain an anchor framework each. No definition changes. |

## Problem

CP-10-01's re-verification found verified sources for four codes that DEVIATIONS.md listed as
codebook-defined or adapted. Each entry's own revisit condition names the event that has now
happened:

- FD-P09 (Y4.12): "close when the CASEL component enters the registry as verified".
- FD-P13 and FD-P14 (Y6.4, Y6.5): "if a verified youth civic engagement framework is found".
  The 2.4.0 "CIRCLE Framework" citation was dropped because no document by that name exists.
  The document behind it is Keeter et al. (2002), CIRCLE's core civic engagement indicators,
  and that report is now verified.
- FD-P20 (A3.1): "when a policy-change framework is verified".

## Change

Only citation text and fidelity change. Definitions, includes, excludes and examples are
unchanged.

| Code | Fidelity before → after | Source line after |
|---|---|---|
| Y4.12 | codebook-defined → framework | CASEL (2020) SEL Framework, Relationship Skills: "Resisting negative social pressure"; National Health Education Standards (2024), Standard 4: refusal skills. |
| Y6.4 | adapted → framework | Keeter, Zukin, Andolina & Jenkins (2002), CIRCLE: political voice and electoral indicators. |
| Y6.5 | adapted → framework | Same report: civic indicators (community problem solving, regular volunteering). |
| A3.1 | codebook-defined → framework | Coffman (2009) policy goals; Reisman, Gienapp & Stachowiak (2007) improved policies. |

The framework basis lines change as follows:

- **Y6** adds "CIRCLE (2002) civic engagement indicators (civic voice and community action)".
- **A3** adds "Coffman (2009) and Reisman, Gienapp & Stachowiak (2007), policy change outcomes".

DEVIATIONS.md closes FD-P09, FD-P13, FD-P14 and FD-P20 and updates the drift count. After this
change Y4, Y6 and A3 count 0 deviations. The registry's `codebook_extensions` shrinks to A2.2
and A2.4.

## Sources

| Registry ID | Status | Component relied on | Fit |
|---|---|---|---|
| casel-2020 | verified | Relationship Skills: "Resisting negative social pressure" | partial: not avoiding unsafe situations |
| shape-nhes-2024 | verified | Standard 4: "Demonstrate refusal skills to avoid or reduce health risks" | direct |
| circle-2002-civic-indicators | verified | political voice and electoral indicators (Y6.4); community problem solving and regular volunteering (Y6.5) | direct |
| coffman-2009-advocacy-evaluation | verified (full copy hosted by County Health Rankings) | policy goals | direct |
| reisman-2007-advocacy-policy | verified (full copy on IssueLab; AECF landing page confirms) | improved policies | direct |

The verdicts and excerpts are in `v3/source-verification-2026-09-27.json`, under claim ids
`y412-casel-resisting`, `new-nhes-std4`, `new-circle-2002-voice`, `new-circle-2002-civic`,
`new-coffman-2009` and `new-reisman-2007`.

## Gold impact

None. The prompt changes only in these four source lines and two framework basis lines.

## Judge result

Not run: a citation-only PATCH.
