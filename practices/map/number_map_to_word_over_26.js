'use strict';
var number_map_to_word_over_26 = function(collection){

  let result = collection.map(function (item) {
    return numToCharacter(item);
  });

  return result;

};


function numToCharacter(num){

  if(num <= 26){

    let ele = String.fromCharCode(96 + num);
    return ele;
  }

  let num1 = Math.floor((num-1) / 26),
    num2 = num - num1*26;

  let ele = String.fromCharCode(96 + num1) + String.fromCharCode(96 +num2);

  return ele;
}

module.exports = number_map_to_word_over_26;
