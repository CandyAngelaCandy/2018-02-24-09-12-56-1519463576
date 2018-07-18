'use strict';

function average_uneven(collection) {

  //在这里写入代码
  let result = collection.filter(function (item) {
    return item % 2 === 1;
  });

  let sum = result.reduce(function (prev,cur) {
    return prev + cur;
  });

  console.log(result);
  return Math.ceil(sum/result.length);
}

module.exports = average_uneven;
