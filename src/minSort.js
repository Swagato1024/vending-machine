const utility = require('../lib/utilities.js');

const swapIfNeeded = function (index1, index2, list) {
  index1 === index2 || utility.swap(index1, index2, list);
}

const findUpdatedMinIndex = function (element1, element2, index1, index2) {
  return element1 === element2 ? index1 : index2;
}

const findMinElementIndex = function (beginIndex, endIndex, list) {
  let min = list[beginIndex];
  let minElementIndexSoFar = beginIndex;

  for (let index = beginIndex; index < endIndex ; index++) {
    const element = list[index];

    min = Math.min(min, element);
    minElementIndexSoFar = findUpdatedMinIndex(min, element, index, minElementIndexSoFar);

  }

  return minElementIndexSoFar;
}


const minSort = function(list) {
  const arranged = list.slice();

  for (let index = 0 ; index < arranged.length ; index++) {
    const minElementIndex = findMinElementIndex(index, arranged.length, arranged);

    swapIfNeeded(index, minElementIndex, arranged); 
  }

  return arranged;
}


exports.minSort = minSort;
