/**
 * cleans and checks if `value` is a floatable
 * @param value the value to be checked if floatable string 
 * @param error the error callback if using in frontend
 * @returns the cleaned float number string
 */
function floatable(value: string, error?: (...args: any[]) => any) {
  const virtual = (value.trim().match(/[\d\.]/g)||[""]).join("");
  const splitted = virtual.toString().split(".");
  if (splitted.length > 2 && error) {
    error();
    return virtual || "";
  } else if (splitted.length > 2) {
    throw "Invalid Float";
  } else {
    return virtual || "";
  }
}
export default floatable;