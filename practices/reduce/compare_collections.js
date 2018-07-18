'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  if(collection_a.length != collection_b.length){
    return false;
  }

  let isSame = collection_a.every(function (item,index) {
     return collection_a[index] == collection_b[index];
  });

  return isSame;
}

module.exports = compare_collections;


