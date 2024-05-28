import FormatDisplay from "./FormatDisplay";
import FormatLocale from "./FormatLocale";
interface IFormatOptions {
    keepZeros: boolean;
    limits: number;
    defaultDecimalCount: number;
}
declare class Format extends FormatDisplay {
    decimals: number;
    locale: FormatLocale;
    constructor(value: Numberable, decimals: number | undefined, onlyAbbreviateAt: number);
    _format(options?: Partial<IFormatOptions>): string;
    format(keepZeros: boolean, limits: number, defaultDecimalCount: number): string;
    abbreviate(full?: boolean): string;
    static format(value: Numberable, decimals: number, onlyAbbreviateAt: number, options: Partial<IFormatOptions>): string;
    static format(value: Numberable, decimals: number, onlyAbbreviateAt: number, keepZeros: boolean, limits: number, defaultDecimalCount: number): string;
}
export default Format;
//# sourceMappingURL=Formatter.d.ts.map