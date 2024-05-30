import { Numberable } from "../../types";
/**
 * Split something to ensure that the value is a valid float
 */
declare class ValueSplitter {
    /** the value to be splitted */
    value: string;
    /** ths splitted value */
    splitted: string[];
    constructor(value: string);
    /** get the whole number  */
    get whole(): string;
    get decimals(): string;
}
export default function splitter(value: Numberable, zeros?: string): ValueSplitter;
export {};
//# sourceMappingURL=splitter.d.ts.map