const CustomError = require("../extensions/custom-error");

const chainMaker = {
  array:[],

  getLength() {
    return this.array.length;
  },
  addLink(value) {
    this.array.push(value);
    return this;
  },
  removeLink(position) {
    if(Number.isInteger(position)){
      if(position < 1 || position > this.array.length){
        this.array = [];
        throw new Error();
      }
      else{
        this.array.splice(position - 1, 1);
      }
    }
    else{
      let removeIndex = this.array.indexOf(position);
      if(removeIndex == -1){
        this.array = [];
        throw new Error();
      }
      else{
       this.array.splice(removeIndex, 1);
      }
    }
    return this;
  },
  reverseChain() {
    this.array.reverse();
   return this;
  },
  finishChain() {
    let str = '';
    for(let i = 0; i < this.array.length-1; i++){
      str += `( ${this.array[i]} )~~`;
    }
    str += `( ${this.array[this.array.length-1]} )`;
    this.array = [];
    return str;
  }
};

module.exports = chainMaker;
