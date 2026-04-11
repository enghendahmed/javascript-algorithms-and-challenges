## 📦 Object Destructuring Use Cases :

### 1. Basic extraction

- Extract variables from an object

### 2. Renaming variables

- Change variable names using `:`

### 3. Default values

- Set default values for missing properties
- Set default values for arrays (like empty arrays)

### 4. Advanced destructuring

- Mutating existing variables during destructuring
- Nested object destructuring
- Renaming variables in nested objects

### 5. Functions

- Passing objects as function parameters
- Setting default values in function parameters

---

### correct destructuring by real keys:

```js
const { fri, sat } = weekend;
```

### rename while destructuring:

```js
const { fri: weekendBegin, sat: weekendEnd } = weekend;
```

👉 Destructuring works ONLY with existing keys (names of the properties in the object).

It does NOT:

rename automatically<br>
guess meaning<br>
create new structure

This pattern:

```js
{
  fri: weekendBegin;
}
```

means:

> 💡 **Note:** take `fri` and store it in a new variable called `weekendBegin` This is called:
> 👉 **renaming in destructuring**

> ### ⚠️ Rule
>
> Destructuring uses **exact object keys only**  
>  It does NOT create or guess new names automatically
