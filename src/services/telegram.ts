import { Kanji } from "../interfaces.js";
import { Telegraf } from "telegraf";
import { bold, code, fmt, join } from "telegraf/format";
import env from "./env.js";
import getReadingText from "../extra/getReadingText.js";

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
    const onReadingText = getReadingText(kanji.onReading);
    const kunReadingText = getReadingText(kanji.kunReading);

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
}
const telegram = new Telegram();

export default telegram;
