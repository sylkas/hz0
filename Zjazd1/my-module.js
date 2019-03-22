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
        
        
        //checks if n is primal number
        // yes => true
        // no => false
    }

    isOdd(n){
        //checks if n is odd number
        // yes => true
        // no => false
    }
}

//export { NumberChecker };
module.exports = [ NumberChecker ];