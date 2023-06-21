When we analyse algorithms for how well they perform, we generally don't think about real values.

For example, the real amount of time an algorithm takes to run is very difficult to predict, and often depends somewhat on chance - for example, how the operating system scheduled the task. Computers are also ridiculously fast - Gigahertz clock speeds, billions of operations per second. The precise amount of time an algorithm takes to run is frankly irrelevant - we only need a ballpark figure. 

Instead, we tend to look at the resources needed to run the algorithm on some theoretical very large input (usually named $n$). The amount of resources needed is called the **complexity** of the algorithm, and analysing the complexity at a theoretical extreme is called **asymptotic analysis**.

We generally focus two key metrics - time and space complexity. However, you could apply the same ideas to other kinds of resources if you wanted to.


## Describing Complexity
For asymptotic analysis, we use a big-O notation to describe complexity. There's actually a whole family of relation notations (called [Bachmann–Landau notation]), but big-O is the most important - to the point where you can more or less ignore the others.

When writing big-O notation, we care only about the leading (largest) term for each variable in the equation. We don't care about constants at all - reducing them down to 1. Here are some examples:

| Real Time Taken   | Time Complexity  |
| ----------------- | ---------------- |
| $153$             | $O(1)$           |
| $3n+12$           | $O(n)$           |
| $n^{2}+n+14$      | $O(n^{2})$       |
| $2n^{2}+3m^{3}+1$ | $O(n^{2}+m^{3})$ |

We do this because when $n$ (or any other variable) gets sufficiently large, only the very largest term has any significant effect. If $n = 1,000,000$, and a function takes $n^{2}+n+14$ time, then $14$ or even $1,000,000$ becomes small in comparison to $1,000,000,000,000$ (that's a trillion). This gets more true at the limit - the larger $n$, the less smaller terms matter. With asymptotic analysis, we are thinking at the extremes.

The other big role of big-O notation is to help us think about how we should expect resource usage to change with input growth. Imagine I doubled the size of an input; the table below shows how resource usage would scale:

| Complexity | Resource usage factor with 2n |
| ---------- | ----------------------------- |
| $O(1)$     | 1                             |
| $O(n)$     | 2                             |
| $O(n^{2})$ | 4                             |
| $O(n^{3})$ | 8                             |

This gives you some idea of why managing complexity is important; if complexity gets too high, even small changes in input size can make computation unwieldy.