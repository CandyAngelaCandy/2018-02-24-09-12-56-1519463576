'use strict';

function choose_multiples_of_three(collection) {

  //在这里写入代码
  let filterRes = collection.filter(function (item) {
    return item % 3 == 0;
  });

  return filterRes;
}

module.exports = choose_multiples_of_three;
