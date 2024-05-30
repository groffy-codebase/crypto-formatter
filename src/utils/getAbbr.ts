import { formatUnits } from "ethers";
import { Numberable } from "../../types";
import splitter from "./splitter";

/**
 * A class that will handle the conversion value 
 * uses the layers and count to make the decimal 
 */
class GetLayers {
  splitted: ReturnType<typeof splitter>
  placeValue: number
  constructor(value: Numberable, placeValue:number=1 ) {
    this.splitted = splitter(value);
    this.placeValue = placeValue;
  }
  canBeAbbreviated(max=4):[boolean, number] {
    const value = this.splitted.whole;
    const length = value.length;
    const layers = Math.floor((length - this.placeValue) / 3);
    return [length - this.placeValue  > 3, layers > max ? max : layers]
  }

  getLayersAndValue(max?:number) {
    const value = this.splitted.whole;
    const [can, count] = this.canBeAbbreviated(max);
    let val = ""
    if (can) {
      val = formatUnits(value, count * 3)
    } else {
      val = this.splitted.value;
    }
    return [val, count] as [string, number];
  }
}

export default function getAbbr(value: Numberable, placeValue?: number, max?: number) {
  const getLayers = new GetLayers(value, placeValue);
  return getLayers.getLayersAndValue(max);
}
