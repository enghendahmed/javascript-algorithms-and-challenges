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
let temp = firstNum;
firstNum = secondNum;
secondNum = temp;
console.log(firstNum, secondNum);

// switch variables using Destructuring in just one code line
[firstNum, secondNum] = [secondNum, firstNum];
console.log(firstNum, secondNum);
