"""Builds codebook-refinement/sources/youth_outcomes_v3.sources.json.

Every source comes from an existing verification record: the live registry
(original.sources.json), the v2 candidate registry (v2/v2-candidate-sources.json,
per-code blind verification), or the 2026-09-26 re-review of Y3 and Y5
(RE_REVIEW below, excerpts recorded by the citation verifier). Nothing here is
cited from memory. SUPPORTS says which v3 code each source backs; a code with
no support is codebook-defined and is listed in codebook_extensions with its
DEVIATIONS.md entry.

    python3 codebook-refinement/v3/build_registry.py
"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
ORIG = json.loads((ROOT / 'codebook-refinement/sources/original.sources.json').read_text())
V2 = json.loads((ROOT / 'codebook-refinement/v2/v2-candidate-sources.json').read_text())
DATA = (ROOT / 'codebooks/youthOutcomesV3.data.ts').read_text()
DOMAINS = json.loads(DATA[DATA.index('= [') + 2:DATA.rindex(';')])
CODES = {c['id']: c for d in DOMAINS for cat in d['categories'] for c in cat['codes']}

# Verifier results from the Y3/Y5 re-review (2026-09-26).
RE_REVIEW = {
    'nagaoka-2015-foundations': {
        'cite_as': 'Nagaoka, J., Farrington, C. A., Ehrlich, S. B., & Heath, R. D., with Johnson, D. W., Dickson, S., Turner, A. C., Mayo, A., & Hayes, K. (2015). Foundations for Young Adult Success: A Developmental Framework. University of Chicago Consortium on Chicago School Research.',
        'codebook_names': ['Nagaoka et al. (2015)'],
        'tier': 'C', 'publisher': 'University of Chicago Consortium on School Research', 'year': 2015,
        'url': 'https://consortium.uchicago.edu/sites/default/files/2023-06/FYAS%20Executive%20Summary-Jun2015-Consortium.pdf',
        'status': 'verified', 'verified_on': '2026-09-26', 'verified_by': 'Y3/Y5 re-review (codebook-citation-verifier)',
        'excerpt': "the ability to make choices about and take an active role in one's life path, rather than solely being the product of one's circumstances",
        'notes': "Integrated identity: 'a sense of internal consistency of who one is across time and across multiple social identities (e.g., race/ethnicity, profession, culture, gender, religion)'. Mindsets: 'beliefs and attitudes about oneself, the external world, and the interaction between the two.' The report does not name growth mindset and does not support sense of purpose (N04 unsupported).",
    },
    'search-40-assets': {
        'cite_as': 'Search Institute. (n.d.). The Developmental Assets Framework: 40 Developmental Assets for Adolescents (ages 12-18).',
        'codebook_names': ['Developmental Assets Framework', '40 Developmental Assets'],
        'tier': 'D', 'publisher': 'Search Institute', 'year': None,
        'url': 'https://searchinstitute.org/resources-hub/developmental-assets-framework',
        'status': 'verified', 'verified_on': '2026-09-26', 'verified_by': 'Y3/Y5 re-review (codebook-citation-verifier)',
        'excerpt': "37. Personal power ... Young person feels he or she has control over 'things that happen to me.' ... 39. Sense of purpose ... Young person reports that 'my life has purpose.'",
        'notes': "Content verified for Support (1 Family support, 2 Positive family communication) and Positive Identity (37-40). The 2006 date could not be confirmed, so it is cited without a year. Other asset categories (Empowerment/Safety, Positive Values, Constructive Use of Time) carry the live registry's 'located' status and were not re-checked; see those supports' components.",
    },
    'search-developmental-relationships': {
        'url': 'https://searchinstitute.org/resources-hub/developmental-relationships-framework',
        'verified_on': '2026-09-26', 'verified_by': 'Y3/Y5 re-review (codebook-citation-verifier)',
        'excerpt': 'When they have high-quality, positive relationships with parents, teachers, mentors, coaches, and peers, they are more likely to develop resilience',
        'notes': "Covers relationships with parents and family (S02) and with peers (S03: 'a close connection between a young person and an adult or between a young person and a peer', Search Institute research update, 2014).",
    },
}

# v3 code -> [(source id, component)]. Source ids name records in ORIG, V2 or RE_REVIEW.
SUPPORTS = {
    'Y1.1': [('essa-6311-b1c-standards', 'reading or language arts'), ('national-reading-panel-2000', 'alphabetics, fluency, comprehension'), ('ccss-writing-anchors', 'CCR Anchor Standards for Writing')],
    'Y1.2': [('wida-eld', 'English Language Development Standards Framework')],
    'Y1.3': [('essa-6311-b1c-standards', 'mathematics')],
    'Y1.4': [('essa-6311-b1c-standards', 'science'), ('ngss-three-dimensions', 'three dimensions'), ('csta-k12-2017', 'K-12 Computer Science Standards')],
    'Y1.5': [('essa-7801-52-well-rounded', 'well-rounded education subjects'), ('naep-9622-b2d', 'additional subject matter')],
    'Y1.6': [('national-core-arts-standards', 'standards for dance, media arts, music, theatre and visual arts')],
    'Y1.7': [('namle-core-principles', 'definition of media literacy'), ('conley-four-keys', 'Key Cognitive Strategies')],
    'Y1.8': [('head-start-elof', 'Language & Literacy and Cognition')],
    'Y1.9': [('farrington-2012', 'Academic Behaviors')],
    'Y1.10': [('farrington-2012', 'Academic Perseverance')],
    'Y1.11': [('farrington-2012', 'Learning Strategies')],
    'Y1.12': [('farrington-2012', 'Academic Mindsets')],
    'Y1.13': [('attendance-works', 'chronic absence'), ('mckinney-vento', 'school stability')],
    'Y1.14': [('crdc-2021-22-discipline', 'discipline data elements'), ('irvin-2004-odr', 'office discipline referrals')],
    'Y1.15': [('allensworth-easton-2005', 'On-Track Indicator'), ('allensworth-easton-2007', 'course grades and GPA')],
    'Y1.16': [('crdc-2020-21-student-access', 'AP and dual enrollment')],
    'Y1.17': [('essa-indicators', 'four-year adjusted cohort graduation rate')],
    'Y1.18': [('nsc-hs-benchmarks', 'postsecondary enrollment, persistence and completion')],
    'Y2.1': [('muhammad-five-pursuits', 'Pursuit 5: Joy')],
    'Y2.2': [('hidi-renninger-2006', 'Phase 1: triggered situational interest')],
    'Y2.3': [('hidi-renninger-2006', 'Phases 2-4: maintained situational, emerging and well-developed individual interest')],
    'Y2.4': [('eccles-expectancy-value', 'utility value')],
    'Y2.5': [('national-core-arts-standards', 'artistic processes: Creating; Performing/Presenting/Producing; Responding')],
    'Y2.6': [('search-40-assets', 'Constructive Use of Time (live registry status: located)')],
    'Y3.1': [('cdc-school-connectedness-2009', 'School connectedness')],
    'Y3.2': [('search-developmental-relationships', 'Express Care; Challenge Growth; Provide Support'), ('cdc-school-connectedness-2009', 'Adult support')],
    'Y3.3': [('search-developmental-relationships', 'relationships between young people and peers'), ('cdc-school-connectedness-2009', 'Belonging to a positive peer group')],
    'Y3.4': [('search-40-assets', 'Support: 1 Family support; 2 Positive family communication'), ('search-developmental-relationships', 'relationships with parents and family')],
    'Y3.5': [('e2w-social-capital', 'social capital')],
    'Y4.1': [('casel-2020', "Self-Awareness: 'Identifying one's emotions'")],
    'Y4.2': [('casel-2020', "Self-Management: 'Managing one's emotions'; 'Identifying and using stress-management strategies'")],
    'Y4.3': [('casel-2020', "Self-Management: 'Setting personal and collective goals'; 'Exhibiting self-discipline and self-motivation'; 'Using planning and organizational skills'")],
    'Y4.4': [('casel-2020', "Social Awareness: 'Taking others' perspectives'; 'Demonstrating empathy and compassion'; 'Identifying diverse social norms, including unjust ones'")],
    'Y4.5': [('casel-2020', "Relationship Skills: 'Demonstrating cultural competency'; Self-Awareness: 'Examining prejudices and biases'")],
    'Y4.6': [('casel-2020', "Relationship Skills: 'Communicating effectively'")],
    'Y4.7': [('casel-2020', "Relationship Skills: 'Practicing teamwork and collaborative problem-solving'")],
    'Y4.8': [('casel-2020', "Relationship Skills: 'Developing positive relationships'; 'Resolving conflicts constructively'")],
    'Y4.9': [('casel-2020', "Relationship Skills: 'Seeking or offering support and help when needed'")],
    'Y4.10': [('casel-2020', "Responsible Decision-Making: 'Identifying solutions for personal and social problems'; 'Anticipating and evaluating the consequences of one's actions'")],
    'Y4.11': [('casel-2020', "Responsible Decision-Making: 'Evaluating personal, interpersonal, community, and institutional impacts'; 'Reflecting on one's role to promote personal, family, and community well-being'")],
    'Y5.1': [('nagaoka-2015-foundations', 'Key outcome: integrated identity'), ('casel-2020', "Self-Awareness: 'Integrating personal and social identities'")],
    'Y5.2': [('nagaoka-2015-foundations', 'Integrated identity across social identities (race/ethnicity, culture)'), ('learning-for-justice-sjs', 'Identity standards'), ('muhammad-five-pursuits', 'Pursuit 1: Identity')],
    'Y5.3': [('nagaoka-2015-foundations', 'Integrated identity across social identities, including profession')],
    'Y5.4': [('nagaoka-2015-foundations', 'Foundational component: mindsets'), ('casel-2020', "Self-Awareness: 'Experiencing self-efficacy'; 'Having a growth mindset'"), ('search-40-assets', 'Positive Identity: 38 Self-esteem')],
    'Y5.5': [('search-40-assets', 'Positive Identity: 39 Sense of purpose; 40 Positive view of personal future')],
    'Y5.6': [('nagaoka-2015-foundations', 'Key outcome: agency'), ('search-40-assets', 'Positive Identity: 37 Personal power')],
    'Y6.1': [('search-40-assets', 'Positive Values (live registry status: located)')],
    'Y6.2': [('ncss-c3-2013', 'Dimension 2: Civics')],
    'Y6.3': [('muhammad-five-pursuits', 'Pursuit 4: Criticality')],
    'Y6.6': [('naaee-k12-2019', 'Personal and Civic Responsibility')],
    'Y6.7': [('iste-students-2016', 'Standard 2: Digital Citizen')],
    'Y7.1': [('perkins-v', 'career exploration')],
    'Y7.2': [('conley-four-keys', 'Key Transition Knowledge & Skills')],
    'Y7.3': [('octae-employability-skills-framework', 'Employability Skills Framework')],
    'Y7.4': [('perkins-v', 'technical skills and work-based learning'), ('wioa-20cfr677155', 'credential attainment')],
    'Y7.5': [('wioa-20cfr677155', 'employment and median earnings indicators')],
    'Y7.6': [('cfpb-building-blocks-2016', 'building blocks'), ('jumpstart-cee-2021', 'National Standards for Personal Financial Education')],
    'Y7.7': [('chafee-42usc677', 'daily living skills')],
    'Y8.1': [('cdc-wscc', 'Physical Education & Physical Activity; Nutrition Environment & Services'), ('hp2030-sh04', 'SH-04 sleep')],
    'Y8.2': [('shape-pe-2024', 'Standard 1: motor skills')],
    'Y8.3': [('shape-nhes-2024', 'Standard 1')],
    'Y8.4': [('nses-2020', 'National Sex Education Standards'), ('cdc-yrbss', 'Sexual behaviors')],
    'Y8.5': [('hp2030-ah01-ahs01', 'AH-01 preventive visit; AHS-01 health insurance'), ('acf-nytd', 'health insurance')],
    'Y8.6': [('keyes-dual-continua', 'mental illness continuum')],
    'Y8.7': [('keyes-dual-continua', 'mental health continuum (flourishing)')],
    'Y8.8': [('nctsn-core-curriculum', '12 Core Concepts')],
    'Y8.9': [('cdc-wscc', 'Counseling, Psychological, and Social Services')],
    'Y8.10': [('search-40-assets', 'Empowerment: Safety (live registry status: located)')],
    'Y8.11': [('cdc-yrbss', 'Tobacco, alcohol, and other drug use'), ('samhsa-spf', 'Strategic Prevention Framework')],
    'Y8.12': [('cdc-yrbss', 'Behaviors that contribute to unintentional injuries and violence'), ('cdc-ed-bullying-2014', 'Uniform definition of bullying')],
    'Y8.13': [('cjca-2009', 'juvenile justice performance measures')],
    'F1.1': [('cssp-strengthening-families', 'Knowledge of Parenting and Child Development'), ('epstein-six-types', 'Type 1 Parenting')],
    'F1.2': [('epstein-six-types', 'Type 4 Learning at Home')],
    'F1.3': [('miechv-performance-measures', 'performance measures'), ('hp2030-mich14', 'MICH-14'), ('hp2030-mich15', 'MICH-15')],
    'F1.4': [('cssp-strengthening-families', 'Parental Resilience')],
    'F1.5': [('cssp-strengthening-families', 'Social Connections')],
    'F1.6': [('ascend-2gen', 'Postsecondary & Employment Pathways'), ('digital-equity-act', 'digital literacy definition, 47 U.S.C. 1721(12)')],
    'F1.7': [('idea-671-pti', 'Parent Training and Information Centers'), ('cssp-concrete-support', 'Concrete Support in Times of Need'), ('mapp-kuttner-2013', 'family capacities')],
    'F1.8': [('mapp-kuttner-2013', 'family-school partnership'), ('epstein-six-types', 'Type 2 Communicating')],
    'F1.9': [('epstein-six-types', 'Types 3 Volunteering and 5 Decision Making')],
    'F2.1': [('ascend-2gen', 'Economic Assets'), ('cssp-concrete-support', 'Concrete Support in Times of Need')],
    'F2.2': [('usda-hfssm', 'Household Food Security Survey Module')],
    'F2.3': [('acf-nytd', 'housing'), ('mckinney-vento', 'homelessness definitions')],
    'A1.1': [('learning-forward-2022', 'Standards for Professional Learning')],
    'A1.2': [('learning-forward-2022', 'Standards for Professional Learning (implementation)'), ('samhsa-tic-2014', 'trauma-informed approach')],
    'A1.3': [('surgeon-general-2022-workplace-wellbeing', 'workplace well-being framework'), ('niosh-wellbq-2021', 'WellBQ'), ('bls-jolts-definitions', 'separations and quits')],
    'A2.1': [('ypqa-pyramid', 'program quality pyramid')],
    'A2.3': [('fcc-ecf-47cfr54-q', 'Emergency Connectivity Fund equipment'), ('essa-4109-tech-capacity', '20 U.S.C. 7119(a)(2)'), ('digital-equity-act-1723', '47 U.S.C. 1723(c)(1)(B)')],
    'A2.5': [('uw-extension-logic-model', 'Outputs'), ('weiss-little-bouffard-2005', 'participation measures')],
    'A2.6': [('mapp-kuttner-2013', 'organizational capacity'), ('epstein-six-types', 'Types 3 and 6')],
    'A3.2': [('kania-kramer-2011', 'Collective Impact')],
    'A3.3': [('sampson-1997', 'collective efficacy')],
}

def from_v2(s, codes):
    """A v2 candidate record, verified only where a blind check SUPPORTED it."""
    checks = [b for b in s.get('blind_verification', []) if b.get('verdict') == 'SUPPORTED']
    if not checks and s.get('status') != 'verified':
        raise SystemExit(f"{s['id']}: no SUPPORTED blind check and not verified")
    best = checks[0] if checks else {}
    cite = best.get('corrected_cite_as') or s['cite_as']
    return {
        'id': s['id'], 'cite_as': cite, 'codebook_names': [], 'tier': s.get('tier'),
        'publisher': s.get('publisher'), 'year': s.get('year'),
        'url': best.get('url_checked') or s.get('url'), 'status': 'verified',
        'verified_on': V2.get('date'), 'verified_by': f"v2 candidate verification ({V2.get('cycle')})",
        'excerpt': best.get('excerpt') or s.get('excerpt'),
        'notes': f"From v2/v2-candidate-sources.json (v2 status: {s['status']}). Only the SUPPORTED component is relied on here.",
    }

orig = {s['id']: s for s in ORIG['sources']}
v2 = {s['id']: s for s in V2['sources']}
# The OCR 2020-21 Student Access report was verified in this review (research-basis.md, appendix A, R04).
EXTRA = {
    'crdc-2020-21-student-access': {
        'id': 'crdc-2020-21-student-access',
        'cite_as': 'U.S. Department of Education, Office for Civil Rights (2024). 2020-21 Civil Rights Data Collection: Student Access to and Enrollment in Mathematics, Science, and Computer Science Courses and Academic Programs.',
        'codebook_names': ['Civil Rights Data Collection'], 'tier': 'A', 'publisher': 'U.S. Department of Education, Office for Civil Rights', 'year': 2024,
        'url': 'https://www.ed.gov/sites/ed/files/about/offices/list/ocr/docs/crdc-student-access-enrollment.pdf',
        'status': 'verified', 'verified_on': '2026-09-26', 'verified_by': 'codebook research basis review (appendix A, R04)',
        'excerpt': 'Nearly 15,900 public high schools enrolled approximately 1.6 million students in dual enrollment or dual credit programs.',
        'notes': 'Verified in docs/codebook/research-basis.md appendix A (R04).',
    },
}

out = {}
for code, sups in SUPPORTS.items():
    assert code in CODES, code
    for sid, comp in sups:
        if sid not in out:
            if sid in EXTRA:
                rec = dict(EXTRA[sid])
            elif sid in orig:
                rec = {k: v for k, v in orig[sid].items() if k != 'supports'}
                if sid in RE_REVIEW:
                    rec.update(RE_REVIEW[sid])
            elif sid in RE_REVIEW:
                rec = {'id': sid, **RE_REVIEW[sid]}
            elif sid in v2:
                rec = from_v2(v2[sid], code)
            else:
                raise SystemExit(f'unknown source {sid} for {code}')
            if rec.get('status') not in ('verified', 'located'):
                raise SystemExit(f'{sid} has status {rec.get("status")}; only verified or located sources may back a code')
            rec['supports'] = []
            out[sid] = rec
        out[sid]['supports'].append({'code': code, 'component': comp})

dev = (ROOT / 'codebook-refinement/DEVIATIONS.md').read_text()
extensions = []
for cid, c in CODES.items():
    if cid not in SUPPORTS:
        assert c['fidelity'] == 'codebook-defined' or c.get('deviation'), cid
        extensions.append({'code': cid, 'reason': f"Codebook-defined: no verified or located framework names this construct. See {c.get('deviation', 'DEVIATIONS.md')}."})

registry = {
    'codebook_id': 'youth_outcomes_v3',
    'codebook_version_reviewed': '3.0.0',
    'last_reviewed': '2026-09-26',
    'status_legend': ORIG['status_legend'],
    'sources': sorted(out.values(), key=lambda s: s['id']),
    'codebook_extensions': extensions,
}
path = ROOT / 'codebook-refinement/sources/youth_outcomes_v3.sources.json'
path.write_text(json.dumps(registry, indent=2, ensure_ascii=False) + '\n')
print(f'wrote {path.relative_to(ROOT)}: {len(out)} sources, {sum(len(s["supports"]) for s in out.values())} supports, {len(extensions)} codebook-defined codes')
