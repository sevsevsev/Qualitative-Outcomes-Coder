"""Applies the 2026-09-27 source re-verification (CP-10-01) to the 3.x registry.

build_registry.py calls apply() after it assembles the registry, so rerunning
the build keeps these results. Every verdict comes from
source-verification-2026-09-27.json, which records what independent
codebook-citation-verifier agents found when they fetched each source (blind to
the proposer, STANDARDS S4.2). Nothing here is cited from memory.

Two things are recorded separately:
- the source's status: "verified" once a verifier read the document itself and
  recorded a verbatim excerpt; "located" if only an abstract or a summary was
  reachable.
- each support's fit: "direct" when the verifier said SUPPORTED, "partial" when
  the source is real and read but only part of the code's construct is in it.
"""
import json
from pathlib import Path

HERE = Path(__file__).resolve().parent
RECORD = json.loads((HERE / 'source-verification-2026-09-27.json').read_text())
DATE = '2026-09-27'
BY = 'CP-10-01 re-verification (independent codebook-citation-verifier, blind to proposer; WebFetch)'

# Full-text copies of the document itself on a host other than the publisher
# (a statute on Cornell LII, an article in the author's institutional repository
# or on a course site). The verifier marked these "secondary" because of the
# host; the excerpt is still verbatim from the document, so they count as read.
FULL_TEXT_ELSEWHERE = {
    'perkins-v', 'essa-4109-tech-capacity', 'hidi-renninger-2006', 'sampson-1997',
    'samhsa-tic-2014', 'eccles-expectancy-value',
}

# Where the verifier read the source, when that differs from the registry URL
# and is the better link to show. Chosen by hand from the verifier's url_checked.
URLS = {
    'cdc-ed-bullying-2014': 'https://stacks.cdc.gov/view/cdc/21596',
    'conley-four-keys': 'https://www.aasa.org/resources/resource/four-keys-college-career-readiness',
    'csta-k12-2017': 'https://csteachers.org/wp-content/uploads/2025/03/csta-k-12-computer-science-standards-revised.pdf',
    'digital-equity-act': 'https://www.law.cornell.edu/uscode/text/47/1721',
    'eccles-expectancy-value': 'https://acmd615.pbworks.com/f/ExpectancyValueTheory.pdf',
    # The old organizingengagement.org page now serves unrelated casino content.
    'epstein-six-types': 'https://nnps.jhucsos.com/wp-content/uploads/2019/10/PPP-2019-Final-Book-web.pdf',
    'head-start-elof': 'https://headstart.gov/interactive-head-start-early-learning-outcomes-framework-ages-birth-five',
    'hidi-renninger-2006': 'https://works.swarthmore.edu/fac-education/12/',
    'irvin-2004-odr': 'https://journals.sagepub.com/doi/10.1177/10983007040060030201',
    'iste-students-2016': 'https://cdn.iste.org/www-root/Libraries/Images/Standards/Download/ISTE%20Standards%20for%20Students%20(Permitted%20Educational%20Use).pdf',
    'samhsa-tic-2014': 'https://www.nctsn.org/sites/default/files/resources/resource-guide/samhsa_trauma.pdf',
    'usda-hfssm': 'https://www.ers.usda.gov/topics/food-nutrition-assistance/food-security-in-the-us/survey-tools',
    'weiss-little-bouffard-2005': 'https://eric.ed.gov/?id=EJ790687',
}

# Citation text the verifier corrected (wrong author, missing subtitle, a title
# that names a different document than the one read).
CITE_AS = {
    'conley-four-keys': 'Conley, D. T. (2016). Four Keys to College and Career Readiness. AASA, The School Superintendents Association. (Key Cognitive Strategies, Key Content Knowledge, Key Learning Skills & Techniques, Key Transition Knowledge & Skills)',
    'epstein-six-types': 'Epstein, J. L. et al. Framework of Six Types of Involvement (1 Parenting, 2 Communicating, 3 Volunteering, 4 Learning at Home, 5 Decision Making, 6 Collaborating with the Community), as presented in National Network of Partnership Schools (2019), Promising Partnership Practices, Johns Hopkins University.',
    'farrington-2012': 'Farrington, C. A., Roderick, M., Allensworth, E., Nagaoka, J., Keyes, T. S., Johnson, D. W., & Beechum, N. O. (2012). Teaching Adolescents to Become Learners: The Role of Noncognitive Factors in Shaping School Performance: A Critical Literature Review. UChicago Consortium on Chicago School Research.',
    'nses-2020': 'Future of Sex Education Initiative (2020). National Sex Education Standards: Core Content and Skills, K-12 (2nd ed.).',
    'weiss-little-bouffard-2005': 'Weiss, H. B., Little, P. M. D., & Bouffard, S. M. (2005). More than just being there: Balancing the participation equation. New Directions for Youth Development, 105, 15-31.',
}

