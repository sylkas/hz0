// 1.

class HuntingGame {
    constructor(step, board){
        this.step = step;
        this.board = board;
        this.road = "";
        this.x = null;
        this.y = null;
    }

    getPosition(){
        this.road += "treasure";    
        console.log(this.road);
        
    }

    decode(n){
        let str = n.toString();
        return{x: str.substr(0,1), y: str.substr(1,1)}    
    }

    nextStep(step){       
        const res = this.decode(step);   
        this.x = res.x;
        this.y = res.y; 
        this.road += this.step + " -> " ;
    };

    run(){
        this.nextStep(this.step);

        while(this.step !== this.board[this.x - 1][this.y - 1]) {
            this.step =  this.board[this.x - 1][this.y - 1];
            this.nextStep(this.step);                  
        }
        this.getPosition();
        
    }
}

const newBoard =  [ [34, 21, 32, 41, 25],
                    [14, 42, 43, 14, 31],
                    [54, 45, 52, 42, 23],
                    [33, 15, 51, 31, 35],
                    [21, 52, 33, 13, 23] ] ;

const newGame = new HuntingGame(11, newBoard);
newGame.run();

