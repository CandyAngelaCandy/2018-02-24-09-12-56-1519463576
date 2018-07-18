'use strict';

function calculate_elements_sum(collection) {

  //在这里写入代码
  return collection.reduce(function(prev, cur){
    return prev + cur;
  });
}

module.exports = calculate_elements_sum;

