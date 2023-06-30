import wanakana from "wanakana";
import kanji from "../assets/kanji.json" assert { type: "json" };
import getRandom from "../extra/getRandom.js";

class Api {
  kanji: typeof kanji;
  toRomaji: typeof wanakana.toRomaji;

  constructor() {
    this.kanji = kanji;
    this.toRomaji = wanakana.toRomaji;
  }

  async getRandomKanji() {
    return getRandom(this.kanji);
  }
}
const api = new Api();

export default api;
