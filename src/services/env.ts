import "dotenv/config";

const env = process.env;
const token = env.TELEGRAM_BOT_TOKEN;
const channelId = Number(env.TELEGRAM_CHANNEL_ID);
const twitterAppKey = env.TWITTER_API_KEY;
const twitterAppSecret = env.TWITTER_API_KEY_SECRET;
const twitterAccessToken = env.TWITTER_ACCESS_TOKEN;
const twitterAccessSecret = env.TWITTER_ACCESS_TOKEN_SECRET;
const threadsUsername = env.THREADS_USERNAME;
const threadsPassword = env.THREADS_PASSWORD;

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
if (!threadsUsername) {
  throw Error("Provide THREADS_USERNAME");
}
if (!threadsPassword) {
  throw Error("Provide THREADS_PASSWORD");
}
export default {
  token,
  channelId,
  twitterAppKey,
  twitterAppSecret,
  twitterAccessToken,
  twitterAccessSecret,
  threadsUsername,
  threadsPassword,
};
