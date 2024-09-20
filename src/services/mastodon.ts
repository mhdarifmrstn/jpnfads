import { Kanji, Platform } from "../interfaces.js";
import env from "./env.js";
import api from "./api.js";
import axios from "axios";

class Mastodon implements Platform {
  async sendPost(kanji: Kanji) {
    const url = env.MASTODON_URL + "/api/v1/statuses";
    const postText = api.generatePostText(kanji);

    return axios.post(
      url,
      { status: postText },
      {
        headers: {
          Authorization: `Bearer ${env.MASTODON_TOKEN}`,
        },
      },
    );
  }
}
const mastodon = new Mastodon();

export default mastodon;
