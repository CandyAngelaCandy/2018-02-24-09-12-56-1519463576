'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  let result = collection_a.filter(function (item1) {

    var isDiv = collection_b.some(function (item2) {
      return item1 % item2 == 0;
    });

    return isDiv;
  });

  return result;
}

module.exports = choose_divisible_integer;
