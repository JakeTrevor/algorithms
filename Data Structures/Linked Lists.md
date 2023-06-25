Linked lists are a data structure used to create a chain of elements. We will consider the simplest variant - the singly-linked linked list.

A Linked List consists of a head pointer which points to either null (if the list is empty) or the first node in the list. The node contains a list element and a pointer to either null or the next node.

Linked Lists do not have a capacity in the same manner that say [[Arrays]] do. New nodes can be allocated as required, and so they can grow as required.

We can also easily remove elements from the list by having the chain of pointers skip over it.

The disadvantage to this approach is that accessing the information within is more costly.

For example, if I wanted to access the last element in the list, I would need to go through all $n$ nodes within it before finally arriving at the correct memory address.



## Related Data Structures
Doubly-linked are another variant of this same fundamental idea. Here each node points to its predecessor and successor, and we usually include a `tail` pointer (to point at the last node). For some specific applications this can be much faster, but it does not effect the complexity of indexing in general.

You can also generalise this idea into pointer-based trees; a single node contains pointers to its children and parent, for example.


---
## Uses:


As the name implies, Linked lists are often used to implement [[Lists]].