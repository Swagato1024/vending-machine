const testing = require('../lib/testing.js');
const vendingMachine = require('../src/vending-machine.js');
const sort = require('../lib/sort/bubble-sort.js');

const assertEquals = testing.assertEquals;
const assertArraysEqual = testing.assertArraysEqual;
const dispenseCoins = vendingMachine.dispenseCoins;
const calculateCoinCounts = vendingMachine.calculateCoinCounts; 
const bubbleSort = sort.bubbleSort;

const print = function (text) {
  console.log(testing.yellow((testing.underline(text))));
}


const testGenerateCoins = function() {
  print("testing for given set of dinominations");

  assertEquals(dispenseCoins(0, [ 1 ]), 0, "For amount 0, in denomination 1,no Of coins should be 0");
  assertEquals(dispenseCoins(1, [ 1, 2 ]), 1, " amount 1, in denominations 1,2  no Of coins should be 1");
  assertEquals(dispenseCoins(2, [ 1, 2]), 1, " amount 2, in denominations 1,2 no Of coins should be 1");
  assertEquals(dispenseCoins(4, [ 1, 2, 5]), 2, " amount 4, in denominations 1,2,5 no Of coins should be 2");
  assertEquals(dispenseCoins(5, [ 1, 2, 5]), 1, " amount 5  in denominations 1,2,5,10 no Of coins should be 1");
  assertEquals(dispenseCoins(10, [ 1, 2, 5, 10]), 1, " amount 10  in denominations 1,2,5,10 no Of coins should be 1");
  assertEquals(dispenseCoins(9, [ 1, 2, 5, 10]), 3, " amount 9  in denominations 1,2,5,10 no Of coins should be 3");
  assertEquals(dispenseCoins(13, [ 1, 2, 5, 10]), 3, " amount 13  in denominations 1,2,5,10 no Of coins should be 3");
  assertEquals(dispenseCoins(13, [ 1, 4, 7 ]), 4, " amount 13  in denominations 1,4,7 no Of coins should be 4");
  assertEquals(dispenseCoins(13, [ 1, 7, 4 ]), 4, " amount 13  in denominations 1,7,4 no Of coins should be 4");
}

testGenerateCoins();

const testBubbleSort = function () {
  print("testing for bubble Sort");

  assertArraysEqual(bubbleSort([3]), [3], "Sorting of one element is the number itself");
  assertArraysEqual(bubbleSort([4, 3]),[3, 4], "Sorting of two elements");
  assertArraysEqual(bubbleSort([1, 7, 4]),[1, 4, 7], "Sorting more than two elements");
}

testBubbleSort();

const testCalculateEachCoinCounts = function () {
  print("testing for calculate each coin counts");

  let expected = { '1': 2, '7':1, '4':1  };
  let actual = calculateCoinCounts(13, [1, 7, 4]);
  // for dispensing amount of 13 rupees in  denomination of 1,7,4 should dispense two coins of 1 rupees
  assertEquals(actual[1], expected[1], "For amount 13 rupees in denomination of 1,7,4 should dispense 2 coins of 1 rupees");
  assertEquals(actual[7], expected[7], "For amount 13 rupees in denomination of 1,7,4 should dispense 1 coins of 7 rupees");
  assertEquals(actual[4], expected[4], "For amount 13 rupees in denomination of 1,7,4 should dispense 1 coins of 4 rupees");
}

testCalculateEachCoinCounts();

