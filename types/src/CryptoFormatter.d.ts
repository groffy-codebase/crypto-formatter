import { Numberable } from "../types";
import splitter from "./utils/splitter";
declare class BaseFormat {
    splitted: ReturnType<typeof splitter>;
    constructor(value: Numberable, zeros?: string);
    get value(): string;
    removeTrailingZeros(full?: boolean): BaseFormat;
    abbreviateRaw(placeValue?: number, max?: number): [BaseFormat, number];
    addCommas(): BaseFormat;
}
export default function formatter(value: Numberable, zeros?: string): BaseFormat;
export {};
//# sourceMappingURL=CryptoFormatter.d.ts.map