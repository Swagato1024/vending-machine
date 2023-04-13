const sort = require('../lib/sort/bubble-sort.js');
const utilities = require('../lib/utilities.js');

const bubbleSort = sort.bubbleSort;
const sumOf = utilities.sumOf;
const addAll = utilities.addAll;

const calculateNoOfCoins = function (amount, denomination) {
  return Math.floor(amount / denomination); 
}

const arrangeInDescOrder = function(list) {
  return bubbleSort(list).reverse();
}

const calculateEachCoinCounts = function (amount, denominations) {

  const optimumNoOfCoins = {};
  const denominationsInDesc = arrangeInDescOrder(denominations.slice()); 
  let remainingAmount = amount;

  for (let denomination of denominationsInDesc) {
    optimumNoOfCoins[denomination] = calculateNoOfCoins(remainingAmount, denomination); 
    remainingAmount = remainingAmount % denomination;
  }

  return optimumNoOfCoins;
} 

const dispenseCoins = function(amount, denominations) {
  return addAll(calculateEachCoinCounts (amount, denominations));
}




exports.dispenseCoins = dispenseCoins;
exports.calculateCoinCounts = calculateEachCoinCounts;
