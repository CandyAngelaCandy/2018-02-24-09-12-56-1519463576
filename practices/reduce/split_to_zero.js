'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  let result = [];

  let temp = number;


  while(temp >=0) {

    result.push(parseFloat(temp));
    temp-=interval;
    temp = temp.toFixed(1);

  }

   if(temp != -interval){
     result.push(parseFloat(temp));
   }

  console.log(result);

  return result;

}

module.exports = spilt_to_zero;
