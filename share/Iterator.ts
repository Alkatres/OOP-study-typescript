// TODO: implement iterator
// https://docs.oracle.com/javase/8/docs/api/java/util/Iterator.html

import Consumer from "./Consumer";

export default interface Iterator {
  forEachRemaining(action?: Consumer): void;
  hasNext(): boolean;
  // next(): E;
  remove(): void;
}
