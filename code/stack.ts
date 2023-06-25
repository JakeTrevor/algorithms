interface stack<T> {
  // main operations:
  push: (x: T) => boolean;
  // add x to the stack; return success
  pop: () => T;
  // remove an element from the stack and return it

  // Auxiliary operations:
  peek: () => T;
  // return the element at the top of the stack without removing it
  size: () => integer;
  // returns the capacity of the stack
  empty: () => boolean;
  // returns weather the stack is empty;
}