# Components reworded to match what the source actually says.
COMPONENTS = {
    ('acf-nytd', 'F2.3'): 'experience with homelessness',
    ('cdc-yrbss', 'Y8.12'): 'injury and violence; bullying',
    ('cjca-2009', 'Y8.13'): 'defining and measuring recidivism',
    ('mckinney-vento', 'F2.3'): 'definition of homeless children and youths, 42 U.S.C. 11434a',
    # 'Showing leadership in groups' verified separately (claim y47-casel-leadership).
    ('casel-2020', 'Y4.7'): "Relationship Skills: 'Practicing teamwork and collaborative problem-solving'; 'Showing leadership in groups'",
}

# Supports dropped from the codebook (the source stays in the registry only if
# it still backs another code).
REMOVE = {
    # A community planning process, not an outcome framework (CP-01-13 item 5;
    # confirmed again by this verifier). YRBS and Healthy People 2030 SU-05 carry Y8.11.
    ('samhsa-spf', 'Y8.11'),
}

# New sources, each checked by a verifier that did not propose it. `claim` names
# the record entry that holds the verdict and excerpt.
NEW = [
    {
        'id': 'essa-6311-c4-elp', 'claim': 'new-essa-elp',
        'cite_as': 'Every Student Succeeds Act (2015), 20 U.S.C. 6311(c)(4)(B)(iv): progress in achieving English language proficiency.',
        'tier': 'A', 'publisher': 'U.S. Congress', 'year': 2015,
        'supports': [('Y1.2', 'progress in achieving English language proficiency')],
    },
    {
        'id': 'wioa-20cfr681460', 'claim': 'new-wioa-681460',
        'cite_as': 'WIOA youth program elements, 20 CFR 681.460(a)(1)-(2): dropout prevention and recovery leading to a secondary school diploma or its recognized equivalent.',
        'tier': 'A', 'publisher': 'U.S. Department of Labor', 'year': None,
        'supports': [('Y1.17', 'dropout recovery toward a diploma or recognized equivalent')],
    },
    {
        'id': 'hulleman-2010-utility-value', 'claim': 'new-hulleman-2010',
        'cite_as': 'Hulleman, C. S., Godes, O., Hendricks, B. L., & Harackiewicz, J. M. (2010). Enhancing interest and performance with a utility value intervention. Journal of Educational Psychology, 102(4), 880-895.',
        'tier': 'C', 'publisher': 'American Psychological Association', 'year': 2010,
        'supports': [('Y2.4', 'perceived utility value of what is learned')],
    },
    {
        'id': 'conley-2007-college-readiness', 'claim': 'new-conley-2007',
        'cite_as': 'Conley, D. T. (2007). Redefining College Readiness. Educational Policy Improvement Center.',
        'tier': 'C', 'publisher': 'Educational Policy Improvement Center', 'year': 2007,
        'supports': [('Y7.2', 'contextual skills and awareness: admission and navigating the postsecondary system')],
    },
    {
        'id': 'hp2030-su05', 'claim': 'new-hp2030-su05',
        'cite_as': 'Healthy People 2030, objective SU-05: Reduce the proportion of adolescents who used drugs in the past month. U.S. DHHS, ODPHP.',
        'tier': 'A', 'publisher': 'U.S. DHHS, Office of Disease Prevention and Health Promotion', 'year': None,
        'supports': [('Y8.11', 'adolescent past-month illicit drug use')],
    },
    {
        'id': 'guskey-2002-pd-evaluation', 'claim': ['new-guskey-2002-l2', 'new-guskey-2002-l4'],
        'cite_as': 'Guskey, T. R. (2002). Does it make a difference? Evaluating professional development. Educational Leadership, 59(6), 45-51.',
        'tier': 'C', 'publisher': 'ASCD', 'year': 2002,
        'supports': [('A1.1', "Level 2: participants' learning"), ('A1.2', "Level 4: participants' use of new knowledge and skills")],
    },
    {
        'id': 'cssp-sf-yt-research-foundation-2024', 'claim': 'new-cssp-parental-resilience',
        'cite_as': 'Harper Browne, C. (2024). Expanding the Perspectives and Research Foundation for the Strengthening Families and Youth Thrive Frameworks. Center for the Study of Social Policy.',
        'tier': 'D', 'publisher': 'Center for the Study of Social Policy', 'year': 2024,
        'supports': [('F1.4', 'Parental resilience: managing stress and functioning well')],
    },
]


