'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  let maxVal = collection[0];
  for (let i = 0; i < collection.length; i++) {
    if(collection[i] > maxVal){
      maxVal = collection[i];
    }
  }
  return maxVal;

}

module.exports = collect_max_number;
