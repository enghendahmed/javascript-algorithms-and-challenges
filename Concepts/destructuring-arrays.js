"use strict";
// Run locally: node destructuring-arrays.js

// destructuring is an ES6 Feature , for arrays we use destructuring to retrieve elements from the array and store them into variables .
// old way Before Destructuring
const fruits = ["Apple", "Mango", "Orange"];
const firstFruit = fruits[0];
const secondFruit = fruits[1];
const thirdFruit = fruits[2];
console.log(firstFruit, secondFruit, thirdFruit); // Apple  Mango  Orange

// But After Es6 , By using Destructuring , we can declare all variables at the same time in one line , also the original array still the same not destroyed .
const vegetables = ["cucumber", "tomato", "carrot"];
const [firstVegetable, secondVegetable, thirdVegetable] = vegetables;
console.log(firstVegetable, secondVegetable, thirdVegetable); // cucumber  tomato  carrot

// extract data from array inside an object using dot notation and destructuring of array
const userData = {
  name: "Hend Ahmed",
  job: "Software Engineer",
  favColors: ["pink", "white", "red", "black", "green", "blue"],
};
const [firstColor, secondColor] = userData.favColors;
console.log(firstColor, secondColor); // pink white

// skip elements
const [, , thirdColor] = userData.favColors;
console.log(thirdColor); // red

// use cases of Destructuring
// switch variables before Destructuring
let firstNum = 10;
let secondNum = 50;
const temp = firstNum;
firstNum = secondNum;
secondNum = temp;
console.log(firstNum, secondNum); // 50 10

// switch (swap) variables using Destructuring in just one code line
[firstNum, secondNum] = [secondNum, firstNum];
console.log(firstNum, secondNum); // 10 50

// a function return an array then destructring this array into separated variables
const restaurant = {
  mainDishes: ["rice", "spagetti", "meat", "chicken"],
  sideDishes: ["salad", "bread", "fries", "cheese"],
  order: function (starterIndex, endIndex) {
    return [this.mainDishes[starterIndex], this.sideDishes[endIndex]];
  },
};
console.log(restaurant.mainDishes); // ["rice", "spagetti", "meat", "chicken"]

const [mainFood, sideFood] = restaurant.order(0, 2);
console.log(mainFood, sideFood); //rice frise

// nested destructuring , nested array (array inside array)
const nested = [4, 5, [9, 8]];
const [a, , b] = nested;
console.log(a, b); // 4 [9,8]
// we need to destruct the inside array , destructuring inside destructuring
const [c, , [d, e]] = nested;
console.log(c, d, e); // 4 9 8

// set default values for the variables when we are extracting them , it is useful when we don't know the length of the array , we use this in real world application
const [i, j, k] = [22, 28];
console.log(i, j, k); // 22 28 undefined

const [m = 1, n = 1, o = 1] = [22, 28];
console.log(m, n, o); // 22 28 1
