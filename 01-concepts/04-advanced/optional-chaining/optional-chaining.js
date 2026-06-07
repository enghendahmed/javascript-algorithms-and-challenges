"use strict";

//let's say we want to get the opening hours of restaurant of monday

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

// console.log(restaurant.openingHours.mon); // undefined
// console.log(restaurant.openingHours.mon.open); // error

// checking by if is unreadable and messy code incase of we want to check a lot of properties like fri , also what if we need to check openingHours
if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open); // 11

if (restaurant.openingHours && restaurant.openingHours.fri)
  console.log(restaurant.openingHours.fri.open); // 11

// the previous way of checking using if condition , we may get undefined in case of any property was not found so the solution is optional chaining

// Checking With Optional Chaining
