export default function getRandom<T>(array: T[]) {
  return array[Math.floor(Math.random() * array.length)];
}
