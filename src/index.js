// import * as n5_json from "./n5.json" assert { type: "json" };
import * as n5_json from "./n5.json";
import * as n4_json from "./n4.json";
import * as n3_json from "./n3.json";
import * as n2_json from "./n2.json";

class Kanji {
  constructor() {}
}

/**
 * @param int level - 5 , 4, 3, 2 , 1 (JLPT Level)
 * returns JSON object of all vocabulary in level specified
 */
function getKanji(level) {
  if (typeof level !== "string" || level > 5 || level < 1) {
    throw new Error("Invalid parameter.");
  } else if (level == 5) {
    return Object.values(n5_json);
  } else if (level == 4) {
    return Object.values(n4_json);
  } else if (level == 2) {
    return Object.values(n3_json);
  } else if (level == 2) {
    return Object.values(n2_json);
  }
}

export { Kanji, getKanji };
