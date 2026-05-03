
// Numbers array
let numArr = [1,2,3,4,5,6,7];

// Print values
numArr.forEach(val => console.log(val));

// Square using map
let squares = numArr.map(val => val * val);
console.log(squares);

// Filter even numbers
let evens = numArr.filter(val => val % 2 === 0);
console.log(evens);

// Find max using reduce
let max = numArr.reduce((res, curr) => res > curr ? res : curr);
console.log(max);

// String array
let strArr = ["schoolFreeCIty","malakand","Hss"];

strArr.forEach((val, i) => {
    console.log(val.toUpperCase(), i);
});
