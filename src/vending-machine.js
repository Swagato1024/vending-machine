
const denominations = [ 10, 5, 2, 1 ];

const optimumNoOfCoins = {};

const addAll = function (obj) {
  let sum = 0;

  for (let key in obj) {
    sum += obj[key];    
  }

  return sum;
}

const generateNoOfCoins = function(amount) {
  let remainingAmount = amount;

  for (let denomination of denominations) {
    optimumNoOfCoins[denomination] =  Math.floor(remainingAmount / denomination);
    remainingAmount = remainingAmount % denomination;
  }

  return addAll(optimumNoOfCoins);
}

exports.generateNoOfCoins = generateNoOfCoins;
