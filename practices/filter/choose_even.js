'use strict';

function choose_even(collection) {

  //在这里写入代码
  let result = collection.filter(function (item) {
    return item % 2 == 0;
  });

  return result;
}

module.exports = choose_even;
