//4)	Write a class that prints the list of the first n Fibonacci numbers. The first two Fibonacci
// numbers are 1 and 1. The n+1-st Fibonacci number can be computed by adding the n-th and 
// the n-1-th Fibonacci number. The first few are therefore 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.

class Fibonacci {
    constructor() {
        this.first = 0;
        this.second = 1;
        this.fibonacci = [];
    }

    getFiboSequence(n){
        this.fibonacci.push(this.first);
        this.fibonacci.push(this.second);
        for(let i = 2; i < n; i++){
            this.fibonacci.push(this.fibonacci[i-1] + this.fibonacci[i-2]);
        }
        return this.fibonacci;
    }

    getNth(n){
        let res;
        this.getFiboSequence(n);
        res = this.fibonacci[n-1];
        return res;
    }

    getData(){
        this.first
        return [
            this.first,
            this.second,
            this.fibonacci

        ]
    }

}

let fb = new Fibonacci();
//let res = fb.getFiboSequence(20);
//res.map(p => console.log(p));

console.log(fb.getNth(18));