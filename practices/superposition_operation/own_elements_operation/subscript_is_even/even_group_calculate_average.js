'use strict';
var even_group_calculate_average = function(collection){

  var evenEle = collection.filter(function (item,index) {
     return index % 2 == 1 && item % 2 ==0;
  });

  console.log("evenEle: "+evenEle);

  var oneDigEle = evenEle.filter(function (item) {
     return item.toString(10).length == 1;
  });

  var twoDigEle = evenEle.filter(function (item) {
    return item.toString(10).length == 2;
  });

  var threeDigEle = evenEle.filter(function (item) {
    return item.toString(10).length == 3;
  });


  let result = [];

  console.log(oneDigEle.length+" hahah "+twoDigEle.length+" hhh "+threeDigEle.length);

  if(oneDigEle.length == 0 && twoDigEle.length ==0 && threeDigEle.length == 0){
    result.push(0);
    return result;
  }

  if(oneDigEle.length == 0 && twoDigEle.length == 0 && threeDigEle.length !=0){

    console.log("进来了");
    let threeSum = threeDigEle.reduce(function (prev,cur) {
       return prev + cur;
    })

    console.log("!?????threeSum"+threeSum);

    result.push(threeSum/threeDigEle.length);

    console.log(result);

    return result;
  }

};

var collection_c = [344, 256, 55, 777, 322, 180];

even_group_calculate_average(collection_c);

module.exports = even_group_calculate_average;
