function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  let intersection = collection_a.filter(v => collection_b.includes(v));

  return intersection;
}

module.exports = collect_same_elements;
