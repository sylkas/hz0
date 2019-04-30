
module.exports = class Bouncing{
    constructor(startX, startY, board){
        this.startX = startX;
        this.startY = startY;
        this.currX = startX;
        this.currY = startY;
        this.board = board;
        this.vectorX = -1;
        this.vectorY = 1;
    }

    show(){   
        const b = this.board;
        for (let i =0; i< b.length; i++){
            let line = '';
            for(let j=0; j < b[i].length; j++){
                line += ' ' +b[i][j];
            }
            console.log(line);           
        }
    }

    nextStep(){
        const tempX = this.startX + this.vectorX;
        const tempY = this.startY + this.vectorY;
        if (this.board[tempX][tempY] === 'X') console.log( tempX, tempY, "change direction");
        else console.log( tempX, tempY, "same direction");
    }
}


