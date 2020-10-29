const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  if( !Array.isArray(members)){
		return false;
	}
let arr = [];

for (let i=0; i<members.length; i++) {
  members[i].split('');
  for (let j=0; j<members[i].length; j++) {
    if (members[i][j]==' ' && members[i][j+1].match(/[a-zA-Z]/)) {
      arr.push(members[i][j+1].toUpperCase());
      break;
    } else if (members[i][0].match(/[a-zA-Z]/)) {
      arr.push(members[i][0].toUpperCase());
      break;
    }
  }
}
return arr.sort().join('');
};
