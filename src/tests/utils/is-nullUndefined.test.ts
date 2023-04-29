import { isNullUndefined } from "../../utils/is-nullUndefined";

describe('isNullUndefined', () => {
    it('should return true if value is null or undefined', () => {
        expect(isNullUndefined(null)).toBe(true);
        expect(isNullUndefined(undefined)).toBe(true);
    });
    
    it('should return false if value is not null or undefined', () => {
        expect(isNullUndefined('')).toBe(false);
        expect(isNullUndefined(0)).toBe(false);
        expect(isNullUndefined(true)).toBe(false);
        expect(isNullUndefined(false)).toBe(false);
        expect(isNullUndefined({})).toBe(false);
        expect(isNullUndefined([])).toBe(false);
    });
    }
);