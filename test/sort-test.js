const testing = require('../lib/testing.js');
const sort = require('../lib/sort/bubble-sort.js');

const assertArraysEqual = testing.assertArraysEqual;
const bubbleSort = sort.bubbleSort;
const print = testing.print;

const testBubbleSort = function () {
  print("testing for bubble Sort");

  assertArraysEqual(bubbleSort([3]), [3], "Sorting of one element is the number itself");
  assertArraysEqual(bubbleSort([4, 3]),[3, 4], "Sorting of two elements");
  assertArraysEqual(bubbleSort([1, 7, 4]),[1, 4, 7], "Sorting more than two elements");
}

testBubbleSort();

