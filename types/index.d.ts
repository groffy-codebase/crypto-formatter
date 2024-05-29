import floatable from "./src/utils/floatable";
import FormatDisplay from "./src/FormatDisplay";
import FormatLocale from "./src/FormatLocale";
import Formatter from "./src/Formatter";
import ensureAFloat from "./src/utils/ensureAFloat";
declare const cryptoNumbers: {
    floatable: typeof floatable;
    signs: {
        thousand: string;
        million: string;
        billion: string;
        trillion: string;
        readonly full: any;
        getSign(layer: number, full?: boolean): string;
    };
    FormatDisplay: typeof FormatDisplay;
    FormatLocale: typeof FormatLocale;
    Formatter: typeof Formatter;
    ensureAFloat: typeof ensureAFloat;
};
export default cryptoNumbers;
//# sourceMappingURL=index.d.ts.map