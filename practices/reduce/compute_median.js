'use strict';

function compute_median(collection) {
  //在这里写入代码
  var len = collection.length;

  if(len % 2 == 0 ){
    return (collection[len/2-1]+collection[len/2])/2;
  }else{
    let mediumIndex = Math.floor(len/2);
    return collection[mediumIndex];
  }
}

module.exports = compute_median;


