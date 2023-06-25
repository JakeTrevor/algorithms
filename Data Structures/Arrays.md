An array is a single contiguous block of memory. It has a capacity $n$ - it can store up to $n$ elements. Its elements must be of a fixed size $s$; This means that we can just allocate a block of memory of size $s\cdot n$. However, as a result it is generally only able to store data of a single type.

The memory must all be allocated at once, so you need to know the capacity of the array when it is initialised. You can resize arrays, but this is expensive.

If we want to increase the capacity of the array, we need to allocate more memory. However, in general, you cannot guarantee that the memory addresses after the array are free, so you often have to allocate a totally new block of memory, and copy over the entire contents of the old block. If there are $n$ items, this is $n$ operations, so $O(n)$.

Going down in size of course does not suffer from the same problem, but we encounter a different one. Imagine we wanted to remove an element at index $i$ from the middle of an array - we want the element at $i+1$ to follow $i-1$. To do this, we would need to move $i+1$ to $i$, and then $i+2$ to $i+1$, and so on, for the full length of the array. If we did this for the first element in the array, we would need to move the entire rest of it; this gives us a time complexity again of $O(n)$.

However, accessing this data is fast; if I want the element at index $i$, the its as as loading the address $\text{start}+i\cdot s$. All of these variables are known, so this is $O(1)$.

---
# Uses:
Arrays are very useful, but their most common usage is to implement [[Lists]].