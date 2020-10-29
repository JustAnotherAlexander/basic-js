const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity ) {

if (typeof(sampleActivity)!='string') {
  return false;
}
sampleActivity=sampleActivity.split('');

for (let i=0; i<sampleActivity.length; i++) {
  if ((sampleActivity[i].match(/[a-zA-Z]/))!=null) {
    return false;
  }
}
if (sampleActivity.indexOf('.')!=-1) {
  let index=sampleActivity.indexOf('.');
  sampleActivity.splice(index,1);
}
if (+sampleActivity > MODERN_ACTIVITY || isNaN(+sampleActivity) || +sampleActivity<=0) {
  return false;
}
sampleActivity.join('');
 return Math.floor(HALF_LIFE_PERIOD / 0.693 * Math.log(sampleActivity/MODERN_ACTIVITY) * -1 )+1;

};
