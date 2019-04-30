const Bouncing = require('./bouncing');
const board = require('./ExamInput');



 const newGame = new Bouncing(1,1, board.board);
 newGame.show();
 newGame.nextStep();