import threadsApi from "threads-api";
import env from "./env.js";
import { Kanji, Platform } from "../interfaces.js";
import api from "./api.js";

class Threads implements Platform {
  app: threadsApi.ThreadsAPI;

  constructor() {
    this.app = new threadsApi.ThreadsAPI({
      token: env.THREADS_TOKEN,
      userID: env.THREADS_USER_ID,
    });
  }

  async sendPost(kanji: Kanji) {
    const postText = api.generatePostText(kanji);
    return this.app.publish(postText);
  }
}
const threads = new Threads();

export default threads;
