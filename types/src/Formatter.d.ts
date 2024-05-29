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
    _format(options?: Partial<IFormatOptions>): Format;
    format(keepZeros: boolean, limits: number, maximumDecimals?: number): Format;
    abbreviate(full?: boolean): [Format, string];
    sameClass(value: Numberable): Format;
    static format(value: Numberable, onlyAbbreviateAt: number, options: Partial<IFormatOptions>): Format;
    static format(value: Numberable, onlyAbbreviateAt: number, keepZeros: boolean, limits: number, maximumDecimals: number): Format;
    defaultDecimalCount(value: string, decimals?: number): Format;
    withCommas(): string;
}
export default Format;
//# sourceMappingURL=Formatter.d.ts.map