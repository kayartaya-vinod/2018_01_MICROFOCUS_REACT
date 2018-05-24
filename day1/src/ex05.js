let nums = [2, 3, 4, 109, 394, 844, 22, 384, 55, 67, 338, 283, 485];

// print all elements of nums
// nums.forEach(n => console.log(n));

// find the element's index
let index = nums.findIndex(n => n == 338);
console.log('index of 55 is', index);

// get all even numbers (subset of a collection)
let evenNums = nums.filter(n => n % 2 == 0);
console.log('Even numbers: ', evenNums);

// get all numbers < 100
console.log(nums.filter(n => n < 100));

let squares = nums.map(n => n * n);
console.log(squares);

let names = ['vinod', 'shyam', 'john', 'jane', 'smith'];
console.log(names.map(n => n.substring(0, 2)));
console.log(names.map(n => n.toUpperCase()));

nums = [10, 20, 30, 40];
let total = nums.reduce((accmltr, currVal) => accmltr + currVal);
console.log('total is', total);

let result = names.map(n => n.substring(0, 2))
    .reduce((a, b) => a + b);
console.log(result);