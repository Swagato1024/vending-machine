const sumOf = function (list) {
  let sum = 0;

  for(let element of list) {
    sum = sum + element;      
  }

  return sum;
}

const addAll = function(obj) {
  const values = Object.values(obj);

  return sumOf(values);
}

exports.sumOf = sumOf;
exports.addAll = addAll;
