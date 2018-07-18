'use strict';
var calculate_median = function(collection){

  collection = collection.filter(function (item,index) {
    return index % 2 == 1;
  });

  var len = collection.length;
  let median;

  if(len % 2 == 0 ){
    median = (collection[len/2-1]+collection[len/2])/2;
    //median = Math.ceil(median);
  }else{
    let mediumIndex = Math.floor(len/2);
    median = collection[mediumIndex];
  }

  return median;
};


module.exports = calculate_median;
