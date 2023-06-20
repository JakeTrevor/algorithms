
Computers work with electrical signals - for our purposes they can only be on or off. There are two states, so its called 'binary' (bi as in two). We can think of the on state as representing a 1, and the off state as representing a 0. A single piece of binary information (a single 1 or 0) is called a "bit" - its the smallest unit of information possible.

## Booleans
Bits themselves are useful. We often want to think about something as being on or off, or (more commonly in programming) true or false. This kind of value is also called a Boolean value - named after [George Boole](https://en.wikipedia.org/wiki/George_Boole), who worked on a kind of algebraic logic so much that we named it after him (Boolean logic). 

## Numbers
However we usually want to describe more complex things than just on and off (or 1 and 0). To do this, we must create a way to encode the information we want in binary - so that we can represent the data on the computer physically with electrical signals.

For simple integers (whole numbers), we can just use a base-2 (binary) encoding and add enough digits (or bits - a single digit is just a 1 or a 0) to encode the number we want.

Negative numbers are a bit harder - we want to be able to maths with them on the computer efficiently, ideally with a single instruction. To do this, we use a system called two's complement;

Fractions or decimals are annother problem point. Here, We use floating point representations - essentially, there is a decimal point which we can move left or right to change the size and specificity of the number.

The page on [numerical representations] has more detail on all of these numerical encodings.


## Text
The other big kind of information we want to represent in computers commonly is text; The idea for text encoding is very simple - we just give every letter a corresponding number. There are standards on how to do this; the big one used today is Unicode, but a simpler one we used earlier on (which is useful if you want to play around) is ASCII. In ASCII, A is 65, B is 63, and so on. The number can then be represented in the computer just like an integer. A single character becomes a single number. A longer passage of text is just a  list (or "string", as it's called) of characters - which we can represent as a list of numbers.

There are of course other kinds of data - sound, pictures, videos just to name a few - but the principle remains the same. We translate the data into a number, which is easy to represent in a computer.

Types
As is hopefully obvious now, there is no real way, just looking at a raw binary string, to know what that string represents. In fact, in a very real sense, there is no one thing which it does represent. For the data to mean anything, we must know how it is being encoded - otherwise it might as well just be a number.