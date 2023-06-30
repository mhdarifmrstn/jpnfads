export interface KanjiCompound {
  kanji: string;
  kana: string;
  translation: string;
  type: string;
}

export interface Kanji {
  char: string;
  compound?: KanjiCompound | KanjiCompound[];
  onReading: string;
  kunReading: string;
  meaning: string;
  level: string;
}
