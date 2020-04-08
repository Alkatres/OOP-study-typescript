// TODO: implement Collection
// https://docs.oracle.com/javase/8/docs/api/java/util/Collection.html

import Iterator from "./Iterator";
import Iterable from "./Iterable";

export default interface Collection<E> extends Iterable<E> {
  add(e: E): boolean;
  addAll(c?: Collection<E>): boolean;
  clear(): void;
  contains(o: any): boolean;
  containsAll(c?: Collection<E>): boolean;
  equals(any): boolean;
  hashCode(): number;
  isEmpty(): boolean;
  iterator(): Iterator<E>
  // parallelStream():
  remove(o: any): boolean;
  removeAll(c?: Collection<E>): boolean;
  // removeIf()
  retainAll(): boolean;
  size(): number;
  // spliterator():
  // stream
  toArray(): Array<any>;
  toArray<T>(a: Array<T>): Array<T>;
}
