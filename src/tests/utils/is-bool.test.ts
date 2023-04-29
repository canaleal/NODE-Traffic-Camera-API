import { isBool } from '../../utils/is-bool';

describe('isBool', () => {
    it('should return true if value is boolean', () => {
        expect(isBool(true)).toBe(true);
        expect(isBool(false)).toBe(true);
    });
    
    it('should return false if value is not boolean', () => {
        expect(isBool('')).toBe(false);
        expect(isBool(0)).toBe(false);
        expect(isBool(null)).toBe(false);
        expect(isBool(undefined)).toBe(false);
        expect(isBool({})).toBe(false);
        expect(isBool([])).toBe(false);
    });
    });