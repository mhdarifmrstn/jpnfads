import wanakana from "wanakana";
import kanji from "../assets/kanji.json" assert { type: "json" };
import getRandom from "../extra/getRandom.js";
import { Kanji } from "../interfaces.js";

class Api {
  kanji: typeof kanji;
  toRomaji: typeof wanakana.toRomaji;

  constructor() {
    this.kanji = kanji;
    this.toRomaji = wanakana.toRomaji;
  }

  async getRandomKanji(): Promise<Kanji> {
    return getRandom(this.kanji);
  }
}
const api = new Api();

export default api;
