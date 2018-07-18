function count_same_elements(collection) {

  //在这里写入代码
   let obj = {};

   collection.map(function (item) {

      if(item.length > 1){



        let ele = item.substring(0,1);

        let stringNumber;

        if(item.indexOf("[")!=-1){
          stringNumber = parseInt(item.substring(2,item.length-1));
        }else{
          stringNumber = parseInt(item.substring(2,3));
        }

        if(obj[ele] == undefined){

          obj[ele] = stringNumber;

        }else{

          obj[ele] += stringNumber;

        }

      }else if(obj[item] == undefined){

        obj[item] = 1;
      }else{
        obj[item] ++;
      }

   });


  let result = [];

  for(var key in obj){

    var temp = {name:key,summary:obj[key]}

    result.push(temp);

  }

  return result;

}

var collection = [
   "t-2",  "t[10]", "t",
];


module.exports = count_same_elements;
