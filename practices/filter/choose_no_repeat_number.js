'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  return [...new Set(collection)];
}

module.exports = choose_no_repeat_number;
