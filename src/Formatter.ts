import { formatUnits } from "ethers";
import { Numberable } from "../types";
import FormatDisplay from "./FormatDisplay";
import FormatLocale from "./FormatLocale";
import signs from "./utils/signs";

interface IFormatOptions {
  keepZeros: boolean;
  limits: number;
  maximumDecimals:number
}
/**
 * Format is the abstracted formatter of things
 */
class Format extends FormatDisplay {
  locale: FormatLocale;
  constructor(value: Numberable,  onlyAbbreviateAt: number) {
    super(value);
    this.locale = new FormatLocale(value, onlyAbbreviateAt.toString().length);
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
      return `${this.value.split(".")[0]}.${dec.slice(0,options?.maximumDecimals || 0 )}`;
    }
    return value;
  }

  format(keepZeros: boolean, limits: number, maximumDecimals?:number) {
    return this._format({ keepZeros, limits, maximumDecimals });
  }

  abbreviate(full = true, decimals?: number, cut=false) {
    const layers = this.locale.layers.bind(this.locale)() as number;
    const sign = signs.getSign(layers, full);
    const value = formatUnits(this.locale.whole, 3 * layers);
    return `${this.locale.defaultDecimalCount(value, decimals, cut)} ${sign}`;
  }

  static format(value: Numberable, onlyAbbreviateAt: number, options: Partial<IFormatOptions>): string;
  static format(value: Numberable, onlyAbbreviateAt: number, keepZeros:boolean, limits:number, maximumDecimals:number):string;
  static format(value: Numberable,
    onlyAbbreviateAt: number,
    ...args: [keepZeros: boolean, limits: number, maximumDecimals:number] | [options: Partial<IFormatOptions>]): string { 
    const formatter = new Format(value, onlyAbbreviateAt)
    if (typeof args[0] === "object") {
      return formatter._format(args[0] as Partial<IFormatOptions>)
    } else {
      return formatter.format(...args)
    }
    }
}

export default Format;

