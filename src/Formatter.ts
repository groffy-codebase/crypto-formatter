import { formatUnits } from "ethers";
import { Numberable } from "../types";
import FormatDisplay from "./FormatDisplay";
import FormatLocale from "./FormatLocale";
import signs from "./utils/signs";

interface IFormatOptions {
  keepZeros: boolean;
  limits: number;
  maximumDecimals: number
}
/**
 * Format is the abstracted formatter of things
 */
class Format extends FormatDisplay {
  locale: FormatLocale;
  constructor(value: Numberable,  onlyAbbreviateAt: number) {
    super(value);

    this.locale = new FormatLocale(value, onlyAbbreviateAt);
  }

  _format(options?: Partial<IFormatOptions>) {
    let value = this.value;
    if (!options?.keepZeros) {
      value = this.removeTrailingZeros();
    }
    if (options?.limits) {
      value = this.shouldNotExceed(options.limits);
    }
    if (options?.maximumDecimals) {
      const dec = value = this.value.split(".")[1] || "";
      value = `${this.value.split(".")[0]}.${dec.slice(0,options?.maximumDecimals || 0 )}`;
    }
    return this.sameClass(value);
  }

  format(keepZeros: boolean, limits: number, maximumDecimals?:number) {
    return this._format({ keepZeros, limits, maximumDecimals });
  }

  abbreviate(full = true):[Format, string] {
    const layers = this.locale.layers() as number;
    const sign = signs.getSign(layers, full);
    const value = this.sameClass(formatUnits(this.locale.whole, 3 * layers));
    console.log(sign, layers, sign)
    return [value, sign];
  }


  sameClass(value:Numberable) {
    return new Format(value, this.locale.lengthToAbbreviate);
  }

  static format(value: Numberable, onlyAbbreviateAt: number, options: Partial<IFormatOptions>):Format;
  static format(value: Numberable, onlyAbbreviateAt: number, keepZeros:boolean, limits:number, maximumDecimals:number):Format;
  static format(value: Numberable,
    onlyAbbreviateAt: number,
    ...args: [keepZeros: boolean, limits: number, maximumDecimals:number] | [options: Partial<IFormatOptions>]):Format { 
    const formatter = new Format(value, onlyAbbreviateAt)
    if (typeof args[0] === "object") {
      return formatter._format(args[0] as Partial<IFormatOptions>)
    } else {
      return formatter.format(...args)
    }
  }
  
  defaultDecimalCount(value:string, decimals=0,) {
    const splitted = value.split(".");
    let virtual = splitted[1] || "";
    let decimalsToGenerate = 0;
    if (splitted[1] && decimals) {
      if (splitted[1].length < decimals) {
        decimalsToGenerate = decimals - splitted[1].length
      }
    } 
    for (var i = 0; i < decimalsToGenerate; i++) {
      virtual += "0"
    }
    splitted[1] = virtual;
    return this.sameClass(splitted.join("."));
  }

  withCommas() {
    const whole = this.locale.whole;
    const bigint = BigInt(whole);
    console.log(bigint.toLocaleString())
    return `${whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}${this.locale.decimals}`;

  }

}

export default Format;

