import { describe, it, expect } from 'vitest';

describe('Vitest configuration', () => {
    it('must pass a basic mathematical test (Sanity Check)', () => {
        expect(1 + 1).toBe(2);
    });

    it('must have access to the global DOM', () => {
        expect(globalThis.document).toBeDefined();
    });
});
