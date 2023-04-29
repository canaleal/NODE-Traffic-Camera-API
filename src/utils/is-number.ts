export const isNumber = (value: unknown): value is number => {
    return typeof value === 'number';
}

export const isNumeric = (value: unknown): value is number => {
    return !isNaN(parseFloat(value as string)) && isFinite(value as number);
}