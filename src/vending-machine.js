

const optimumNoOfCoins = {};

const addAll = function (obj) {
  let sum = 0;

  for (let key in obj) {
    sum += obj[key];    
  }

  return sum;
}


const generateNoOfCoins = function(amount, denominationsInAsc) {
  const denominationsInDesc = denominationsInAsc.slice().reverse(); 
  let remainingAmount = amount;

  for (let denomination of denominationsInDesc) {
    optimumNoOfCoins[denomination] =  Math.floor(remainingAmount / denomination);
    remainingAmount = remainingAmount % denomination;
  }

  return addAll(optimumNoOfCoins);
}

exports.generateNoOfCoins = generateNoOfCoins;
