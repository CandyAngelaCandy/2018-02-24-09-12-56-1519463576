'use strict';
var is_exist_element = function(collection,element){
   return collection.some(function (item,index) {
      return index % 2 ==0 && item ==element;
   });
};
module.exports = is_exist_element;
