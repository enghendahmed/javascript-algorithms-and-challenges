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

/*  Destructuring Objects : (to Extract variables from the object)
- the variables names should have the same name of the object properties.
- science in an object the order of elements doesn't matter , we don't need to manually skip elements like we did in the array.because we access the variables inside the object by the property name Not by the index number like in the array .
*/
const { resName, openingHours, categories } = restaurant;
console.log(resName, openingHours, categories);

//Destructuring Objects  is useful when we deal with the result of an API Call , so by destructuring object we can get Data from another  web application like weather Data or Data about movies , these Data is usually comes in the form of objects.Destructuring allows us to write less code, this is used in modern application .

// what if we want the variables names to be different from the property names
// we need to reference it to the object property , so we will use a colon (:)
// this is very useful when dealing with third party data like that .
const { resName: name, openingHours: hours, categories: types } = restaurant;
console.log(name, hours, types);

// one of the useful use case of destructuring object is when we set Default values for the case that we are trying to read a propert that does not exist on the object to avoid get Undefined
// Set Default values
const {
  menuSalad = ["green salad", "Garlic"],
  mainMenu: mainDishes,
  starterMenu: apitysers,
} = restaurant;

console.log(menuSalad, mainDishes, apitysers);

// we can set a default value as just an Empty Array
const { sideDishes = [], mainMenu = [] } = restaurant;
console.log(sideDishes, mainMenu);
