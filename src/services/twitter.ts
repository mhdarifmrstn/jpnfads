import { TwitterApi } from "twitter-api-v2";
import { Kanji } from "../interfaces.js";
import env from "./env.js";
import api from "./api.js";

class Twitter {
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
    const postText = this.generatePostText(kanji);
    return this.app.v2.tweet(postText);
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
const twitter = new Twitter();

export default twitter;
