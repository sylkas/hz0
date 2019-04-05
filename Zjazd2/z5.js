//5)	Write a code that multiplies two matrices together. Dimension validation required.


class Matrix {
    constructor(){
        this.m1 = [
            [1, 0],
            [3, 5]
        ];
    }

    isItMatrix(m){
        let res = true;
        let count = m.map(k => k.length)
                    .filter((value, index, self) => self.indexOf(value) === index);
                if(count.length > 1) res = false;
        return res;
    }

    isMultiplicationPosiible(m1, m2){

        let res = true;
        //if( !(this.isItMatrix(m1) || this.isItMatrix(m2)) )  res = false;
        if ( this.isItMatrix(m1) && this.isItMatrix(m2) ) {
            if( m1[0].length !== m2.length ) res = false;
        } else {
            res = false;
        }    
        return res;
    }

    multiply(m1, m2) {
        var result = [];
        if(this.isMultiplicationPosiible(m1, m2)) {
            for (let i = 0; i < m1.length; i++) {
                result[i] = [];
                for (let j = 0; j < m2[0].length; j++) {
                  let sum = 0;
                  for (let k = 0; k < m1[0].length; k++) {
                    sum += m1[i][k] * m2[k][j];
                  }
                  result[i][j] = sum;
                }
            }
            return result;
        } else {
            return false;
        }

 
        
    }

    showMatrix(m){
        if(m !== false) {
            for (let i =0; i< m.length; i++){
                let line = '';
                for(let j=0; j < m[i].length; j++){
                    line += ' ' +m[i][j];
                }
                console.log(line);           
            }
        } else {
            console.log("nie da się");
        }

    }
}


const m1 = [
    [1, 0, 1],
    [3, 5, 1],
    [1, 2, 1]
];

const m2 = [
    [1, 0, 1],
    [1, 0, 1],
    [3, 5, 0]
];

const m3 = [
    [1, 0, 1],
    [3, 5, 4]
];

const m4 = [
    [1, 0],
    [0, 1],
    [1, 0]
];

let mm = new Matrix;

//console.log(mm.isItMatrix(m4));
//console.log(mm.isMultiplicationPosiible(m3, m4));
mm.showMatrix(mm.multiply(m1, m2));
mm.showMatrix(mm.multiply(m3, m4 ));
