import { Numberable } from "../../types";
export default function ensureFloat(_value: Numberable, zeros="0") {
  const value = _value.toString().trim();
  const splitted = value.split(".");
  if (!splitted[1]) {
    splitted[1] = zeros
  }
  return splitted.join(".");
}