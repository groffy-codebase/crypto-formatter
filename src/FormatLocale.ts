import { Numberable } from "../types";
/**
 * FormatLocal: abbreviates the value
 */
class FormatLocale {
  value: string;
  lengthToAbbreviate: number;
  splitted: string[];
  constructor(value: Numberable, lengthToAbbreviate: number = 3) {
    this.value = value.toString().trim();
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
      decimals = decimals >= 12 ? decimals : 12; ``
    }
    return layer;
  }

  defaultDecimalCount(value:string, decimals=18, cut=false) {
    const splitted = value.split(".");
    let virtual = splitted[1] || "";
    const needs = virtual.length < decimals ? decimals - splitted[1]?.length || 0 : (() => {
      cut = true;
      return 0
    })(); 
    if (cut) splitted[1] = splitted[1]?.slice(0, decimals);
    for (var i = 0; i < needs; i++) {
      virtual += "0"
    }
    splitted[1] = virtual;
    const number = splitted.join(".");
    return (number.endsWith(".") ? number.slice(0, number.length - 1) : number).trim();  

  }
}

export default FormatLocale;