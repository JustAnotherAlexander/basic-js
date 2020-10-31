const CustomError = require("../extensions/custom-error");

const basic_array = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

const array = [
           ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
           ["B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A"],
           ["C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B"],
           ["D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C"],
           ["E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D"],
           ["F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E"],
           ["G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F"],
           ["H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G"],
           ["I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H"],
           ["J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I"],
           ["K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J"],
           ["L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K"],
           ["M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L"],
           ["N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M"],
           ["O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N"],
           ["P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"],
           ["Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P"],
           ["R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q"],
           ["S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R"],
           ["T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S"],
           ["U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T"],
           ["V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U"],
           ["W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V"],
           ["X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W"],
           ["Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X"],
           ["Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y"],
]

class VigenereCipheringMachine {


  encrypt(message, key) {



    if(message == undefined || key == undefined){
      throw new Error();
    }

    let encryptor = [];
    let j=0;
    message = message.toUpperCase().split('');
    key = key.toUpperCase().split('');

    for (let i=0; i<message.length; i++) {
      if (j==key.length) {
        j=0;
      }
      encryptor.push(key[j]);
      j++;
    }

    let encryptedMessage = [];

    for (let i=0; i<=message.length; i++) {
      if (message.length==0) {
        break;
      }
i=0;
      if (message[i]==" ") {
        encryptedMessage.push(' ');
        message.splice(i,1);
        continue;
      } 

      if (message[i]==".") {
        encryptedMessage.push(".");
        message.splice(i,1);
        encryptor.splice(i,1);
        continue;
      }

      if (message[0]=="!") {
        encryptedMessage.push("!");
        message.splice(i,1);
        encryptor.splice(i,1);
        continue;
      }

      if (message[i]==':') {
        encryptedMessage.push(":");
        message.splice(i,1);
        encryptor.splice(i,1);
        continue;
      }

      if (message[i]==')') {
        encryptedMessage.push(")");
        message.splice(i,1);
        encryptor.splice(i,1);
        continue;
      }

      if (message[i]=='(') {
        encryptedMessage.push("(");
        message.splice(i,1);
        encryptor.splice(i,1);
        continue;
      }

      if (message[i]=='1' || message[i]=="2" || message[i]=="3" || message[i]=="4" || message[i]=="." || message[i]==",") {
        encryptedMessage.push(message[i]);
        message.splice(i,1);
        encryptor.splice(i,1);
        continue;
      }

      encryptedMessage.push(array[basic_array.indexOf(encryptor[i])][basic_array.indexOf(message[i])]);
      message.splice(i,1);
      encryptor.splice(i,1);
    }

    return encryptedMessage.join('');
  }    



  decrypt(encryptedMessage, key) {
    if(encryptedMessage == undefined || key == undefined){
      throw new Error();
    }

    let decryptor = [];
    let j=0;
    encryptedMessage = encryptedMessage.toUpperCase().split('');
    key = key.toUpperCase().split('');

    for (let i=0; i<encryptedMessage.length; i++) {
      if (j==key.length) {
        j=0;
      }
      decryptor.push(key[j]);
      j++;
    }

    let decryptedMessage = [];

for (let i=0; i<=encryptedMessage.length; i++) {
  if (encryptedMessage.length==0) {
    break;
  }
i=0;
  if (encryptedMessage[i]==" ") {
    decryptedMessage.push(' ');
    encryptedMessage.splice(i,1);
    continue;
  } 

  if (encryptedMessage[i]==".") {
    decryptedMessage.push(".");
    encryptedMessage.splice(i,1);
    decryptor.splice(i,1);
    continue;
  }

  if (encryptedMessage[0]=="!") {
    decryptedMessage.push("!");
    encryptedMessage.splice(i,1);
    decryptor.splice(i,1);
    continue;
  }

  if (encryptedMessage[i]==':') {
    decryptedMessage.push(":");
    encryptedMessage.splice(i,1);
    decryptor.splice(i,1);
    continue;
  }

  if (encryptedMessage[i]==')') {
    decryptedMessage.push(")");
    encryptedMessage.splice(i,1);
    decryptor.splice(i,1);
    continue;
  }

  if (encryptedMessage[i]=='(') {
    decryptedMessage.push("(");
    encryptedMessage.splice(i,1);
    decryptor.splice(i,1);
    continue;
  }

  if (encryptedMessage[i]=='^') {
    decryptedMessage.push("^");
    encryptedMessage.splice(i,1);
    decryptor.splice(i,1);
    continue;
  }

  if (encryptedMessage[i]=='1' || encryptedMessage[i]=="2" || encryptedMessage[i]=="3" || encryptedMessage[i]=="4" || encryptedMessage[i]=="." || encryptedMessage[i]==",") {
    decryptedMessage.push(encryptedMessage[i]);
    encryptedMessage.splice(i,1);
    decryptor.splice(i,1);
    continue;
  }

  let row_index = basic_array.indexOf(decryptor[i]);
  let column_index = array[row_index].indexOf(encryptedMessage[i]);
  decryptor.splice(i,1);
  decryptedMessage.push(basic_array[column_index]);
  encryptedMessage.splice(i,1);
}

return decryptedMessage.join('');
  }
}

module.exports = VigenereCipheringMachine;