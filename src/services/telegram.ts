import { Kanji, Platform } from "../interfaces.js";
import { Telegraf } from "telegraf";
import env from "./env.js";
import api from "./api.js";

class Telegram implements Platform {
  app: Telegraf;

  constructor() {
    this.app = new Telegraf(env.TELEGRAM_BOT_TOKEN);
  }

  async sendPost(kanji: Kanji) {
    const postText = api.generatePostText(kanji);
    return this.app.telegram.sendMessage(env.TELEGRAM_CHANNEL_ID, postText);
  }
}
const telegram = new Telegram();

export default telegram;
