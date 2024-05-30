import { Numberable } from "../../types";
import splitter from "./splitter";

function addCommas(value: Numberable) {
  const splitted = splitter(value)
  const whole = splitted.whole;
  const max = whole.length;
  let current = "";
  let virtual: string[] = [];
  for (var i = 0; i < whole.length; i++){
    current+= whole[(max  - 1)- i]
    if (i === max - 1) {
      virtual.push(current.split("").reverse().join(""));
      current = "";
    } else if(current.length === 3) {
      virtual.push(`,${current}`);
      current = ""
    }
  }
  return virtual.reverse().join("")
}

export default addCommas;