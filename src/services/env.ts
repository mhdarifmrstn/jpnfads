import "dotenv/config";

const env = process.env;
const token = env.TELEGRAM_BOT_TOKEN;
const channelId = Number(env.TELEGRAM_CHANNEL_ID);

if (!token) {
  throw Error("Provide TELEGRAM_BOT_TOKEN");
}
if (!channelId) {
  throw Error("Provide TELEGRAM_CHANNEL_ID");
}
export default {
  token,
  channelId,
};
