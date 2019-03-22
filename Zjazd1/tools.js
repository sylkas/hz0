class NumberChecker{
    isPrimal(n){
        let result = true;
        if(n > 1) {
            for(let i=2; i < n; i++) {
                if(n % i === 0) result = false;
            }
        } else {
            result = false;
        }
        return result;
        
    }

    isOdd(n){
        //checks if n is odd number
        // yes => true
        // no => false
    }
}

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

class RangePicker{
    constructor(rangeStart=1, rangeStop=100){
        this.rangeStart = rangeStart;
        this.rangeStop = rangeStop;
        this.randomizer = new Randomizer(); 
    }

    getRange(){
        var firstValue = this.randomizer.getNumberFromRange(this.rangeStart, this.rangeStop);
        var secondValue = this.randomizer.getNumberFromRange(this.rangeStart, this.rangeStop);
        if (firstValue > secondValue) {
            secondValue = [firstValue, firstValue = secondValue][0];
        }

        return {
            rangeStart: firstValue,
            rangeStop: secondValue
        };
    }

    moveMaxByN(n){
        // check if valid
        this.rangeStop += n;  
    }

    moveMinByN(n){
        // check if valid
        this.rangeStart += n;  
    }
}



module.exports = { NumberChecker, Randomizer, RangePicker };