// Spread Operator

// Add the missing numbers
const arr1 = [1, 2, 3];
const arr2 = [7, 8, 9];

// normal way - create a new array with missing numbers
const arr3 = [4, 5, 6];

console.log(arr1.concat(arr2));
console.log(arr1.concat(arr3, arr2));

// Using spread operator
const numbers = [0, ...arr1, 4, 5, 6, ...arr2, 10];

console.log(numbers);
