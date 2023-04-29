import { roundToDecimal, calculatePercentage, clamp, randomInt } from "../../utils/number-helpers";

describe('roundToDecimal', () => {
    it('should round to 1 decimal place', () => {
        expect(roundToDecimal(1.2345, 1)).toBe(1.2);
    });

    it('should round to 2 decimal places', () => {
        expect(roundToDecimal(1.2345, 2)).toBe(1.23);
    });

    it('should round to 3 decimal places', () => {
        expect(roundToDecimal(1.2345, 3)).toBe(1.235);
    });

    it('should round to 4 decimal places', () => {
        expect(roundToDecimal(1.2345, 4)).toBe(1.2345);
    });
}
);

describe('calculatePercentage', () => {
    it('should calculate percentage', () => {
        expect(calculatePercentage(1, 2)).toBe(50);
        expect(calculatePercentage(1, 4)).toBe(25);
        expect(calculatePercentage(3, 4)).toBe(75);
    });
}
);

describe('clamp', () => {
    it('should clamp value', () => {
        expect(clamp(1, 2, 3)).toBe(2);
        expect(clamp(2, 2, 3)).toBe(2);
        expect(clamp(3, 2, 3)).toBe(3);
        expect(clamp(4, 2, 3)).toBe(3);
    });
}
);


describe('randomInt', () => {
    it('should return random int', () => {
        const min = 1;
        const max = 10;
        const value = randomInt(min, max);
        expect(value).toBeGreaterThanOrEqual(min);
        expect(value).toBeLessThanOrEqual(max);
    });
}
);