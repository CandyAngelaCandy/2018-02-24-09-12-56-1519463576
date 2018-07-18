'use strict';
var number_map_to_word = function(collection){

  let result = collection.map(function (item) {
    return String.fromCharCode(96+item);
  });

  return result;
};

module.exports = number_map_to_word;
