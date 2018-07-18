'use strict';
var single_element = function(collection){
  let result = collection.filter(function (item,index) {
    return index % 2 == 1;
  });

  //统计元素个数
  let obj = {};
  for (let i = 0; i < result.length; i++) {

    if(obj[result[i]] == undefined){
      obj[result[i]] = 1;
    }else{
      obj[result[i]]++;
    }

  }

  let res = [];
  for(let item in obj){
    if(obj[item] == 1){
      res.push(parseInt(item));
    }
  }
  console.log(res);

  return res;

  //return [...new Set(result)];
};


module.exports = single_element;
