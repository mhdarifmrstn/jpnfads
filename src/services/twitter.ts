import { TwitterApi } from "twitter-api-v2";
import { Kanji } from "../interfaces.js";
import env from "./env.js";
import getReadingText from "../extra/getReadingText.js";

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
const twitter = new Twitter();

export default twitter;
