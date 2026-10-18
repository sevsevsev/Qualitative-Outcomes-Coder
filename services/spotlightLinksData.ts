// services/spotlightLinksData.ts
//
// SPOTlight link data keyed by codebook id (see services/spotlightLinks.ts).
// Only the internal app imports this file; the public explorer site does not.
// Rebuild the JSON with: python3 codebook-refinement/spotlight/build_links.py

import youthOutcomesV3Links from '../codebook-refinement/spotlight/youth_outcomes_v3.spotlight-links.json';
import { SpotlightLinks } from './spotlightLinks.js';

export const SPOTLIGHT_LINKS: Record<string, SpotlightLinks | undefined> = {
  youth_outcomes_v3: youthOutcomesV3Links as SpotlightLinks,
};

export const getSpotlightLinks = (codebookId: string): SpotlightLinks | undefined => SPOTLIGHT_LINKS[codebookId];
