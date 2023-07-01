import api from "../services/api.js";

export default function getReadingText(xReading: string) {
  const xRomaji = api.toRomaji(xReading).replace(/\./g, "-");
  return xReading ? `${xReading} (${xRomaji})` : "-";
}
