'use strict';

function grouping_count(collection) {

  //在这里写入代码

  var result = {};
  for (var i = 0; i < collection.length;i++) {

    if(result[collection[i]]== undefined){
      result[collection[i]] = 1;
    }else{
      result[collection[i]]++;
    }

  }

  return result;


}

module.exports = grouping_count;
