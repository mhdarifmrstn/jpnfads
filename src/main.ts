import { Platform } from "./interfaces.js";
import api from "./services/api.js";
import telegram from "./services/telegram.js";
import threads from "./services/threads.js";
import twitter from "./services/twitter.js";

async function main() {
  const kanji = await api.getRandomKanji();
  const platforms: Platform[] = [telegram, threads, twitter];

  for (const platform of platforms) {
    const platformName = platform.constructor.name;

    try {
      await platform.sendPost(kanji);
      console.log(platformName, "sent!");
    } catch (err) {
      console.log(platformName, (err as Error).message);
    }
  }
  process.exit();
}
main();
