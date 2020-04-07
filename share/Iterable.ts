// TODO: implement iterable
// https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html

import Consumer from "./Consumer";

export default interface Iterable {
  forEach(T): void;
  iterator
}
