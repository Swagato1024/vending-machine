const utility = require('../lib/utilities.js');

const swap = function (index1, index2, list) {
  const element = list[index1];
  list[index1] = list[index2];
  list[index2] = element;
}
const minSort = function(list) {
  const arranged = list.slice();

  for (let pass = 0 ; pass < arranged.length ; pass++) {
    let element = arranged[pass];
    let minElementIndex = pass;


    for(let currentIndex = pass ; currentIndex < arranged.length ; currentIndex++) {
      if(arranged[currentIndex] < element) {
        element = arranged[currentIndex];
        minElementIndex = currentIndex;
      }
    }

    if (minElementIndex !== pass) {
      utility.swap (pass, minElementIndex, arranged);
    }
  }

  return arranged;
}
exports.minSort = minSort;
