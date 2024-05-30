import { Numberable } from "./types";
import signs from "./src/utils/signs";
import floatable from "./src/utils/floatable";
import ensureFloat from "./src/utils/ensureFloat";
import formatter from "./src/CryptoFormatter";

const cryptoFormatter = {
  signs,
  floatable,
  ensureFloat,
  formatter
}

export default cryptoFormatter;