# CP-10-02 (Severin, 2026-09-27): verified sources for four codes that had no
# framework. Each closes a deviation entry (FD-P09, FD-P13, FD-P14, FD-P20).
NEW += [
    {
        'id': 'circle-2002-civic-indicators', 'claim': ['new-circle-2002-voice', 'new-circle-2002-civic'],
        'cite_as': 'Keeter, S., Zukin, C., Andolina, M., & Jenkins, K. (2002). The Civic and Political Health of the Nation: A Generational Portrait. CIRCLE (Center for Information and Research on Civic Learning and Engagement).',
        'tier': 'C', 'publisher': 'CIRCLE', 'year': 2002,
        'supports': [('Y6.4', 'core civic engagement indicators: political voice and electoral indicators'),
                     ('Y6.5', 'core civic engagement indicators: community problem solving; regular volunteering')],
    },
    {
        'id': 'coffman-2009-advocacy-evaluation', 'claim': 'new-coffman-2009',
        'cite_as': "Coffman, J. (2009). A User's Guide to Advocacy Evaluation Planning. Harvard Family Research Project.",
        'tier': 'C', 'publisher': 'Harvard Family Research Project', 'year': 2009,
        'supports': [('A3.1', 'policy goals: development, adoption, implementation, maintenance')],
    },
    {
        'id': 'reisman-2007-advocacy-policy', 'claim': 'new-reisman-2007',
        'cite_as': 'Reisman, J., Gienapp, A., & Stachowiak, S. (2007). A Guide to Measuring Advocacy and Policy. Organizational Research Services, for the Annie E. Casey Foundation.',
        'tier': 'C', 'publisher': 'Annie E. Casey Foundation', 'year': 2007,
        'supports': [('A3.1', 'outcome category: improved policies (development, adoption, funding, implementation)')],
    },
]

CP_10_02_IDS = {'circle-2002-civic-indicators', 'coffman-2009-advocacy-evaluation', 'reisman-2007-advocacy-policy'}

# Supports added to sources already in the registry: (source id, code, component, claim).
EXTRA_SUPPORTS = [
    ('casel-2020', 'Y4.12', "Relationship Skills: 'Resisting negative social pressure'", 'y412-casel-resisting'),
    ('shape-nhes-2024', 'Y4.12', "Standard 4: 'Demonstrate refusal skills to avoid or reduce health risks'", 'new-nhes-std4'),
]


def _record():
    return {r['claim_id']: r for r in RECORD}


def apply(out, codes):
    rec = _record()
    by_source = {}
    for r in RECORD:
        if r.get('source_id'):
            by_source.setdefault(r['source_id'], []).append(r)

    for sid, src in list(out.items()):
        rows = by_source.get(sid)
        if not rows:
            continue
        read = [r for r in rows if r['source_kind'] == 'primary' or sid in FULL_TEXT_ELSEWHERE]
        best = next((r for r in read if r['verdict'] == 'SUPPORTED'), read[0] if read else None)
        src['status'] = 'verified' if best else 'located'
        src['verified_on'] = DATE
        src['verified_by'] = BY
        if best:
            src['excerpt'] = best['excerpt']
        src['url'] = URLS.get(sid, src.get('url'))
        if sid in CITE_AS:
            src['cite_as'] = CITE_AS[sid]
        kept = []
        for sup in src['supports']:
            if (sid, sup['code']) in REMOVE:
                continue
            row = next(r for r in rows if r['code'] == sup['code'])
            sup['component'] = COMPONENTS.get((sid, sup['code']), sup['component'])
            sup['fit'] = 'direct' if row['verdict'] == 'SUPPORTED' else 'partial'
            sup['excerpt'] = row['excerpt']
            sup['verifier_note'] = row['notes']
            kept.append(sup)
        src['supports'] = kept
        if not kept:
            del out[sid]

    for sid, code, comp, claim in EXTRA_SUPPORTS:
        r = rec[claim]
        assert code in codes and r['verdict'] in ('SUPPORTED', 'PARTIAL'), claim
        out[sid]['supports'].append({
            'code': code, 'component': comp, 'fit': 'direct' if r['verdict'] == 'SUPPORTED' else 'partial',
            'excerpt': r['excerpt'], 'verifier_note': r['notes'],
        })

    for n in NEW:
        claims = n['claim'] if isinstance(n['claim'], list) else [n['claim']] * len(n['supports'])
        rows = [rec[c] for c in claims]
        for r in rows:
            assert r['verdict'] in ('SUPPORTED', 'PARTIAL') and r['source_kind'] == 'primary', n['id']
        for code, _ in n['supports']:
            assert code in codes, code
        first = rows[0]
        out[n['id']] = {
            'id': n['id'], 'cite_as': n['cite_as'], 'codebook_names': [], 'tier': n['tier'],
            'publisher': n['publisher'], 'year': n['year'], 'url': first['url_checked'],
            'status': 'verified', 'verified_on': DATE, 'verified_by': BY, 'excerpt': first['excerpt'],
            'notes': 'Added by CP-10-02.' if n['id'] in CP_10_02_IDS else 'Added by CP-10-01.',
            'supports': [
                {'code': code, 'component': comp, 'fit': 'direct' if r['verdict'] == 'SUPPORTED' else 'partial',
                 'excerpt': r['excerpt'], 'verifier_note': r['notes']}
                for (code, comp), r in zip(n['supports'], rows)
            ],
        }
    return out
