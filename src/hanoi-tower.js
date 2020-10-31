const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns;
  let seconds = 0;
  if(disksNumber == 2){  turns = 3; ; }
  else{
    turns = 7; ;
    for(let i = 3; i < disksNumber; i++){
      turns = turns*2 + 1;
    }
  }
  seconds = (turns * 3600 / turnsSpeed);
  if(seconds % 1){
    seconds += "";
    seconds = Number.parseInt(seconds.slice(0,  seconds.indexOf('.') + 1));
  }
	return {turns: turns, seconds: seconds};
};
