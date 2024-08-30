// array

const myArr = [0, 1, 2, 3, 4, 5, 6];
const myHeros = ["Iron man", "Loki", "GojoSatoru", "Eren", "Toji"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[0]);

//Array Methods

// myArr.push(7);
// myArr.pop()  last value is remove from array
// console.log(myArr.indexOf(1));
// console.log(myArr);
// const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);

//Slice, splice

console.log("A", myArr);
const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C", myArr);
console.log(myn2);
