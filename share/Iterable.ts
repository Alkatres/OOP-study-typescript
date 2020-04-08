// TODO: implement iterable
// https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html

import Iterator from "./Iterator";
import Consumer from "./Consumer";

export default interface Iterable<T> {
  forEach(action: Consumer<T>): void;
  iterator(): Iterator<T>;
  // NOTE: Not implement spliterator
  // spliterator(): Iterator;
}
