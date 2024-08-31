const marvel_heros = ["Ironman", "Loki", "Spiderman"];
const dc_heros = ["Superman", "Wonderwomen", "Batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

console.log(marvel_heros.concat(dc_heros)); //concat method has restriction we pass only one value and not mostly used in real time coding

const all_new_heros = [...marvel_heros, ...dc_heros]; //Spread operator this method is mostly used in real time coding
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [7, 8]]];
const real_array = another_array.flat(Infinity); //We also pass values in it so how depth we go
console.log(real_array);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Coffee"));

let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;

console.log(Array.of(score1, score2, score3, score4));
