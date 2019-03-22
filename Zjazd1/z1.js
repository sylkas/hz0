//1)	Write a program that prints all prime numbers in given range. Take sub from 1-100.

const tools = require('./tools');

// let nc = new  tools.NumberChecker;
// let res = [];
// for(let i = 1; i < 101; i++) {
//     if(nc.isPrimal(i)) res.push( i );  
// }
// console.log(res.join(' '));


// let ran = new tools.Randomizer;
// console.log(ran.getNumberFromRange(1,6));
// console.log(ran.getNumber());

let ran = new tools.RangePicker;
console.log(ran.getRange());
