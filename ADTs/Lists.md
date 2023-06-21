A list is an ordered collection of elements. There are two important implementations:

## Array

```stats
Space complexity: O(n) on the number of elements stored
Access (read, update): O(1)
Resizing (adding an additonal element): O(n)
```
An array is a single contiguous block of memory set aside to store a list. This must all be allocated at once, so you need to know the size of the array when it is initialised. You can resize arrays, but this is expensive. The elements within it must be of a fixed size, and so it is generally only able to store data of a single type.

The advantage of this relatively restrictive implementation is very fast operations of all kinds.

The memory space the array takes up is the length of the array (i.e. the number of elements $n$ that the array can store) multiplied by the size of a single element ($e$)

$$\text{Space} = ne$$
This gives it a space complexity of $O(n)$ - you cannot do better.

Accessing the array at a given index $i$ is also simple; the memory address for that element is given by:
$$
\text{Start} + i\cdot e
$$

The addition, multiplication, and final memory access are all constant time operations, so overall access is $O(1)$. This applies for changing the value of an index or for reading it.

Resizing the array however is much more difficult. 

If we want to increase the capacity of the array, we need to allocate more memory. However, in general, you cannot guarantee that the memory addresses after the array are free, so you often have to allocate a totally new block of memory. This requires copying the entire contents of the array from the old block of memory to the new one - if there are $n$ items, this is $n$ operations, so $O(n)$.

Going down in size of course does not suffer from the same problem, but we encounter a different one. Imagine we wanted to remove an element at index $i$ from the middle of an array - we want the element at $i+1$ to follow $i-1$. To do this, we would need to move $i+1$ to $i$, and then $i+2$ to $i+1$, and so on, for the full length of the array. If we did this for the first element in the array, we would need to move the entire rest of it; this gives us a time complexity again of $O(n)$


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
