import wanakana from "wanakana";
import mongoose from "mongoose";
import { Kanji } from "../interfaces.js";
import env from "./env.js";

const kanjiExampleSchema = new mongoose.Schema({
  kanji: { type: String, required: true },
  meaning: { type: String, required: true },
  kana: { type: String, required: true },
  level: { type: Number, required: true },
});
const kanjiSchema = new mongoose.Schema({
  kanji: { type: String, required: true },
  meaning: { type: String, required: true },
  level: { type: Number, required: true },
  kana: { type: String, required: true },
  onYomi: { type: String, required: true },
  kunYomi: { type: String, required: true },
  examples: { type: [kanjiExampleSchema], required: true },
});
const KanjiModel = mongoose.model("Kanji", kanjiSchema, "kanji");

class Api {
  async getRandomKanji() {
    await mongoose.connect(env.mongodbUri);
    return (await KanjiModel.aggregate<Kanji>([{ $sample: { size: 1 } }]))[0];
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
