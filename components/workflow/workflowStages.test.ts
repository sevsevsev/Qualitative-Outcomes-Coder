import { describe, expect, it } from 'vitest';
import { V3_DOMAINS } from '../../codebooks/youthOutcomesV3.data.js';
import { EXAMPLE_ROWS, EXAMPLE_SCHOOL, WORKFLOW_STAGES, domainOf, findV3Code, referencedCodeIds } from './workflowStages.js';

describe('workflow stages', () => {
  it('has six stages, and only the last is planned', () => {
    expect(WORKFLOW_STAGES).toHaveLength(6);
    expect(WORKFLOW_STAGES.filter(s => s.planned).map(s => s.key)).toEqual(['explore']);
  });

  it('refers only to codes that exist in codebook 3.x', () => {
    for (const id of referencedCodeIds()) expect(findV3Code(id), id).toBeDefined();
  });

  it('refers only to domains that exist in codebook 3.x', () => {
    for (const ids of Object.values(EXAMPLE_SCHOOL)) for (const id of ids) expect(domainOf(id), id).toBeDefined();
  });

  it("counts the followed statement's codes under Program A in the school view", () => {
    const followedDomains = EXAMPLE_ROWS.filter(r => r.followed).map(r => domainOf(r.code)!.domain.id);
    for (const d of followedDomains) expect(EXAMPLE_SCHOOL.A).toContain(d);
  });

  it('leaves at least one domain uncovered, so the example shows a gap', () => {
    const covered = new Set(Object.values(EXAMPLE_SCHOOL).flat());
    expect(V3_DOMAINS.some(d => !covered.has(d.id))).toBe(true);
  });
});
