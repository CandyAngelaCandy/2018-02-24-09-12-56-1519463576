'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  collection = collection.map(function (item) {
    return item * 3 + 2;
  });

  let result = collection.reduce(function (prev,cur) {
    return prev + cur;
  })

  return result;
}

module.exports = hybrid_operation;

