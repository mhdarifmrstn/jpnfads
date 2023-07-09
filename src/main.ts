import api from "./services/api.js";
import telegram from "./services/telegram.js";
import threads from "./services/threads.js";
import twitter from "./services/twitter.js";

async function main() {
  const kanji = await api.getRandomKanji();

  await telegram.sendPost(kanji);
  await threads.sendPost(kanji);
  await twitter.sendPost(kanji);
}
main();
