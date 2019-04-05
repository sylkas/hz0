// 2)	Write a program that finds the longest palindromic substring of a given string. ‘karakis’, ‘baerren’,
// ‘kajak’, ‘inni’.
// 3)	Given two strings, write a program that efficiently finds the longest common subsequence. ‘karol rolki’

class StringTransform {

    reverse(str){
        return str.split("").reduce((prev, curr)=> curr + prev, ''); 
    }

    isPalindrom(str){
        if(str === this.reverse(str)) return true;
        else return false;
    }

    findPalindrom(str){
        let res = false;
        let lstr = str.length;
        let l  = str.length;

        if(this.isPalindrom(str)) { 
            return str;
        } else {
            
            while(l>2){
                l--;               
                for(let i = 0; i <= lstr -l; i++){
                    if (this.isPalindrom(str.substr(i, l))) return str.substr(i, l);
                }
            }
        }            
        return  res;
    }

    findDouble(str1, str2){       
        let lstr = str1.length;
        let l  = str1.length;
        while(l>2){
            l--;               
            for(let i = 0; i <= lstr -l; i++){
                let b = str1.substr(i, l);
                if (str2.indexOf(b) >= 0) return b;
            }
        }
    }

    findDoubleString(str){
        let res = false;
        let arr = str.split(' ');

        if (arr[0].length > arr[1].length){
            res = this.findDouble(arr[1], arr[0]);
        } else {
            res = this.findDouble(arr[0], arr[1]);
        }                  
        return  res;
    }
    
}

let trans = new StringTransform;

const inArr = ["karakis", "baerren", "kajak", "winni"];
for (let i = 0; i < inArr.length; i++){
    console.log(trans.findPalindrom(inArr[i]));
}

// const example = "karol rolki";
// //const example = "batog zatory";
// console.log(trans.findDoubleString(example));