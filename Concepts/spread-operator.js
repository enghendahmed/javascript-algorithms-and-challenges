/* spread operator :

- Use Cases :
      1- Expand an array into individual elements separated by coma
      2- pass arguments into functions ( pass multiple elements into fn).
      3-Shallow Copy Array. 
      4-Merge two Arrays.  

-Difference between Destructuring Arrays and Spread Operator. 

- spread operator works on iterables (  Arrays , String ,maps , sets ), iterables are NOT Objects.
*/

/* in "shallow copy array " 
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

*/

"use strict";
const restaurant = {
  resName: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//first use case of spread operator , when we want to expand an array into individual elements separated by coma

//old way (Bad way) before spread operator
const arr = [3, 4, 5];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); // [1,2,3,4,5]

// Good way Using Spread Operator
const GoodNewArr = [1, 2, ...arr];
console.log(GoodNewArr); // [1,2,3,4,5]
// second use case : when we pass arguments into functions ( pass multiple elements into fn).

// we use spread operator when we need an array as individual elements to pass it into a function
console.log(...GoodNewArr); // 1 2 3 4 5
// it is as same as it
console.log(1, 2, 3, 4, 5); // 1 2 3 4 5

// creating a new food  menu
const newMenu = [...restaurant.mainMenu, "Salad"];
console.log(newMenu);

// difference between Destructuring and spread operator because they are similar because both get elements out from the array .
const numbers = [10, 20, 30, 40];
// Destructuring
const [a, b, c, d] = numbers;
console.log(a, b, c, d);
// spread operator
console.log(...numbers);
// the Big difference is that the spread operator takes all the elements out from the array and Does Not create new variables .
// we use spread operator also in places we need values separated by commas (like inside an array we need to spread another array )

// Two important Use Cases of the spread operator
// 1- Create Shallow Copies of arrays
const newCopiedMainMenuArray = [...restaurant.mainMenu];
console.log(newCopiedMainMenuArray, restaurant.mainMenu);

// 2- merge two arrays together (join two Arrays)
const mergedStarterAndMainMenuArrays = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
];
console.log(mergedStarterAndMainMenuArrays);

// Spread Operator works on iterables (string , array , map , set ) But NOT Objects
// string example using spread operator to Expand elements separated by coms
const str = "Hend";
const nameLetters = ["Eng.", ...str, "A", "h", "m", "e", "d"];
console.log(...nameLetters);
