
const maxOf = function(list) {
  let max = list[0];

  for(let index = 1 ; index < list.length; index++) {
    let element = list[index];

    if(element > max) {
      max = element;
    }
  }

  return max;
}

const maxSort = function (list) {
  const numbers = list.slice();
  const sorted = [];

  for (let index = 0; index < list.length ; index++) {
    let currentMax = maxOf(numbers.slice(index));

    sorted.push(currentMax);
  }
  return sorted;
}

exports.maxSort = maxSort;
exports.maxOf = maxOf;
