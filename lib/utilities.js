const swap = function (index1, index2, list) {
  const element = list[index1];
  list[index1] = list[index2];
  list[index2] = element;
}

exports.swap = swap;
