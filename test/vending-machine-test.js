const testing = require('../lib/testing.js');
const vendingMachine = require('../src/vending-machine.js');
const sort = require('../src/bubble-sort.js');

const print = function (text) {
  console.log(testing.yellow((testing.underline(text))));
}


const testGenerateCoins = function() {
  print("testing for given set of dinominations");

  testing.assertEquals(vendingMachine.dispenseCoins(0, [ 1 ]), 0, "For amount zero  and denominations [1] no Of coins should be zero");
  testing.assertEquals(vendingMachine.dispenseCoins(1, [ 1, 2 ]), 1, "For amount 1 and denominations[1,2] no Of coins should be 1");
  testing.assertEquals(vendingMachine.dispenseCoins(2, [ 1, 2]), 1, "For amount 2 and denominations [1,2] no Of coins should be 1");
  testing.assertEquals(vendingMachine.dispenseCoins(4, [ 1, 2, 5]), 2, "For amount 4 and denominations [1,2,5] no Of coins should be 2");
  testing.assertEquals(vendingMachine.dispenseCoins(5, [ 1, 2, 5]), 1, "For amount 5 and denominations [1,2,5,10] no Of coins should be 1");
  testing.assertEquals(vendingMachine.dispenseCoins(10, [ 1, 2, 5, 10]), 1, "For amount 10 and denominations [1,2,5,10] no Of coins should be 1");
  testing.assertEquals(vendingMachine.dispenseCoins(9, [ 1, 2, 5, 10]), 3, "For amount 9 and denominations [1,2,5,10] no Of coins should be 3");
  testing.assertEquals(vendingMachine.dispenseCoins(13, [ 1, 2, 5, 10]), 3, "For amount 13 and denominations [1,2,5,10] no Of coins should be 3");
  testing.assertEquals(vendingMachine.dispenseCoins(13, [ 1, 4, 7 ]), 4, "For amount 13 and denominations [1,4,7] no Of coins should be 4");
  testing.assertEquals(vendingMachine.dispenseCoins(13, [ 1, 7, 4 ]), 4, "For amount 13 and denominations [1,7,4] no Of coins should be 4");
}

testGenerateCoins();

const testMinSort = function () {
  print("testing for min Sort");

  testing.assertArraysEqual(sort.bubbleSort([3]), [3], "Sorting of one element is the number itself");
  testing.assertArraysEqual(sort.bubbleSort([4, 3]),[3, 4], "Sorting of two elements");
  testing.assertArraysEqual(sort.bubbleSort([1, 7, 4]),[1, 4, 7], "Sorting more than two elements");
}

testMinSort();

