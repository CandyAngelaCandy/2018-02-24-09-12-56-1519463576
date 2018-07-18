'use strict';

function amount_even(collection) {

  //在这里写入代码
  let result = collection.filter(function (item) {
    return item % 2 === 0;
  }).reduce(function (prev,cur) {
    return prev + cur;
  });

  return result;
}

module.exports = amount_even;
