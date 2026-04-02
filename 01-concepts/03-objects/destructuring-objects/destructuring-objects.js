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

//--------------------------------------------------------------

// what if we want the variables names to be different from the property names
// we need to reference it to the object property , so we will use a colon (:)
// this is very useful when dealing with third party data like that .
const {
  resName: restaurantName,
  openingHours: hours,
  categories: types,
} = restaurant;
console.log(restaurantName, hours, types);

//--------------------------------------------------------------

// one of the useful use case of destructuring object is when we set Default values for the case that we are trying to read a propert that does not exist on the object to avoid get Undefined
// Set Default values to avoid Undefined
const {
  menuSalad = ["green salad", "Garlic"],
  mainMenu: mainDishes,
  starterMenu: apitysers,
} = restaurant;

console.log(menuSalad, mainDishes, apitysers);

// we can set a default value as just an Empty Array to avoid Undefined
const { sideDishes = [], mainMenu = [] } = restaurant;
console.log(sideDishes, mainMenu);

// Set Default values is useful in case of the Data does not exist or the data is Hard Coded in our application like this in our object , But in Real World we get Data from somewhere else like an API . and we might not always know how exactly the data looks like . so it's useful to set Default values like this .

//--------------------------------------------------------------

// mutating Variables while Destructuring objects (it is like switching (swapping) variables using Destrucuring arrays )

// mutating Variables , mutate means change.
let jobTitle = "front-end web developer";
let candidateAge = 25;
const candidate = { jobTitle: "Software Engineer", candidateAge: "40" };
console.log(jobTitle, candidateAge); // front-end web developer 25

/*
{jobTitle , candidateAge} = candidate;
console.log(jobTitle,candidateAge); // SyntaxError: Unexpected token '='
*/
// to solve this  SyntaxError: Unexpected token '=' , we will wrap all the code line into a parenthesis ( )
({ jobTitle, candidateAge } = candidate);
console.log(jobTitle, candidateAge); // Software Engineer 40
// so it works , we overwrite the two variables which means changed their values , in order to do that we had to wrap the line of code of destructuring assignment into parenthesis ()

//--------------------------------------------------------------

// nested object
// we will create two variables open and close, these should contain open and close hours for friday
// friday is an object inside openingHours which is another object (object inside object) which inside restaurant object. (nested object)

// let's retrieve friday

//const { fri } = openingHours;

// we use the same name of the property to refer to it so js understand that we mean fri , so we should use name variable the same as property variable when we make destructuring object .
// because we restore openingHours object inside a variable called openingHours so we didn't need to access it like restaurant.openingHours using dot Notation
// dot Notation : objectName(parent or outer).arrayName(inner) - objectName(parent).objectName(inner)

//console.log(fri); // { open: 11, close: 23 }

/*
let open, close;
({ open, close } = fri);
// if i didn't store it in fri variable , i should use dot Notation like
console.log(open, close); // 11 23


*/

// nested object syntax
/*
const {
  fri: { open, close },
} = openingHours;
console.log(open, close); // 11 23
*/

// i shoudn't memorize that but i should back here to use this confusing syntax when i need nested destructuring object.

// we can assign different variables names using colon (:)

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); // 11 23

// -------------------------------------------------------

// function take an object as an argument
// pass object to a function as an argument , and the function will immediately destruct this object.
// many times in javascript we have functions with a lot of parameters then it can be hard to know the order of the parameters for someone that is using that function , as we say before in object the order does not matter like in array which is index based . so instead of defining the parameters manually in the function we just pass an object into the function as an argument , then function will immediately destruct this object.

// set default values
