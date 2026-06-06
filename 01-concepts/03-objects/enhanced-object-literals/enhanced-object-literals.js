"use strict";

// 1. Es6 enhancement : just write the outside object name as it is a property name
//we have a separated object ouside the restaurant object But we need openingHours inside restaurant object
// we change this object name from openingHours into hours
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const hours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
  [`day-${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  resName: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  //openingHours: openingHours,
  // (the enhancement is just write it once because the property name is the same object name ) if we change the object name , we must change the property name

  // ES6  enhanced Object literals
  hours,
};
console.log(restaurant);

// 2. Es6 enhancement : writting methods

// 3. Es6 enhancement : Compute the property names instead of having to write them out manually and literally
