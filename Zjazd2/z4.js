// 4)	Given two strings, write a program that outputs the shortest sequence of character insertions and 
// deletions that turn one string into the other. 


class StringTransform{

  insertAtPos(s1, s2, index){
    if (index > 0)
    return s1.substring(0, index) + s2[index] + s1.substring(index, s1.length);
    else return s2[index] + s1;
  }

  deleteAtPos(str, index){
    return str.slice(0, index) + str.slice(index + 1, str.length);
  }

  findFirstDiff(s1, s2){
    let isNotDiff = true;
    let i = -1;
    while (isNotDiff){
      i++;
      if (s1[i] !== s2[i]){
        isNotDiff = false;       
      }
    }
    return i;
  }

  transformString(s1, s2){
    let isDiff = true;
    let index;
    let res = [];
    while (isDiff){
      index = this.findFirstDiff(s1, s2); 
      res.push(s1);    
      s1 = this.insertAtPos(s1, s2, index);
      if (index > s2.length - 1) {
        s1 = s1.substring(0, s2.length);
        res.push(s1);
      }
      if (s1 === s2){
        isDiff = false;
      } else {
        isDiff = true;
      }
    }
    return res;
  }

}


let st = new StringTransform;


console.log(st.transformString('free', 'ferie'));

console.log(st.transformString('krak', 'koral'));
