const sort = require('./bubble-sort.js');


const calculateNoOfCoins = function (amount, denomination) {
  return Math.floor(amount / denomination); 
}

const arrangeInDescOrder = function(list) {
  return sort.bubbleSort(list).reverse();
}

const dispenseCoins = function(amount, denominations) {
  let coinCounts = 0;
  const denominationsInDesc = arrangeInDescOrder(denominations.slice()); 
  let remainingAmount = amount;

  for (let denomination of denominationsInDesc) {
    coinCounts += calculateNoOfCoins(remainingAmount, denomination); 
    remainingAmount = remainingAmount % denomination;
  }

  return coinCounts; 
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


exports.dispenseCoins = dispenseCoins;
exports.calculateCoinCounts = calculateEachCoinCounts;
