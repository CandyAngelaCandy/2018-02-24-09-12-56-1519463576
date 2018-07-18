function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  collection_c = double_to_one(collection_b);

  let intersection = collection_a.filter(v => collection_c.includes(v));

  return intersection;
}

function double_to_one(collection) {

  //在这里写入代码
  let result = [];

  for (let i = 0; i < collection.length; i++) {

    if(Array.isArray(collection[i])){

      var arr = collection[i];

      for (let j = 0; j < arr.length; j++) {

        result.push(arr[j]);

      }
      console.log(result);

    }else{

      result.push(collection[i]);

    }

  }

  return result;
}

module.exports = collect_same_elements;
