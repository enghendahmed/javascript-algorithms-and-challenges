# Spread Operator (...)

The spread operator is an ES6 feature that allows you to expand iterable elements into individual values.

---

## 📌 Use Cases

- Expand an array into individual elements separated by commas
- Pass multiple values as arguments into functions
- Create a shallow copy of an array
- Merge two or more arrays

---

## 🔄 Spread Operator vs Destructuring

- **Destructuring** extracts values from an array and assigns them to variables.
- **Spread operator** expands values without creating new variables.
- we use **spread operator** also in places we need values separated by commas (like inside an array we need to spread another array ).
- Note : keep in mind NOw that we can still Only use the spread operator : - when building an array , Or - when we pass values into a function .

---

## what we can't do ?

- we can't use spread operator to build a string using a template literal .
- this will Not Work because this place `${}` does Not Expected multiple values separated by comma
- console.log(`${...str} Ahmed`); Unexpected Token error
- so again multiple values separated by a comma are usually only expected when we pass arguments into a function or when we build a new array.

---

## 📦 Works With Iterables

The spread operator works only with **iterables**, such as:

- Arrays
- Strings
- Maps
- Sets

> ⚠️ Note: Plain objects are **not iterable**
> ** spread operator works on iterables ( Arrays , String ,maps , sets ), iterables are NOT Objects**.

---

## 🧠 Shallow Copy Explained

A shallow copy means:

- Only the first level of the array (or object) is copied.
- Nested elements are **not deeply copied**
- Nested references still point to the same memory

so for nested inside :
-NOT copied deeply, just referenced.
-Even though you changed copy, original changed too 😬

-Shallow copy = copy the container only
-Deep copy = copy everything inside it too

### 📍 Example

```js id="kz7u0f"
const original = [1, 2, [3, 4]];
const copy = [...original];
console.log(original, copy);
copy[2][0] = 9;
console.log(original, copy);
```

[3, 4] is a nested array
Changing it in copy will also affect original 😬
