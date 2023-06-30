import api from "./services/api.js";

async function main() {
  const kanji = await api.getRandomKanji();
  console.log(kanji);
}
main();
