import api from "./services/api.js";
import telegram from "./services/telegram.js";

async function main() {
  const kanji = await api.getRandomKanji();
  await telegram.sendPost(kanji);
}
main();
