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
