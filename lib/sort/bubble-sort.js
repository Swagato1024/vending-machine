
const bubbleSort = function (list) {
  const arranged = list.slice();

  for (let pass = 0 ; pass < arranged.length; pass++) {
    for (let index = 0 ; index < arranged.length - pass; index++) {
      if(arranged[index] > arranged[index + 1]) {
        const element = arranged[index];
        arranged[index] = arranged[index + 1];
        arranged[index + 1] = element;
      }
    }
  }

  return arranged;
}

exports.bubbleSort = bubbleSort;
