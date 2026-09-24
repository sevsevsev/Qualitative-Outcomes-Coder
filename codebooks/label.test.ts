import { describe, expect, it } from 'vitest';
import { buildSystemInstruction, CODEBOOK_REGISTRY } from './index.js';

describe('original codebook name', () => {
  it('shows the new name but keeps the prompt header unchanged', () => {
    const cb = CODEBOOK_REGISTRY.original;
    expect(cb.label).toBe('Youth Outcomes Codebook');
    const instruction = buildSystemInstruction(cb);
    expect(instruction).toContain('\nOriginal (Youth Development) CODEBOOK (Definitions, Source Frameworks & Examples)\n');
    expect(instruction).not.toContain('Youth Outcomes Codebook');
  });
});
