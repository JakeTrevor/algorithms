```embed-typescript
PATH: vault://code/stack.ts
```

A stack stores a collection of arbitrary elements. Access follows the "FOLO" pattern - first on last off; Pop returns the most recently pushed item, and removes it.


# Implementations:

## Array-based

They Array-based implementation uses an array (i.e. a contiguous block of memory) to store the data and a pointer to track the top (or "head") of the stack.

When we `push`, we simply write `x` to the head, and increment the pointer. When we `pop`, we read from the head and decrement the pointer. `peek` does the same, without decrementing the pointer.
`size` simply returns the capacity of the array. empty` `returns true when pointer is set to 0 (or the start of the array).

Because arrays are of fixed sizes, the stack is also of a fixed size. This means that for all operations, we must perform a boundary check (that the head pointer is greater than 0 for pops, and less than `size` for pushes), and resizing is expensive.

>table for performance


Linked-List implementation

We can also use a singly linked list to implement this structure. To `push`, we simply insert an element in position 0. To `peek` or `pop`, we read the first element (and remove it if required). `empty` just checks if the head pointer for the list is `null`.

Note however that such a stack has no inherent capacity - it can grow as there is memory. Thus, in linked list implementations, `size` is often not implemented.


>table for performance