const testing = require('../lib/testing.js');
const vendingMachine = require('../src/vending-machine.js');
const sort = require('../lib/sort/bubble-sort.js');

const assertEquals = testing.assertEquals;
const assertArraysEqual = testing.assertArraysEqual;
const countTotalCoins = vendingMachine.countTotalCoins;
const calculateCoinCounts = vendingMachine.calculateCoinCounts; 
const print = testing.print;


const it = function(testName, testData) {
  assertEquals(testData.actual, testData.expected, testName);
}


const testCalculateEachCoinCounts = function () {
  print("testing for calculate each coin counts");

  let expected = { '1': 2, '7':1, '4':1  };
  let actual = calculateCoinCounts(13, [1, 7, 4]);

  assertEquals(actual[1], expected[1], 'For amount 13 rupees in denomination of 1,7,4 should dispense 2 coins of 1 rupees');
  assertEquals(actual[7], expected[7], 'For amount 13 rupees in denomination of 1,7,4 should dispense 1 coins of 7 rupees');
  assertEquals(actual[4], expected[4], 'For amount 13 rupees in denomination of 1,7,4 should dispense 1 coins of 4 rupees');
}

const testCountTotalCoins = function() {
  print('test count total coins');

  it('should dispense 0 coins for when amount is 0', {
    actual: countTotalCoins(0, [1, 2]),
    expected: 0
  });

  it('should dispense no of coins same as amount when denomination is 1', {
    actual: countTotalCoins(5, [1]),
    expected: 5
  });

  it('should dispense optimum coins for ordered denomination set', {
    actual: countTotalCoins(13, [1, 4, 7]),
    expected: 4
  });

  it('should dispense optimum coins for unordered denomination set', {
    actual: countTotalCoins(13, [1, 7, 4]),
    expected: 4
  });
}

const runTest = function () {
  testCountTotalCoins();
  testCalculateEachCoinCounts();
}

runTest();
