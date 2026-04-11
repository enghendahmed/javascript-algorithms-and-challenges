# Rest Pattern & Rest Parameters in JavaScript

A simple guide to understanding Rest Pattern and Rest Parameters in modern JavaScript (ES6).

## 📌 What is the Rest Pattern?

The Rest Pattern is used in destructuring to collect the remaining elements into a new array.
It is the opposite of spread operator.

-The ... is used for both Spread and Rest.

Rest = collect

Spread = expand

We used the spread operator to build new arrays or to pass mutliple values into a function.

in those two use cases we use the spread operator to **Expand** an array into individual elements.

The rest pattern use the exact same syntax which is three dots ... but to collect multiple elements and put them into an array.

The spread operator is to unpack an array , but rest is to pack elements into an array. it is the oppsite.

remember that :
... rest pattern = ... spread operator
on the left side = on the right side

it means if i write ... on the left side of the assignment operator = , so it is a rest pattern.

if i write ... on the right side of the assignment operator = , so it is a spread operator.

Note : rest pattern must be the last element.

### ✅ Correct Example:

```js
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const [a, , b, ...others] = array;
console.log(a, b, ...others); // 1 3 4 5 6 7 8
```

### ❌ Wrong Example:

```js
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const [a, , b, ...others, z] = array;
console.log(a , b , ...others); // SyntaxError: Rest element must be last element
```

---

### Use cases of Rest Pattern :

1. in Arrays : Rest Pattern collects the remain elements and put them into an array .

2. in Objects : Rest Pattern collects the remain elements and put them into an object .

3. function :
   Rest parameters allow a function to accept any number of arguments dynamically, instead of relying on a fixed parameter count.

---
