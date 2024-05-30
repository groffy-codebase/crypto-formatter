import floatable from "./src/utils/floatable";
import ensureFloat from "./src/utils/ensureFloat";
import formatter from "./src/CryptoFormatter";
declare const cryptoFormatter: {
    signs: {
        thousand: string;
        million: string;
        billion: string;
        trillion: string;
        readonly full: any;
        getSign(layer: number, full?: boolean): string;
    };
    floatable: typeof floatable;
    ensureFloat: typeof ensureFloat;
    formatter: typeof formatter;
};
export default cryptoFormatter;
//# sourceMappingURL=index.d.ts.map