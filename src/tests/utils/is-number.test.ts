import { isNumber, isNumeric} from './../../utils/is-number';

describe('isNumber', () => {
    it('should return true if value is number', () => {
        expect(isNumber(0)).toBe(true);
        expect(isNumber(1)).toBe(true);
        expect(isNumber(-1)).toBe(true);
    });

    it('should return false if value is not number', () => {
        expect(isNumber('')).toBe(false);
        expect(isNumber(null)).toBe(false);
        expect(isNumber(undefined)).toBe(false);
        expect(isNumber({})).toBe(false);
        expect(isNumber([])).toBe(false);
    }
    );
});

describe('isNumeric', () => {
    it('should return true if value is numeric', () => {
        expect(isNumeric(0)).toBe(true);
        expect(isNumeric(1)).toBe(true);
        expect(isNumeric(-1)).toBe(true);
        expect(isNumeric('0')).toBe(true);
        expect(isNumeric('1')).toBe(true);
        expect(isNumeric('-1')).toBe(true);
    });

    it('should return false if value is not numeric', () => {
        expect(isNumeric('')).toBe(false);
        expect(isNumeric(null)).toBe(false);
        expect(isNumeric(undefined)).toBe(false);
        expect(isNumeric({})).toBe(false);
        expect(isNumeric([])).toBe(false);
    }
    );
});