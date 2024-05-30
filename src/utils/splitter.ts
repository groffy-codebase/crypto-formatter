import { Numberable } from "../../types";
import ensureFloat from "./ensureFloat";

/**
 * Split something to ensure that the value is a valid float 
 */
class ValueSplitter  {
  /** the value to be splitted */
  value: string;
  /** ths splitted value */
  splitted: string[];
  constructor(value: string) {
    this.value = value.trim();
    this.splitted = this.value.split(".");
    if(this.splitted.length > 2) {
      throw "Invalid Float";
    }
  }
  /** get the whole number  */
  get whole() {
    return this.splitted[0];
  }
  /* get the decimals */
  get decimals() {
    return this.splitted[1];
  }
}

export default function splitter(value: Numberable, zeros?:string) {
  return new ValueSplitter(ensureFloat(value, zeros));
}