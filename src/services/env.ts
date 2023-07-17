import required from "../extra/requiredEnv.js";

const token = required("TELEGRAM_BOT_TOKEN");
const channelId = Number(required("TELEGRAM_CHANNEL_ID"));
const twitterAppKey = required("TWITTER_API_KEY");
const twitterAppSecret = required("TWITTER_API_KEY_SECRET");
const twitterAccessToken = required("TWITTER_ACCESS_TOKEN");
const twitterAccessSecret = required("TWITTER_ACCESS_TOKEN_SECRET");
const threadsToken = required("THREADS_TOKEN");
const threadsUserId = required("THREADS_USER_ID");
const mongodbUri = required("MONGODB_URI");

export default {
  token,
  channelId,
  twitterAppKey,
  twitterAppSecret,
  twitterAccessToken,
  twitterAccessSecret,
  threadsToken,
  threadsUserId,
  mongodbUri,
};
