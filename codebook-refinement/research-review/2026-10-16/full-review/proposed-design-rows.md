# Proposed design rows for Severin (decision G11)

## What these are

`proposed-design-rows.csv` holds 44 example statements, written so that Severin can rule on
them before any new coding hint or wider code definition ships. Decision G11 in `DECISIONS.md`
says each such boundary needs two adjudicated design rows on each side first. These rows are the
candidates for that.

Nothing here is gold. Every row has the status "proposed", and the `side` column is only the
code the row was picked to test, not an answer. Only Severin settles each row: he may agree,
pick another code, call it uncoded, or drop it. Once he has decided, his rulings can be added to
the design gold file. No agent adds them, and no agent marks a row as adjudicated.

## How to read the file

- `boundary`: the line being tested (for example resilience, or adult volunteers).
- `side`: the code or route the row is meant to land on if the proposed rule is right. A side
  marked "open" is a case the rule has not settled yet, so Severin's answer decides it.
- `origin`: "logic-model queue" is a statement from the review queue of the 2 October run;
  "no-logic-model" is a statement from the review queue of the 4 October run for programs without
  a logic model; "invented" is written by Claude in the partners' style because no real queue
  statement fit that side.
- `source_ref`: the file and the row key (`atomic_outcome_id`) of a real statement. It is blank
  for invented rows.
- `why`: one sentence on what the row tests.

## How the rows were chosen

- Real statements come only from review-queue rows: `queue_coded.csv` for the logic-model run, and
  rows marked `needs_check` in the no-logic-model export. Rows outside the queues were not used.
- Each statement was checked by text against the design gold file and the domain-only gold file,
  and none repeats a statement there.
- Three logic-model queue statements that would have fit (one school adopting wellness practices,
  one about volunteer opportunities for adults, one about fully staffed libraries) match
  statements in the fresh held-out set, so they were left out. This means the review queue and the
  held-out set share some statements. Severin should still check each row against the held-out
  set before adding it to gold.
- 20 of the 44 rows are invented, mostly for volunteers, staffing, pitching and family eating,
  where the queues had no clean example.
