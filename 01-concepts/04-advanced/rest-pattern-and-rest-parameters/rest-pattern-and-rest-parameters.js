"use strict";
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

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const [x, , y, ...othersNumbers, z]= array;
console.log(x, y, ...othersNumbers,z);
