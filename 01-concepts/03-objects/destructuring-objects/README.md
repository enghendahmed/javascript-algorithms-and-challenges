# Destructuring Objects :

1-Extract variables from the object
2-what if we want the variables names to be different from the property names.
3-set Default values.
4-set Default values as just an empty Array.
5- mutating Variables while Destructuring objects.
6- Destructuring nested objects.
7- assign different variables names using colon while Destructuring nested object.
8- function take an object as an argument.
9- set default values.

### correct destructuring by real keys:

```js
const { fri, sat } = weekend;
```

### rename while destructuring:

```js
const { fri: weekendBegin, sat: weekendEnd } = weekend;
```

console.log(weekendBegin, weekendEnd);
In JavaScript:

👉 Destructuring works ONLY with existing keys

It does NOT:

rename automatically
guess meaning
create new structure

This pattern:

```js
{
  fri: weekendBegin;
}
```

means:

> > 💡 **Note:** take `fri` and store it in a new variable called `weekendBegin`
> > This is called:
> > 👉 **renaming in destructuring**
>
> > ### ⚠️ Rule
> >
> > Destructuring uses **exact object keys only**  
> > It does NOT create or guess new names automatically
