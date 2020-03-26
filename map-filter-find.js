const numbers = [2, 3, 4, 6, 8, 9];
// const output = [];
// for(let i = 0; i<numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);
// const result = numbers.map((element) => element * element);
// console.log(result);
const filting = numbers.filter(x => x > 8);
console.log (filting);
const only = numbers.find(x=> x > 4);
console.log(only);
