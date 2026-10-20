# Hand-off: map changes from the Keystone subjects search

For the thread "Codebook outcomes and SPOTlight indicators", which owns
`codebook-refinement/spotlight/spotlight_relevance_links.csv` and pull request 72. Apply after pull request 72
merges (or on its branch, your call), then rebuild with `build_links.py` and the evidence registry as usual.

Exact wording for every change is in `review.md` (sections P-01, P-02, P-03, P-06, P-09). Checked claims are in
`verification/claims_*.csv` and `results_*.csv`; `verification/claim_index.csv` maps each claim to its candidate.

1. **L-03** (Y1.3 -> S10): replace pathway, conditions; add studies Bhatt et al. 2024 (claim KV-003) and Miller,
   Solís-Román and Grossman 2026, MDRC (claim KV-002); add magnitude note and caveats. Tier B stays.
   Re-confirm the intent-to-treat 0.19 standard deviations in Bhatt et al. before writing it.
2. **New row** Y1.13 -> S10, S12, tier C, not-recommended: Liu, Lee and Gershenson 2021 (claim KV-034). Re-confirm
   grades 7 to 11 coverage. Do not change L-83.
3. **New row** Y7.2 -> S10, S11, S12, no tier, not-recommended: Upward Bound national trial (KV-017), iMentor (KV-021),
   Upward Bound Math-Science (KV-015, KV-018), GEAR UP Iowa (KV-019). Cross-reference L-80, L-138.
4. **New row** Y1.1 -> S12, school model, not-recommended: Somers et al. 2010 (KV-005), Vaughn et al. 2015 (KV-006),
   Herrera et al. 2016 (KV-009), Baye et al. 2019 (KV-008), Boulay et al. 2015 (KV-039). Cross-reference L-154.
5. **L-135**: indicators S4 -> S4, S11; add the North Carolina Biology end-of-course result via the What Works
   Clearinghouse review of the Edmunds lottery study (KV-010; the 2017 article itself has no Biology result).
6. **L-90**: add Zhu et al. 2019, MDRC (KV-032), as a reanalysis of the same trial; tier unchanged.

The codebook and coding prompt are untouched; all changes key to existing 3.3.0 codes.
