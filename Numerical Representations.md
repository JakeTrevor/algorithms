
To understand how computers represent numbers, we should understand how we represent numbers. 

Take the number 123; Each digit we write out is in a different "place" which corresponds to a different value.

1 is in the 100s place, it represents 1 * 100 = 100
2 is in the 10s place, it represents 2 * 10 = 20
3 is in the 1s place, it represents 3 * 1 = 3

Note that the place values are all powers of 10:

| place   | n        | 3    | 2    | 1    |
|---------|----------|------|------|------|
| formula | $10^{(n-1)}$ |$10^2$ | $10^1$ | $10^0$ |
| value   |          | 100  | 10   | 1    |

This is why we call it base 10. And of course, you can use a number other than 10 as your base.
In general, we get the formula:
$$PV(n) = b ^{(n-1)}$$
where $PV(n)$ is the place value for place $n$ and $b$ is the base

## Integer Representation
Computers use binary - base-2 to represent numbers. using the formula above, we can translate binary numbers to decimal ones; take the binary number 1001;

| place value | 8 | 4 | 2 | 1 |   | total |
|-------------|---|---|---|---|---|-------|
| number      | 1 | 0 | 0 | 1 |   |       |
| result      | 8 | 0 | 0 | 1 | = | 9     |

So 1001 is 9 in binary.
This is how we represent integers (whole numbers) in computers.


## Two's Complement
Negative numbers are a little more complicated for computers. In the real world, we just apply a negative sign (-) to the front of the number. A simple idea is then just to include a single bit somewhere to encode the sign of the number. However, a naïve approach like this doesn't work so well - we want to be able to easily do maths with our numbers, and operations like add, subtract, multiply and divide should hopefully be 1 CPU instruction. 

To achieve this, we use a scheme called two's complement. Two's complement does use a sign bit, but in a very clever way. The leading digit in two's complement is the sign bit, and when we translate the number to decimal, we should treat it as if it had the same place value, but negative. So, looking again at 1001:

| place value | -8 | 4 | 2 | 1 |   | total |
|-------------|----|---|---|---|---|-------|
| number      | 1  | 0 | 0 | 1 |   |       |
| result      | -8 | 0 | 0 | 1 | = | -7    |

In two's complement, 1001 is not 9, but in fact -7! Note that it is not what you may have expected - its not "-1", even though its 001 with the sign but flipped on.

This allows us to add numbers as normal and get correct answers. For example, imagine you added 4 (0100) and -3 (1101)

| place value            | -8 | 4  | 2 | 1 |   | total |
|------------------------|----|----|---|---|---|-------|
| 4                      | 0  | 1  | 0 | 0 |   |       |
| -3                     | 1  | 1  | 0 | 1 |   |       |
| rember to carry the 1! | 1  | 10 | 0 | 1 |   |       |
| result                 | 0  | 0  | 0 | 1 | =  | 1     |


Note that if in the final place the number "overflows" - if we would normally get an extra digit to the left - we discard it.



## Floating Point
Floating point numbers are the most complex in terms of 
