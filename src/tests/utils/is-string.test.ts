import { isString } from '../../utils/is-string';

describe('isString', () => {
    it('should return true if value is string', () => {
        expect(isString('')).toBe(true);
        expect(isString('hello')).toBe(true);
    });
    
    it('should return false if value is not string', () => {
        expect(isString(0)).toBe(false);
        expect(isString(null)).toBe(false);
        expect(isString(undefined)).toBe(false);
        expect(isString({})).toBe(false);
        expect(isString([])).toBe(false);
    });
    }
);