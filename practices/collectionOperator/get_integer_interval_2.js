'use strict';

function get_integer_interval_2(number_a, number_b) {

  let result = [];

  if(number_a === number_b){

    if(number_a % 2 == 0){
      result.push(number_a);
    }
    return result;

  }


  if(number_a < number_b){

    for (let i = number_a; i <= number_b; ) {

      if(i % 2 == 0){

        result.push(i);
        i+=2;

      }else{
        i++;
      }

    }

  }else{

    for (let i = number_a; i >= number_b; ) {

      if(i % 2 == 0){

        result.push(i);
        i-=2;

      }else{
        i--;
      }

    }

  }

  return result;
}



module.exports = get_integer_interval_2;
