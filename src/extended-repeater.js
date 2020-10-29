const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

let string = '';

let repeatTimes = options.repeatTimes;  
let separator = options.separator;
let addition = options.addition ;
let additionRepeatTimes = options.additionRepeatTimes;
let additionSeparator = options.additionSeparator;

if (additionRepeatTimes == undefined) {
  additionRepeatTimes = 1;
}

if (repeatTimes == undefined) {
  repeatTimes = 1;
}

if (separator == undefined) {
  separator = '+';
}

if (additionSeparator == undefined) {
  additionSeparator = '';
} else if (additionSeparator==null) {
  additionSeparator = 'null';
}

 addition = addition == null && options.additionRepeatTimes != undefined?'null': addition == undefined?'':addition.toString();

 str = str == null?'null':str.toString();

for(let i = 0; i < repeatTimes; i++){
  string += str;
  for(let j = 0; j < additionRepeatTimes ; j++){
    string += addition;
    if(additionRepeatTimes>1 && j<additionRepeatTimes-1){
      string += additionSeparator;
    }
  }
 if(repeatTimes>1 && i<repeatTimes-1){
    string += separator;
  } 
}
return string;
};