Pointers are addresses in memory - they are that simple. An address in memory can store anything - a string, a number, a larger data structure like a list or a struct. We can refer to that data (create a reference to it) by saving its memory address. That is a pointer. Pointers are extremely useful for a few reasons:


## Passing by Reference
Moving large data structures around in memory for use in different parts of a program can be impractically slow. But a pointer to that data is quite small, and can easily be moved around. This kind of data-passing is called pass-by-reference, as opposed to pass-by-value, where the actual data itself is given. It's the only option when dealing with very large structures.

## Quick Copies
Copying data is slow for the same reason as moving it. Pointers allow us to copy data quickly and easily so we can use it in many different places. Instead of copying the data, we can copy over a (much smaller) pointer to it, which allows us to access it.

This also has the property that whatever data we are referring to is now shared by the two pointers - if we update the data using pointer A, the change is reflected when we access it with pointer B. This isn't really a benefit or a disadvantage - just fact of life when working with pointers and references. Generally this requires us to be much more careful with how we use the data, but it is also the foundation of many kinds of concurrent systems.

