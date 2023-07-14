import { Kanji } from "../interfaces.js";
import { Telegraf } from "telegraf";
import { bold, code, fmt, join } from "telegraf/format";
import env from "./env.js";
import api from "./api.js";

class Telegram {
  app: Telegraf;

  constructor() {
    this.app = new Telegraf(env.token);
  }

  async sendPost(kanji: Kanji) {
    const postText = this.generatePostText(kanji);
    return this.app.telegram.sendMessage(env.channelId, postText);
  }

  generatePostText(kanji: Kanji) {
    const kana = kanji.kana;
    const romaji = api.toRomaji(kana);

    return join(
      [
        fmt`${bold("Kanji:")} ${code(kanji.kanji)}\n`,
        fmt`${bold("Kana:")} ${code(`${kana} - ${romaji}`)}`,
        fmt`${bold("Meaning:")} ${code(kanji.meaning)}`,
        fmt`${bold("Level:")} ${code(`n${kanji.level}`)}`,
      ],
      "\n"
    );
  }
}
const telegram = new Telegram();

export default telegram;
