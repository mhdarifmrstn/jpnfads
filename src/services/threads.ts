import threadsApi from "threads-api";
import env from "./env.js";
import { Kanji } from "../interfaces.js";
import getReadingText from "../extra/getReadingText.js";

class Threads {
  app: threadsApi.ThreadsAPI;

  constructor() {
    this.app = new threadsApi.ThreadsAPI({
      username: env.threadsUsername,
      password: env.threadsPassword,
    });
  }

  async sendPost(kanji: Kanji) {
    const postText = this.generatePostText(kanji);
    return this.app.publish(postText);
  }

  generatePostText(kanji: Kanji) {
    const onReadingText = getReadingText(kanji.onReading);
    const kunReadingText = getReadingText(kanji.kunReading);

    return (
      `Kanji: ${kanji.char}\n\n` +
      `Meaning: ${kanji.meaning}\n` +
      `Level: ${kanji.level}\n` +
      `On: ${onReadingText}\n` +
      `Kun: ${kunReadingText}`
    );
  }
}
const threads = new Threads();

export default threads;
