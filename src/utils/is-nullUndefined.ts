export const isNullUndefined = (value: unknown): value is null | undefined => {
    return value === null || value === undefined;
}

export const isUndefined = (value: unknown): value is undefined => {
    return value === undefined;
}