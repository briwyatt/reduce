// console.log("hello .reduce() playground!");
// reduce takes two arguments an accumulator & current value

let vals = [5,4,1,2,9];
let sum = 0;
// add all elements in the array without reduce function 
for (let i =0; i< vals.length; i++){
    sum += vals[i];
}
console.log("sum", sum);

// shortened version of above function
let answer = vals.reduce((acc, val) => acc + val);
console.log("answer", answer);

// if the current value is larger than the accumulator, return the current value, else return accumulator 
let biggestValue = vals.reduce((a, b) => b > a ? b : a);
console.log("biggestValue", biggestValue);

// you can also test another number against all values in the array, return biggest number in array if its bigger than 20 or else return 20
let testInitialAccumulator = vals.reduce((a, b) => b > a ? b : a, 20);
console.log("testInitialAccumulator", testInitialAccumulator);


