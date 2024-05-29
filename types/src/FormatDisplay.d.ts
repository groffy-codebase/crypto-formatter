import { Numberable } from "../types";
declare class FormatDisplay extends String {
    value: string;
    constructor(value: Numberable);
    removeTrailingZeros(): string;
    shouldNotExceed(length: number): string;
}
export default FormatDisplay;
//# sourceMappingURL=FormatDisplay.d.ts.map