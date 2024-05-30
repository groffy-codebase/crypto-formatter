import { Numberable } from "../../types";

  function removeTrailingZeros(_value:Numberable, full=true) {
    const value = _value.toString();
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
    let final = splitted.join(".");
    if (final.endsWith(".") && full) {
      final = splitted[0];
    }
    return final;
  }

export default removeTrailingZeros;