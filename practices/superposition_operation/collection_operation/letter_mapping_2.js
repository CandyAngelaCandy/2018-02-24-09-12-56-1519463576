'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  let sum = collection.reduce(function (prev,cur) {
    return prev + cur;
  });

  let avg = Math.ceil(sum / collection.length);

  return String.fromCharCode(96+avg);
}

module.exports = average_to_letter;

