function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  //在这里写入代码
  var collection_b = object_b["value"];

  let intersection = collection_a.filter(v => collection_b.includes(v["key"]));

  intersection = intersection.map(function (item) {
    return item["key"];
  });

  return intersection;
}

module.exports = collect_same_elements;
