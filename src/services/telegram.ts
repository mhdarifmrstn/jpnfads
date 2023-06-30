import { Kanji } from "../interfaces.js";
import api from "./api.js";
import { Telegraf } from "telegraf";
import { bold, code, fmt, join } from "telegraf/format";
import env from "./env.js";

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
    const onReadingText = this.getReadingText(kanji.onReading);
    const kunReadingText = this.getReadingText(kanji.kunReading);

    return join(
      [
        fmt`${bold("Kanji:")} ${code(kanji.char)}\n`,
        fmt`${bold("Meaning:")} ${code(kanji.meaning)}`,
        fmt`${bold("Level:")} ${code(kanji.level)}`,
        fmt`${bold("On:")} ${code(onReadingText)}`,
        fmt`${bold("Kun:")} ${code(kunReadingText)}`,
      ],
      "\n"
    );
  }

  getReadingText(xReading: string) {
    return xReading ? `${xReading} (${api.toRomaji(xReading)})` : "-";
  }
}
const telegram = new Telegram();

export default telegram;
