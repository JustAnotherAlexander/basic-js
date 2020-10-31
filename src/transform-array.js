module.exports = function transform(arr) {
  let mods = ['--discard-next','--discard-prev','--double-next','--double-prev'];
  let array = arr.slice(0, arr.length);
  let result = [];
  
  if(!Array.isArray(array))   {
       throw new Error();    
      }
  if(array.length == 0)       { 
      return [];                     
    }

  for(let i = 0 ; i < array.length ; i++ ){
      switch (array[i]) {
          case '--discard-next':
              if(!(i == array.length-1 || mods.includes(array[i+1]))) { 
                 array[i+1] = null; 
                }
              break;
          case '--discard-prev':
              if(!(i == 0 || mods.includes(array[i-1])))           {
                  array[i-1] = null; 
                }
              break;

          case '--double-next':
              if(!(i == array.length-1 || mods.includes(array[i+1]))) { 
                 array.splice(i, 1, array[i + 1]); 
                 }
              break;

          case '--double-prev':
              if(!(i == 0 || mods.includes(array[i-1]))) {
                   array.splice(i, 1, array[i - 1]);
                  } else {
                       array.splice(i, 1);           
                       i--;  
                      }
              break;

          default: break;
      }
  }

  for(let i = 0 ; i < array.length ; i++ ){
     if(array[i] != '--discard-next' && array[i] != '--discard-prev' && 
        array[i] != '--double-next' && array[i] != '--double-prev' && array[i] != null)
      {
          result.push(array[i]);
      }
  }
  return result;
};