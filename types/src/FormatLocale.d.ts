import { Numberable } from "../types";
/**
 * FormatLocal: abbreviates the value
 */
declare class FormatLocale extends String {
    value: string;
    lengthToAbbreviate: number;
    splitted: string[];
    constructor(value: Numberable, lengthToAbbreviate?: number);
    get decimals(): string;
    get whole(): string;
    /**
     *
     * @param value the value to check
     * @returns returns the if it can be abbrivated
     */
    doesNeedAbbreviation(value: string): boolean;
    layers(): number;
}
export default FormatLocale;
//# sourceMappingURL=FormatLocale.d.ts.map