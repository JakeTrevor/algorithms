A list is an ordered collection of elements. There are two important implementations:

## [[Arrays]]

```stats
Space complexity: O(n) on the number of elements stored
Access (read, update): O(1)
Resizing (adding an additonal element): O(n)
```

Arrays have a fixed capacity and can only store one kind of data. The advantage of this relatively restrictive implementation is very fast operations of all kinds.

They have a space complexity of $O(n)$ on $n$ elements - you cannot do better.

Accessing the array at a given index $i$ is also simple; the memory address for that element is given by:
$$
\text{Start} + i\cdot s
$$
This means that any index operation (reading or writing) takes constant ($O(1)$) time.

## Linked Lists
A linked list uses a different approach; instead of allocating a large block right from the beginning, we allocate enough space for individual elements when they are needed. We then link these individual list "nodes" together by having each one "point" to the next. We store the linked list itself as a "head" pointer, which points to the first element.

This is the simplest variant, called a singly-linked list; single because each element only points to its successor. In a doubly-linked list, each node also points "back" - to its predecessor. For the rest of this analysis, we will look at singly-linked lists, but everything here also applies to doubly linked lists too - the extra pointers do not effect the time or space complexity of any of the of the operations.

A  linked list needs enough space for each element, and some space for the pointers - with n elements of size e, and p space needed for 1 set of pointers, we get:
$$ \text{Space} = n*(e+p) $$

With both $e$ and $p$ being constant, we have a space complexity of $O(n)$.

Resizing linked lists is very fast; to remove an element we need to update only a single pointer.

Inserting is also very fast; 

Indexed access however, is quite slow. If we want to reach element $i$ in the list, we need to start at the head and perform $i$ `.next()` operations. If we chose the last element in the list, that's $n$ operations, for a complexity of $O(n)$. This applies for read and write. Note that linked lists are not substantially slower for in complexity for iteration over the list - which always requires us to visit each element anyway.


---
Thus you can see the trade-off; Arrays are easy to access, but difficult to resize. Linked lists are easy to resize, but difficult to access. This is the principle consideration when choosing between these two options.
