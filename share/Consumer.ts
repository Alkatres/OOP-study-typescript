// TOOD: implement Consumer
// https://docs.oracle.com/javase/8/docs/api/java/util/function/Consumer.html

export default interface Consumer<T> {
  accept(t: T): void;
  andThen(after?: Consumer<T>): Consumer<T>;
}

