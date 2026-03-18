// Run: node destructuring-arrays.js
// destructuring is an ES6 Feature , for arrays we use destructuring to retrieve elements from the array and store them into variables .
// old way Before Destructuring
const fruits = ["Apple", "Mango", "Orange"];
const firstFruit = fruits[0];
const secondFruit = fruits[1];
const thirdFruit = fruits[2];
console.log(firstFruit, secondFruit, thirdFruit);

// But After Es6 , By using Destructuring , we can declare all variables at the same time in one line , also the original array still the same not destroyed .
const vegetables = ["cucumber", "tomato", "carrot"];
const [firstVegetable, secondVegetable, thirdVegetable] = vegetables;
console.log(firstVegetable, secondVegetable, thirdVegetable);

// use cases of Destructuring
