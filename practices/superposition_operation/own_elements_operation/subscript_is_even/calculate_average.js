'use strict';
var calculate_average = function(collection){
  //在这里写入代码
  let result = collection.filter(function (item) {
    return item % 2 === 0;
  });

  let sum = result.reduce(function (prev,cur) {
    return prev + cur;
  });

  console.log(result);
  return Math.ceil(sum/result.length);
};
module.exports = calculate_average;
