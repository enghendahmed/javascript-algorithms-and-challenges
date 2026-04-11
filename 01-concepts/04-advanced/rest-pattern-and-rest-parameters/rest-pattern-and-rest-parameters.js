"use strict";

const restaurant = {
  resName: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thurs: {
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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your pasta with three ${ing1} , ${ing2} , ${ing3}`); //here is your pasta with three milk , salt , pasta
  },
};

// spread operator because on the right side of the = assignment oprator
const nums = [5, 6, 7, 8, 9, 10];
const mixNums = [1, 2, 3, 4, ...nums];
console.log(mixNums); // [ 1, 2, 3, 4,5, 6, 7, 8, 9,10]

// spread operator in the middle of the array and ... before array or array name
const mixNumsAgain = [0, ...mixNums, ...[11, 12]];
console.log(mixNumsAgain); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(...mixNumsAgain); // 0 1 2 3 4 5 6 7 8 9 10 11 12

// rest pattern because it is on the left side
const [a, b, ...others] = mixNumsAgain;
console.log(others); // [2, 3,4,5,6,7, 8,9,10, 11,12]

// objects

const [foodItem1, , foodItem3, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(foodItem1, foodItem3, otherFood); // Pizza Risotto [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ]
const { thurs, ...weekend } = { ...restaurant.openingHours };
console.log(weekend);

// function
// Rest parameters allow a function to accept any number of arguments dynamically, instead of relying on a fixed parameter count.

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 5); // 7
add(3, 8, 9); // 20
add(9, 4, 6, 3, 8, 9, 2); // 41
