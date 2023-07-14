import { Kanji } from "../interfaces.js";
import { Telegraf } from "telegraf";
import env from "./env.js";
import api from "./api.js";

class Telegram {
  app: Telegraf;

  constructor() {
    this.app = new Telegraf(env.token);
  }

  async sendPost(kanji: Kanji) {
    const postText = api.generatePostText(kanji);
    return this.app.telegram.sendMessage(env.channelId, postText);
  }
}
const telegram = new Telegram();

export default telegram;
