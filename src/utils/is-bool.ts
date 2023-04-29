
export const isBool = (value: unknown): value is boolean => {
    return typeof value === 'boolean';
}