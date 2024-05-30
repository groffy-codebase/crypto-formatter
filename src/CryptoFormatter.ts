import { Numberable } from "../types";
import addCommas from "./utils/addCommas";
import getAbbr from "./utils/getAbbr";
import removeTrailingZeros from "./utils/removeTrailingZeros";
import splitter from "./utils/splitter";

class BaseFormat {
  splitted: ReturnType<typeof splitter>;
  constructor(value: Numberable, zeros?: string) {
    this.splitted = splitter(value, zeros);
  }
  // the value of the data 
  get value() {
    return this.splitted.value;
  }

  removeTrailingZeros(full?:boolean) {
    return new BaseFormat(removeTrailingZeros(this.value,full))
  }

  abbreviateRaw(placeValue?:number, max?:number) {
    const [value, layer] = getAbbr(this.value, max, placeValue);
    return [(new BaseFormat(value)), layer] as [BaseFormat, number];
  }

  addCommas() {
    return new BaseFormat(addCommas(this.value));
  }
}

export default function formatter(value: Numberable, zeros?: string) {
  return new BaseFormat(value, zeros);
}