# Spread Operator :

- Use Cases :
  1- Expand an array into individual elements separated by comma
  2- pass arguments into functions ( pass multiple elements into fn).
  3-Shallow Copy Array.
  4-Merge two Arrays.

-Difference between Destructuring Arrays and Spread Operator.

- spread operator works on iterables ( Arrays , String ,maps , sets ), iterables are NOT Objects.

# in "shallow copy array "

What does “shallow” mean?

When we say a shallow copy, we mean:

Only the first level of the array (or object) is copied.
Anything nested inside is still pointing to the same reference in memory.

so for nested inside :
-NOT copied deeply, just referenced.
-Even though you changed copy, original changed too 😬

-Shallow copy = copy the container only
-Deep copy = copy everything inside it too

example:
const original = [1, 2, [3, 4]];

[3,4] is nested inside.

# the Big difference :

- is that the spread operator takes all the elements out from the array and Does Not create new variables .
- we use spread operator also in places we need values separated by commas (like inside an array we need to spread another array )

- Note : keep in mind NOw that we can still Only use the spread operator : when building an array , Or when we pass values into a function .

- what we can't do ? we can't use spread operator to build a string using a template literal .
- this will Not Work because this place `${}` does Not Expected multiple values separated by comma
- console.log(`${...str} Ahmed`); Unexpected Token error
- so again multiple values separated by a comma are usually only expected when we pass arguments into a function or when we build a new array.
