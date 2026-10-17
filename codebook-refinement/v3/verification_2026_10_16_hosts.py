"""CP-12-28 (3.1.5): official-copy host rule (G8), with the round-2 V-HOST results.

Applied by build_registry.py through review_2026_10_16.apply_all(); the host check itself is in
build_registry.py, with its tables in hosts.py. Verdicts are copied in
source-verification-2026-10-16-hosts.json from full-review/verify-round2/ (claims CP-12-28-V-HOST-*)
and, for the match claims of earlier rounds, from full-review/batch*/verify/.
"""
from hosts import SECONDARY_HOST_MATCH

RECORD_FILE = 'source-verification-2026-10-16-hosts.json'
RECORD_ONLY = sorted(set(SECONDARY_HOST_MATCH.values()) | {'CP-12-28-V-HOST-2', 'CP-12-28-V-HOST-8'})

GOVINFO = 'https://www.govinfo.gov/link/uscode/'
# Statutes move from Cornell LII to the official U.S. Code on govinfo (V-HOST-1 to V-HOST-4, all SUPPORTED).
URLS = {
    'chafee-42usc677': GOVINFO + '42/677',
    'digital-equity-act': GOVINFO + '47/1721',
    'digital-equity-act-1723': GOVINFO + '47/1723',
    'idea-671-pti': GOVINFO + '20/1471',
    'mckinney-vento': GOVINFO + '42/11432',
}
# A URL move keeps the excerpt only if the verifier read it on the new copy; otherwise the new claim's
# excerpt replaces it (CP-12-28). digital-equity-act-1723 keeps its excerpt: V-HOST-2 read the same
# words on the govinfo 1723 page (verifier note).
SOURCE_EXCERPT = {
    'chafee-42usc677': 'CP-12-28-V-HOST-1',
    'digital-equity-act': 'CP-12-28-V-HOST-2',
    'idea-671-pti': 'CP-12-28-V-HOST-3',
    'mckinney-vento': 'CP-12-28-V-HOST-4',
}
SUPPORT_RECHECK = {
    ('chafee-42usc677', 'Y7.7'): ('CP-12-28-V-HOST-1', 'direct', None),
    ('digital-equity-act', 'F1.6'): ('CP-12-28-V-HOST-2', 'direct', None),
    ('idea-671-pti', 'F1.7'): ('CP-12-28-V-HOST-3', 'direct', None),
    ('mckinney-vento', 'Y1.13'): ('CP-12-28-V-HOST-4', 'direct', None),
}
SUPPORT_NOTE_APPEND = {
    ('mckinney-vento', 'F2.3'): (" Round 2 (CP-12-28 V-HOST-4): the 11434a definition was read on its own official page, "
                                 "https://www.govinfo.gov/link/uscode/42/11434a, where (2)(A) reads 'means individuals who lack a fixed, "
                                 "regular, and adequate nighttime residence'."),
    ('digital-equity-act-1723', 'A2.3'): (" Round 2 (CP-12-28 V-HOST-2): read on the official govinfo 1723 page; the quoted words are "
                                          "clause (v) of 1723(c)(1)(B)."),
}
# corrected_cite_as from the verifier replaces the citation text (APPLY-BRIEF).
CITE_AS = {
    'digital-equity-act-1723': 'Digital Equity Act of 2021, 47 U.S.C. 1723(c)(1)(B)(v) (State Digital Equity Plan measurable objectives) and 1721(11) (digital inclusion)',
    'idea-671-pti': 'Individuals with Disabilities Education Act, section 671(b)(7), 20 U.S.C. 1471(b)(7): Parent Training and Information Centers',
    'farrington-2012': 'Farrington, C. A., Roderick, M., Allensworth, E., Nagaoka, J., Keyes, T. S., Johnson, D. W., & Beechum, N. O. (2012, June). Teaching Adolescents to Become Learners: The Role of Noncognitive Factors in Shaping School Performance: A Critical Literature Review. Chicago: University of Chicago Consortium on Chicago School Research.',
    'eccles-expectancy-value': 'Wigfield, A., & Eccles, J. S. (2000). Expectancy-value theory of achievement motivation. Contemporary Educational Psychology, 25(1), 68-81.',
    'muhammad-five-pursuits': 'Muhammad, G. Unearthing Joy (five pursuits), extending Cultivating Genius (four pursuits)',
}
NOTES = {
    'chafee-42usc677': 'URL moved 2026-10-16 to the official U.S. Code on govinfo (CP-12-28, round-2 claim CP-12-28-V-HOST-1, SUPPORTED; section heading matches); it was Cornell LII.',
    'digital-equity-act': 'URL moved 2026-10-16 to the official U.S. Code on govinfo (CP-12-28, round-2 claim CP-12-28-V-HOST-2, SUPPORTED; corrected pinpoint 1721(12)); it was Cornell LII.',
    'digital-equity-act-1723': 'URL moved 2026-10-16 to the official U.S. Code on govinfo (CP-12-28, round-2 claim CP-12-28-V-HOST-2, SUPPORTED); pinpoint corrected to 1723(c)(1)(B)(v) by the verifier. It was Cornell LII.',
    'idea-671-pti': 'URL moved 2026-10-16 to the official U.S. Code on govinfo (CP-12-28, round-2 claim CP-12-28-V-HOST-3, SUPPORTED); the quoted activity is paragraph (7) of subsection (b), so the pinpoint is corrected to 1471(b)(7). It was Cornell LII.',
    'mckinney-vento': 'URL moved 2026-10-16 to the official U.S. Code on govinfo, 42 U.S.C. 11432 (CP-12-28, round-2 claim CP-12-28-V-HOST-4, SUPPORTED); it was Cornell LII.',
    'circle-2002-civic-indicators': "Round 2 (CP-12-28 V-HOST-5): CIRCLE's own copy is also online at http://archive.civicyouth.org/wp-content/uploads/2016/02/Civic_Political_Health_2002.pdf (same title page, per the verifier); the support excerpts were read on the ERIC copy.",
    'farrington-2012': 'Round 2 (CP-12-28 V-HOST-5): the publisher\'s page https://consortium.uchicago.edu/publications/teaching-adolescents-become-learners-role-noncognitive-factors-shaping-school also offers the PDF (it lists the authors in a different order; the printed order matches the citation). Citation month added from the verifier\'s corrected_cite_as.',
    'mapp-kuttner-2013': "Round 2 (CP-12-28 V-HOST-5): the PDF prints '2013 © Copyright by SEDL'; SEDL's catalog page links its own copy (https://sedl.org/pubs/framework/FE-Cap-Building.pdf) but gives the year as 2014. The printed 2013 stands.",
    'conley-2007-college-readiness': "Round 2 (CP-12-28 V-HOST-5, PARTIAL): the ERIC copy prints the title, David T. Conley, March 2007 and a 'To cite this report' line ending 'Eugene, OR: Educational Policy Improvement Center' (Gates is the funder). A publisher's own copy was not confirmed.",
    'hulleman-2010-utility-value': 'Round 2 (CP-12-28 V-HOST-5, PARTIAL): the URL is an ERIC catalog record, not a copy of the article; its title, authors, journal, volume, issue, pages and DOI 10.1037/a0019506 match the citation. The APA DOI landing page could not be opened by the verifier.',
    'cjca-2009': "Round 2 (CP-12-28 V-HOST-6, PARTIAL): the Kansas copy's title page reads 'A CJCA White Paper', 'November 2009' and 'Council of Juvenile Correctional Administrators (CJCA)', with the authors on the next page; the fetched text stopped at page 41 of 42, so completeness is not confirmed.",
    'eccles-expectancy-value': 'Round 2 (CP-12-28 V-HOST-7, PARTIAL): the copy prints Contemporary Educational Psychology, 25, 68-81 (2000) and doi:10.1006/ceps.1999.1015; the DOI landing page came back empty, and the course-wiki copy may not be authorized. Citation corrected from the verifier\'s corrected_cite_as.',
    'muhammad-five-pursuits': "Round 2 (CP-12-28 V-HOST-8, PARTIAL): hillpedagogies.com names Dr. Gholdy Muhammad and both books and defines all five pursuits, but never says she owns or founded the site, so it is not confirmed as the author's own description; the entry stays on HOST_PENDING. The five-pursuit version is in Unearthing Joy; Cultivating Genius has four (citation text from the verifier's corrected_cite_as; it was 'Muhammad, G. — Culturally and Historically Responsive Literacy / Five Pursuits Framework (Identity, Skills, Intellect, Criticality, Joy); Cultivating Genius (2020), Unearthing Joy (2023)').",
}
