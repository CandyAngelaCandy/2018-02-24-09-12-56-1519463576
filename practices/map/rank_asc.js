'use strict';
var rank_asc = function(collection){

  collection.sort(function (a,b) {
    return a<b;
  });

  return collection;
};

module.exports = rank_asc;
