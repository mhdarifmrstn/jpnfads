import threadsApi from "threads-api";
import env from "./env.js";
import { Kanji } from "../interfaces.js";
import api from "./api.js";

class Threads {
  app: threadsApi.ThreadsAPI;

  constructor() {
    this.app = new threadsApi.ThreadsAPI({
      token: env.threadsToken,
      userID: env.threadsUserId,
    });
  }

  async sendPost(kanji: Kanji) {
    const postText = this.generatePostText(kanji);
    return this.app.publish(postText);
  }

  generatePostText(kanji: Kanji) {
    const kana = kanji.kana;
    const romaji = api.toRomaji(kana);

    return (
      `Kanji: ${kanji.kanji}\n\n` +
      `Kana: ${kana} - ${romaji}\n` +
      `Meaning: ${kanji.meaning}\n` +
      `Level: n${kanji.level}`
    );
  }
}
const threads = new Threads();

export default threads;
