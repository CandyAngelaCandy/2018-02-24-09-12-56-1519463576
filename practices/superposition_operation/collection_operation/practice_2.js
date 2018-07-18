'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  let result = collection.filter(function (item) {
    return item % 2 === 1;
  }).map(function (item) {
    return item * 3 + 2;
  });

  return result;
}

module.exports = hybrid_operation_to_uneven;

