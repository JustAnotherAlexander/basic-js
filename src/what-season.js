const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  console.log('date: ' + date);
  if (date == undefined) {
    return 'Unable to determine the time of year!';
  }

console.log('time: ' + date.getTime);

  if (date.getMonth == undefined || date.getTime() == undefined) {
    throw new Error();
  }

  let month = date.getMonth();

  if(month >1 && month < 5){
    return 'spring';
  }
  if(month >4 && month < 8){
    return 'summer';
  }
  if(month >7 && month < 11){
    return 'autumn';
  }
  return 'winter';

};
