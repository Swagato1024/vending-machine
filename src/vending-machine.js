

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

const dispenseCoins = function(amount, denominationsInAsc) {
  const optimumNoOfCoins = {};

  const denominationsInDesc = denominationsInAsc.slice().reverse(); 
  let remainingAmount = amount;

  for (let denomination of denominationsInDesc) {
    optimumNoOfCoins[denomination] = calculateNoOfCoins(remainingAmount, denomination); 
    remainingAmount = remainingAmount % denomination;
  }

  return addAllValues(optimumNoOfCoins);
}

exports.dispenseCoins = dispenseCoins;
