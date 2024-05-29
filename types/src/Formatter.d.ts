import { Numberable } from "../types";
import FormatDisplay from "./FormatDisplay";
import FormatLocale from "./FormatLocale";
interface IFormatOptions {
    keepZeros: boolean;
    limits: number;
    maximumDecimals: number;
}
/**
 * Format is the abstracted formatter of things
 */
declare class Format extends FormatDisplay {
    locale: FormatLocale;
    constructor(value: Numberable, onlyAbbreviateAt: number);
    _format(options?: Partial<IFormatOptions>): string;
    format(keepZeros: boolean, limits: number, maximumDecimals?: number): string;
    abbreviate(full?: boolean, decimals?: number, cut?: boolean): {
        sign: string;
        formatted: string;
        final: string;
    };
    static format(value: Numberable, onlyAbbreviateAt: number, options: Partial<IFormatOptions>): string;
    static format(value: Numberable, onlyAbbreviateAt: number, keepZeros: boolean, limits: number, maximumDecimals: number): string;
}
export default Format;
//# sourceMappingURL=Formatter.d.ts.map