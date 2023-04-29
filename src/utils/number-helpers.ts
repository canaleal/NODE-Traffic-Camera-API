
export function roundToDecimal(value: number, decimalPlaces: number): number {
    const multiplier = Math.pow(10, decimalPlaces);
    return Math.round(value * multiplier) / multiplier;
}

export function calculatePercentage(value: number, total: number): number {
    return (value / total) * 100;
}

export function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}

export function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
