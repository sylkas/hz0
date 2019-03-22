//2)	Write a guessing game where the user has to guess a secret number. After every guess
// the program tells the user whether their number was too large or too small. At the end 
// the number of tries needed should be printed. It counts only as one try if they input 
// the same number multiple times consecutively.

// const tools = require('./tools');

// const g = new tools.RangePicker(1,10);
// console.log(g.getRange());

class Randomizer{
    constructor(){
        this.numberToGuess = null;
    }
    
    getNumber(){
        return this.numberToGuess;
    }

    getNumberFromRange(min,max){
        this.numberToGuess = Math.floor(Math.random() * (max - min + 1)) + min;
        return this.numberToGuess;
    }

    getNNumbersInRange(min,max,n){

    }
    
    
}

class game{
    constructor(rangeStart=1, rangeStop=100){
        this.rangeStart = rangeStart;
        this.rangeStop = rangeStop;
        this.randomizer = new Randomizer();
        this.guessNumber = null;
        this.counter = 0;
        this.result = {
            "status": false,
            "info": ""
        }
    }
    getNumber(){
        return this.guessNumber;
    }
    getNumberFromRange(){
        this. guessNumber = this.randomizer.getNumberFromRange(this.rangeStart, this.rangeStop);
    }
    guessNumberFromRange(){
        this.counter++;

        let n = this.randomizer.getNumberFromRange(this.rangeStart, this.rangeStop);

        if (n === this.guessNumber) {
            this.result.status = true;
            this.result.info = `You guess the number! in ${this.counter} try`;
            return this.result;
        }else if(n < this.guessNumber){
            this.rangeStart = n;
            this.result.status = false;
            this.result.info = 'za mało';
            return this.result;
        }else if(n > this.guessNumber){
            this.rangeStop = n;
            this.result.status = false;
            this.result.info = `za dużo`;
            return this.result;
        }else{
            return 'nie tym razem';
        }
    }
}

let s = new game(1,10);
s.getNumberFromRange();
console.log(s.getNumber());


let res = s.guessNumberFromRange();
console.log(res.status);
while(res.status !== true){
    res = s.guessNumberFromRange();
    console.log(res.status);
}
console.log(res);
