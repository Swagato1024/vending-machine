const testing = require('../lib/testing.js');
const utilities = require('../lib/utilities.js');

const assertEquals = testing.assertEquals;
const sumOf = utilities.sumOf;
const addAll = utilities.addAll;
const print = testing.print;

const testSumOf = function () {
  print('test for sumOf elements');

  assertEquals(sumOf([1]), 1, 'Sum of one element is the number itself');
  assertEquals(sumOf([1, 2]), 3, 'Sum of two elements');
  assertEquals(sumOf([1, 2, 4]), 7, 'Sum of more than two elements');
}


const testAddAll = function () {
  print('testAddAll values of an object');

  assertEquals(addAll({'a': 1}), 1, 'Sum of values of an object with one key is the value itself');
  assertEquals(addAll({'a': 1, 'b': 2}), 3, 'Sum of values of an object with any no of keys');
}


const runTest = function () {
  testSumOf();
  testAddAll();
}

runTest();
