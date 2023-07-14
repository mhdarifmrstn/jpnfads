import wanakana from "wanakana";
import kanji from "../assets/n5.json" assert { type: "json" };
import getRandom from "../extra/getRandom.js";

class Api {
  async getRandomKanji() {
    return getRandom(kanji);
  }

  toRomaji(kana: string) {
    return wanakana.toRomaji(kana).replace(/\./g, "-");
  }
}
const api = new Api();

export default api;
