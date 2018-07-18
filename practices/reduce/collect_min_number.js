'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  let minVal = collection[0];
  for (let i = 0; i < collection.length; i++) {
    if(collection[i] < minVal){
      minVal = collection[i];
    }
  }
  return minVal;
}

module.exports = collect_min_number;

