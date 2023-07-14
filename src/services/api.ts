import wanakana from "wanakana";
import kanji from "../assets/n5.json" assert { type: "json" };
import getRandom from "../extra/getRandom.js";
import { Kanji } from "../interfaces.js";

class Api {
  async getRandomKanji() {
    return getRandom(kanji);
  }

  toRomaji(kana: string) {
    return wanakana.toRomaji(kana).replace(/\./g, "-");
  }

  generatePostText(kanji: Kanji) {
    const kana = kanji.kana.replace(/\(|\)/g, "");
    const romaji = api.toRomaji(kana);

    return (
      `Kanji: ${kanji.kanji}\n\n` +
      `Kana: ${kana} - ${romaji}\n` +
      `Meaning: ${kanji.meaning}\n` +
      `Level: n${kanji.level}`
    );
  }
}
const api = new Api();

export default api;
