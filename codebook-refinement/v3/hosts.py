"""G8 host rule (CP-12-28, 3.1.5): cite the official copy; a secondary host only with a recorded
bibliographic match.

build_registry.py checks every source URL against these tables before it writes the registry:
- every URL host is classified here, as `official` (a government's own copy, or the publisher's or
  author organization's own site) or `secondary` (mirrors, repositories, course and third-party copies);
- a source on a secondary host names the verifier claim that recorded its bibliographic match
  (SECONDARY_HOST_MATCH), or waits on HOST_PENDING;
- a HOST_PENDING entry that has moved to an official host fails the build, so the list only shrinks.
Every claim named here is copied in a 2026-10-16 record file (source-verification-2026-10-16*.json).
"""

HOSTS = {
    # official: a government's own copy, or the publisher's or author organization's own site
    'acf.gov': 'official', 'ascend.aspeninstitute.org': 'official', 'casel.s3.us-east-2.amazonaws.com': 'official',
    'cdn.iste.org': 'official', 'iste.org': 'official', 'consortium.uchicago.edu': 'official', 'cssp.org': 'official',
    'csteachers.org': 'official', 'educationtoworkforce.org': 'official', 'eepro.naaee.org': 'official',
    'forumfyi.org': 'official', 'fyi.extension.wisc.edu': 'official', 'headstart.gov': 'official',
    'journals.sagepub.com': 'official', 'mchb.hrsa.gov': 'official', 'namle.org': 'official',
    'nnps.jhucsos.com': 'official', 'nscresearchcenter.org': 'official', 'octae.ed.gov': 'official',
    'odphp.health.gov': 'official', 'pmc.ncbi.nlm.nih.gov': 'official', 'pubmed.ncbi.nlm.nih.gov': 'official',
    'searchinstitute.org': 'official', 'www.search-institute.org': 'official', 'shapeamerica.org': 'official',
    'ssir.org': 'official', 'stacks.cdc.gov': 'official', 'standards.learningforward.org': 'official',
    'learningforward.org': 'official', 'uscode.house.gov': 'official', 'www.govinfo.gov': 'official',
    'www.ecfr.gov': 'official', 'www.federalregister.gov': 'official', 'wida.wisc.edu': 'official',
    'www.aasa.org': 'official', 'www.ascd.org': 'official', 'www.attendanceworks.org': 'official',
    'www.bls.gov': 'official', 'www.cdc.gov': 'official', 'cdc.gov': 'official',
    'www.consumerfinance.gov': 'official', 'files.consumerfinance.gov': 'official',
    'www.councilforeconed.org': 'official', 'www.ed.gov': 'official', 'www.ers.usda.gov': 'official',
    'snaped.fns.usda.gov': 'official', 'www.hhs.gov': 'official', 'www.nationalartsstandards.org': 'official',
    'www.nctsn.org': 'official', 'www.nextgenscience.org': 'official', 'www.nichd.nih.gov': 'official',
    'www.socialstudies.org': 'official', 'www.splcenter.org': 'official', 'www.learningforjustice.org': 'official',
    'www.thecorestandards.org': 'official', 'thecorestandards.org': 'official', 'doi.org': 'official',
    # Added for sources the 2026-10-16 review created (CP-11-01, CP-12-02 ... CP-12-22): each is the
    # publisher's or issuing body's own site.
    'www.actfl.org': 'official',              # ACTFL, one of the seven authoring bodies of the Seal guidelines
    'www.casey.org': 'official',              # Casey Family Programs, publisher of the Casey Life Skills toolkit
    'monitoringthefuture.org': 'official',    # the Monitoring the Future study's own site
    'ojjdp.ojp.gov': 'official',              # U.S. DOJ, OJJDP
    'resources.corwin.com': 'official',       # Corwin, publisher of Epstein et al. (2019)
    'www.nationalacademies.org': 'official',  # The National Academies Press
    'www.viacharacter.org': 'official',       # VIA Institute on Character
    'www.who.int': 'official',                # World Health Organization
    'search.oecd.org': 'official',            # OECD's own site (oecd-sses-2021-houston, CP-12-01)
    # secondary: mirrors, repositories, course and third-party copies
    'www.law.cornell.edu': 'secondary', 'files.eric.ed.gov': 'secondary', 'eric.ed.gov': 'secondary',
    'measureresults.issuelab.org': 'secondary', 'www.countyhealthrankings.org': 'secondary',
    'www.doc.ks.gov': 'secondary', 'acmd615.pbworks.com': 'secondary', 'works.swarthmore.edu': 'secondary',
    'faculty.washington.edu': 'secondary', 'www.hillpedagogies.com': 'secondary',
    'www.advocatesforyouth.org': 'secondary', 'ncsacw.acf.hhs.gov': 'secondary',
    'spherelab.psych.ucla.edu': 'secondary',  # an author's lab copy (watts-diemer-voight-2011)
}

SECONDARY_HOST_MATCH = {  # source id -> claim whose verifier recorded the bibliographic match
    'weiss-little-bouffard-2005': 'a2-10',
    'reisman-2007-advocacy-policy': 'a3-01',
    'coffman-2009-advocacy-evaluation': 'a3-02',
    'nses-2020': 'y8a-19',
    'samhsa-tic-2014': 'a1-05',
    'watts-diemer-voight-2011': 'y6-01',
    'chafee-42usc677-a2': 'y3-05',
    'usc-42-671-a15b-reunification': 'y3-09',
    'rhya-34usc11212-b3': 'y3-10',
    # Round-2 V-HOST-5 to V-HOST-7 (CP-12-28): the copy is the cited work.
    'circle-2002-civic-indicators': 'CP-12-28-V-HOST-5-circle-2002-civic-indicators',
    'farrington-2012': 'CP-12-28-V-HOST-5-farrington-2012',
    'mapp-kuttner-2013': 'CP-12-28-V-HOST-5-mapp-kuttner-2013',
    # PARTIAL verdicts whose bibliographic match is recorded; what stayed unconfirmed is in the note.
    'conley-2007-college-readiness': 'CP-12-28-V-HOST-5-conley-2007-college-readiness',
    'hulleman-2010-utility-value': 'CP-12-28-V-HOST-5-hulleman-2010-utility-value',
    'cjca-2009': 'CP-12-28-V-HOST-6',
    'eccles-expectancy-value': 'CP-12-28-V-HOST-7',
}

HOST_PENDING = {  # source id -> what clears it; shrinks to empty
    'essa-4109-tech-capacity': 'CP-12-11 (lands after PR #62)',
    'muhammad-five-pursuits': 'V-HOST-8 came back PARTIAL: the page does not say it is the author\'s own',
}
