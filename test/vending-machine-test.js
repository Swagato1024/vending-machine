const testing = require('../lib/testing.js');
const vendingMachine = require('../src/vending-machine.js');
const algorithm = require('../src/maxSort.js');

const print = function (text) {
  console.log(testing.yellow((testing.underline(text))));
}


const testGenerateCoins = function() {
  print("testing for given set of dinominations");

  testing.assertEquals(vendingMachine.dispenseCoins(0, [ 1 ]), 0, "For amount zero no Of coins should be zero");
  testing.assertEquals(vendingMachine.dispenseCoins(1, [ 1, 2 ]), 1, "For amount 1 no Of coins should be 1");
  testing.assertEquals(vendingMachine.dispenseCoins(2, [ 1, 2]), 1, "For amount 2 no Of coins should be 1");
  testing.assertEquals(vendingMachine.dispenseCoins(4, [ 1, 2, 5]), 2, "For amount 4 no Of coins should be 2");
  testing.assertEquals(vendingMachine.dispenseCoins(5, [ 1, 2, 5]), 1, "For amount 5 no Of coins should be 1");
  // testing.assertEquals(vendingMachine.dispenseCoins(10, [ 1, 2, 5, 10]), 1, "For amount 10 no Of coins should be 1");
  //testing.assertEquals(vendingMachine.dispenseCoins(9, [ 1, 2, 5, 10]), 3, "For amount 9 no Of coins should be 3");
  // testing.assertEquals(vendingMachine.dispenseCoins(13, [ 1, 2, 5, 10]), 3, "For amount 13 no Of coins should be 3");
  testing.assertEquals(vendingMachine.dispenseCoins(13, [ 1, 4, 7 ]), 4, "For amount 13 no Of coins should be 3");
  testing.assertEquals(vendingMachine.dispenseCoins(13, [ 7, 1, 4 ]), 4, "For amount 13 no Of coins should be 3");
}

testGenerateCoins();

const testMaxSort = function () {
  print("testing for max Sort");

  testing.assertArraysEqual(algorithm.maxSort([3]),[3], "Sorting of one element is the number itself");
  // testing.assertArraysEqual(algorithm.maxSort([4, 3]),[3, 4], "Sorting of two elements");
  //testing.assertArraysEqual(algorithm.maxSort([7, 1, 4]),[1, 4, 7], "Sorting more than two elements");
}

testMaxSort();

const testMaxOf = function () {
  print("testing for maxOf numbers");

  testing.assertEquals(algorithm.maxOf([ 2 ]), 2, "Max of one element is the number itself" );
  testing.assertEquals(algorithm.maxOf([ 2, 4 ]), 4, "Max of two elements" );
  testing.assertEquals(algorithm.maxOf([ 2, 4, 6, 3 ]), 6, "Max of more than two elements" );
}


testMaxOf();
