import floatable from "./src/utils/floatable";
import signs from "./src/utils/signs";
import FormatDisplay from "./src/FormatDisplay";
import FormatLocale from "./src/FormatLocale";
import Formatter from "./src/Formatter";
import ensureAFloat from "./src/utils/ensureAFloat";

const cryptoNumbers = {
  floatable, 
  signs,
  FormatDisplay,
  FormatLocale,
  Formatter: Formatter,
  ensureAFloat
}
export default cryptoNumbers;
