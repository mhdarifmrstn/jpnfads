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
    const postText = api.generatePostText(kanji);
    return this.app.publish(postText);
  }
}
const threads = new Threads();

export default threads;
