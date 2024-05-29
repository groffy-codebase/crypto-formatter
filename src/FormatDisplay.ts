import { Numberable } from "../types";
import ensureAFloat from "./utils/ensureAFloat";

class FormatDisplay extends String {
  value: string;
  constructor(value: Numberable) {
    super(ensureAFloat(value));
    this.value = ensureAFloat(value);
  }

  removeTrailingZeros() {
    const value = this.value;
    let splitted = value.split(".");
    if (splitted.length > 2) {
      throw "Invalid Float";
    }
    let virtual = splitted[1];
    while (!!virtual && virtual.endsWith("0") ) {
      const indexToRemove = virtual.length - 1;
      virtual = virtual.slice(0, indexToRemove);
    }
    splitted[1] = virtual;
    return  splitted.join(".");
  }

  shouldNotExceed(length: number) {
    return this.value.slice(0, length);
  }


}

export default FormatDisplay;