import { cleanEnv, num, str } from "envalid";
import "dotenv/config";

const env = cleanEnv(process.env, {
  TELEGRAM_BOT_TOKEN: str(),
  TELEGRAM_CHANNEL_ID: num(),
  TWITTER_API_KEY: str(),
  TWITTER_API_KEY_SECRET: str(),
  TWITTER_ACCESS_TOKEN: str(),
  TWITTER_ACCESS_TOKEN_SECRET: str(),
  THREADS_TOKEN: str(),
  THREADS_USER_ID: str(),
  MONGODB_URI: str(),
});
export default env;
