'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  let aLen = collection_a.length,
    bLen = collection_b.length;

  let result = [];

  for (let i = 0; i < bLen; i++) {

    for (let j = 0; j < aLen; j++) {

      if(collection_b[i] === collection_a[j]){
        result.push(collection_b[i]);
      }

    }

  }
  return result;
}

module.exports = get_intersection;
