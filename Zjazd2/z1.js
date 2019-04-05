//1)	Write a program that automatically converts English text to Morse code and vice versa. 

class Morse {
    constructor(){
        this.english = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," "];
        this.morse = [
            ".-",
            "-...",
            "-.-.",
            "-..",
            ".",
            "..-.",
            "--.",
            "....",
            "..",
            ".---",
            "-.-",
            ".-..",
            "--",
            "-.",
            "---",
            ".--.",
            "---.-",
            ".-.",
            "...",
            "-",
            "..-",
            "...-",
            ".--",
            "-..-",
            "-.--",
            "--..",
            " "
        ];
    }

    transLetter(l){
        return this.morse[ this.english.indexOf(l) ];
    }

    transText(txt){
        const inArr = txt.split('');
        const outArr = [];
        for(let i = 0; i < inArr.length; i++){
            outArr.push( this.transLetter(inArr[i]) )        
        }
        return outArr.join('');
    }
}

const text = "sos";

let translator = new Morse;
console.log(translator.transLetter('y'));
console.log(translator.transText(text));

