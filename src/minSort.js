const utility = require('../lib/utilities.js');


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
