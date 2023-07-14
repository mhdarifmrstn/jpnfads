import "dotenv/config";

const env = process.env;
const token = env.TELEGRAM_BOT_TOKEN;
const channelId = Number(env.TELEGRAM_CHANNEL_ID);
const twitterAppKey = env.TWITTER_API_KEY;
const twitterAppSecret = env.TWITTER_API_KEY_SECRET;
const twitterAccessToken = env.TWITTER_ACCESS_TOKEN;
const twitterAccessSecret = env.TWITTER_ACCESS_TOKEN_SECRET;
const threadsToken = env.THREADS_TOKEN;
const threadsUserId = env.THREADS_USER_ID;

if (!token) {
  throw Error("Provide TELEGRAM_BOT_TOKEN");
}
if (!channelId) {
  throw Error("Provide TELEGRAM_CHANNEL_ID");
}
if (!twitterAppKey) {
  throw Error("Provide TWITTER_API_KEY");
}
if (!twitterAppSecret) {
  throw Error("Provide TWITTER_API_KEY_SECRET");
}
if (!twitterAccessToken) {
  throw Error("Provide TWITTER_ACCESS_TOKEN");
}
if (!twitterAccessSecret) {
  throw Error("Provide TWITTER_ACCESS_TOKEN_SECRET");
}
if (!threadsToken) {
  throw Error("Provide THREADS_TOKEN");
}
if (!threadsUserId) {
  throw Error("Provide THREADS_USER_ID");
}
export default {
  token,
  channelId,
  twitterAppKey,
  twitterAppSecret,
  twitterAccessToken,
  twitterAccessSecret,
  threadsToken,
  threadsUserId,
};
