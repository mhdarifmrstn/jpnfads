import { TwitterApi } from "twitter-api-v2";
import { Kanji, Platform } from "../interfaces.js";
import env from "./env.js";
import api from "./api.js";

class Twitter implements Platform {
  app: TwitterApi;

  constructor() {
    this.app = new TwitterApi({
      appKey: env.twitterAppKey,
      appSecret: env.twitterAppSecret,
      accessToken: env.twitterAccessToken,
      accessSecret: env.twitterAccessSecret,
    });
  }

  async sendPost(kanji: Kanji) {
    const postText = api.generatePostText(kanji);
    return this.app.v2.tweet(postText);
  }
}
const twitter = new Twitter();

export default twitter;
