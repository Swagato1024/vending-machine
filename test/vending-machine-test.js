const testing = require('../lib/testing.js');
const vendingMachine = require('../src/vending-machine.js');
const sort = require('../lib/sort/bubble-sort.js');

const assertEquals = testing.assertEquals;
const assertArraysEqual = testing.assertArraysEqual;
const countTotalCoins = vendingMachine.countTotalCoins;
const calculateCoinCounts = vendingMachine.calculateCoinCounts; 
const print = testing.print;


const testCountTotalCoins = function() {
  print("testing countTotalCoins");

  assertEquals(countTotalCoins(0, [ 1, 2 ]), 0, 'provided amount 0 no of coins should be 0');
  assertEquals(countTotalCoins(5, [1]), 5, 'Provided denomination 1, no of coins is same as amount');
  assertEquals(countTotalCoins(4, [ 1, 2, 5]), 2, 'Provided an amount with ordered denominations');
  assertEquals(countTotalCoins(18, [ 2, 5 ]), 4, 'Provided an amount cannot be dispensed completely by given denominations');
  assertEquals(countTotalCoins(13, [ 1, 7, 4 ]), 4, 'Provided an amount with unordered denominations');
}

const testCalculateEachCoinCounts = function () {
  print("testing for calculate each coin counts");

  let expected = { '1': 2, '7':1, '4':1  };
  let actual = calculateCoinCounts(13, [1, 7, 4]);

  assertEquals(actual[1], expected[1], 'For amount 13 rupees in denomination of 1,7,4 should dispense 2 coins of 1 rupees');
  assertEquals(actual[7], expected[7], 'For amount 13 rupees in denomination of 1,7,4 should dispense 1 coins of 7 rupees');
  assertEquals(actual[4], expected[4], 'For amount 13 rupees in denomination of 1,7,4 should dispense 1 coins of 4 rupees');
}


const runTest = function () {
  testCountTotalCoins();
  testCalculateEachCoinCounts();
}

runTest();
