import { TwitterApi } from "twitter-api-v2";
import { Kanji, Platform } from "../interfaces.js";
import env from "./env.js";
import api from "./api.js";

class Twitter implements Platform {
  app: TwitterApi;

  constructor() {
    this.app = new TwitterApi({
      appKey: env.TWITTER_API_KEY,
      appSecret: env.TWITTER_API_KEY_SECRET,
      accessToken: env.TWITTER_ACCESS_TOKEN,
      accessSecret: env.TWITTER_ACCESS_TOKEN_SECRET,
    });
  }

  async sendPost(kanji: Kanji) {
    const postText = api.generatePostText(kanji);
    return this.app.v2.tweet(postText);
  }
}
const twitter = new Twitter();

export default twitter;
