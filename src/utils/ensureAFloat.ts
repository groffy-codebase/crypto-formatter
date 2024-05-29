import { Numberable } from "../../types";

export default function ensureAFloat(_value: Numberable) {
  const value = _value.toString().trim();
  const splitted = value.split(".");
  if (splitted.length > 2) {
    splitted.push("00")
  }
  return splitted.join(".");
}