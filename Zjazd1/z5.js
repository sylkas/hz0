//5)	Write a code that takes a number and returns a list of its digits. 
//So for 2342 it should return [2,3,4,2]. Has to work for both number and string.

//const inputData= 2345;
//const inputData= "dupa jasia";
const inputData= "4343353";




function inputToList(input){
    let res;
    let r;
    // if(typeof(input) === 'number') r = input.toString();
    // else r = input;
    r = (typeof(input) === 'number') ? input.toString() : r = input;
    //res = input.split('');
    return  r.split('');;
}

console.log(inputToList(inputData));