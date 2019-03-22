//3)	Write a function that rotates a list by k elements. For example [1,2,3,4,5,6] rotated by two
// becomes [3,4,5,6,1,2]. Try solving this without creating a copy of the list.



const list = [1,2,3,4,5,6];

function rotateRightByN(inputList, n){
    for(let i = 0; i < n; i++){
        let tmp = inputList.pop();
        inputList.unshift(tmp);    
    }
    return inputList;
}

function rotateLeftByN(inputList, n){
    for(let i = 0; i < n; i++){
        let tmp = inputList.shift();
        inputList.push(tmp);    
    }
    return inputList;
}

console.log(rotateRightByN(list,4));
console.log(rotateLeftByN(list,4));