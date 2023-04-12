const sort = require('./minSort.js');

const addAllValues = function (obj) {
  let sum = 0;

  for (let key in obj) {
    sum += obj[key];    
  }

  return sum;
}

const calculateNoOfCoins = function (amount, denomination) {
  return Math.floor(amount / denomination); 
}

const arrangeInDescOrder = function(list) {
  return sort.minSort(list).reverse();
}

const dispenseCoins = function(amount, denominations) {
  const optimumNoOfCoins = {};

  const denominationsInDesc = arrangeInDescOrder(denominations); 
  let remainingAmount = amount;

  for (let denomination of denominationsInDesc) {
    optimumNoOfCoins[denomination] = calculateNoOfCoins(remainingAmount, denomination); 
    remainingAmount = remainingAmount % denomination;
  }

  return addAllValues(optimumNoOfCoins);
}

exports.dispenseCoins = dispenseCoins;
