"use strict";

//
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

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

for (const item of menu) console.log(item);

// old way before destructuring
/*
for (const item of menu.entries()) {
  //console.log(item);
  console.log(`${item[0] + 1}:  ${item[1]} `);
}

*/

// log it just to see what inside it
//console.log([...menu.entries()]);

// new way Using Destructuring
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1} : ${el}`);
}
