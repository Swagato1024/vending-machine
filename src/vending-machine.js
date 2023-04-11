

const generateNoOfCoins = function(amount) {
  let  optimumNoOfCoins = Math.floor(amount / 2);
  let remainingAmount = amount % 2;

  optimumNoOfCoins += remainingAmount;

  return optimumNoOfCoins ;
}

exports.generateNoOfCoins = generateNoOfCoins;
