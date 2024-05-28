declare class FormatLocale {
    value: string;
    lengthToAbbreviate: number;
    splitted: string[];
    constructor(value: Numberable, lengthToAbbreviate?: number);
    get decimals(): string;
    get whole(): string;
    doesNeedAbbreviation(value: string): boolean;
    layers(): number;
}
export default FormatLocale;
//# sourceMappingURL=FormatLocale.d.ts.map