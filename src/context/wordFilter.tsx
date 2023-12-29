import Filter from "bad-words";

const filter = new Filter();

export default function filterWords(str: string) {
  return filter.clean(str)
}