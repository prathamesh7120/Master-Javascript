
// array

const myArray = [0, 1 ,2 ,3 , 4, 5];

const heroes = ["batman","superman","dr.stranger","IronMan","hulk"]

// console.log(myArray);


const myArray2 = new Array(1,2,3,4);

// console.log(myArray[1]);

// Array Methods

// myArray.push(6);
// myArray.push(7);
// myArray.pop();
// myArray.unshift(0);
// myArray.shift();

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(3));

const newArr = myArray.join();

// console.log(newArr);
// console.log(typeof myArray);


// slice, splice


console.log("A", myArray);

const myn1 = myArray.slice(1,3);

console.log(myn1);


console.log("B", myArray);


const myn2 = myArray.splice(1,3);
console.log("C", myArray);
console.log(myn2);

