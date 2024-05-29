import { Numberable } from "../types";
import ensureAFloat from "./utils/ensureAFloat";
/**
 * FormatLocal: abbreviates the value
 */
class FormatLocale extends String {
  value: string;
  lengthToAbbreviate: number;
  splitted: string[];
  constructor(value: Numberable, lengthToAbbreviate: number = 3) {
    super(ensureAFloat(value));
    this.value = ensureAFloat(value);
    this.lengthToAbbreviate = lengthToAbbreviate;
    this.splitted = this.value.split(".");
  }

  get decimals() {
    return this.splitted[1];
  }

  get whole() {
    return this.splitted[0];
  }

  /**
   * 
   * @param value the value to check
   * @returns returns the if it can be abbrivated
   */
  doesNeedAbbreviation(value: string) {
    const needs = value.length - this.lengthToAbbreviate >= 3;
    return needs;
  }

  layers() {
    let layer = 0;
    const whole = this.whole;
    let virtual = whole;
    if(this.doesNeedAbbreviation(virtual)) {
      layer = Math.floor((virtual.length - (this.lengthToAbbreviate )) / 3);
      let decimals = 3 * layer;
      decimals = decimals >= 12 ? decimals : 12; 
    }
    return layer;
  }

  
}

export default FormatLocale;