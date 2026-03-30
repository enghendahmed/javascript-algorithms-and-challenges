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

// creating a new food menu
