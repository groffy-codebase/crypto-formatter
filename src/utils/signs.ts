
/**
 * get the signs for the balance of token display
 */
const signs = {
  thousand: "K",
  million: "M",
  billion: "B",
  trillion: "T",

  get full() {
    const obj = signs;
    obj.thousand = "Thousand";
    obj.million = "Million";
    obj.billion = "Billion";
    obj.trillion = "Trillion";
    return obj;
  },

  getSign(layer: number, full:boolean=false) {
    const obj = full ? signs.full : signs;
    switch (layer) {
      case 0:
        return "";
      case 1:
        return obj.thousand;
      case 2:
        return obj.million;
      case 3:
        return obj.billion;
      default:
        return obj.trillion;
    }
  }
};


export default signs;