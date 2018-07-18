'use strict';
var even_asc_odd_desc = function(collection){
  let odd = collection.filter(function (item) {
    return item % 2 == 0;
  }).sort(function (a,b) {
    return a>b;
  })

  let even = collection.filter(function (item) {
    return item % 2 == 1;
  }).sort(function (a,b) {
    return a<b;
  })

  return odd.concat(even);
};
module.exports = even_asc_odd_desc;
