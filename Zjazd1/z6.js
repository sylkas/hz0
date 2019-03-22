// 6)	Write function that translates a text to Pig Latin and back. English is translated to Pig Latin
// by taking the first letter of every word, moving it to the end of the word and adding ‘ay’. 
// “The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.

const inputData= "The quick brown fox";




function translateText(input){
    let ar = [];
    let res;
    ar = input.split(" ");
    for(let i = 0; i < ar.length; i++){
       tmp = ar[i].substr(0,1);
       ar[i] = ar[i].substr(1) + ar[i].substr(0, 1) + "ay";
    }
    res = ar.join(" ");
    res = res.substr(0, 1).toUpperCase() + res.substr(1).toLowerCase();
    return res;
}

console.log(translateText(inputData));