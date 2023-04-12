const testing = require('../lib/testing.js');
const vendingMachine = require('../src/vending-machine.js');

const print = function (text) {
  console.log(testing.yellow((testing.underline(text))));
}


const testGenerateCoins = function() {
  print("testing for given set of dinominations");

  testing.assertEquals(vendingMachine.dispenseCoins(0, [ 1 ]), 0, "For amount zero no Of coins should be zero");
  testing.assertEquals(vendingMachine.dispenseCoins(1, [ 1, 2 ]), 1, "For amount 1 no Of coins should be 1");
  testing.assertEquals(vendingMachine.dispenseCoins(2, [ 1, 2]), 1, "For amount 2 no Of coins should be 1");
  testing.assertEquals(vendingMachine.dispenseCoins(4, [ 1, 2, 5]), 2, "For amount 4 no Of coins should be 2");
  testing.assertEquals(vendingMachine.dispenseCoins(5, [ 1, 2, 5]), 1, "For amount 5 no Of coins should be 1");
  testing.assertEquals(vendingMachine.dispenseCoins(10, [ 1, 2, 5, 10]), 1, "For amount 10 no Of coins should be 2");
  testing.assertEquals(vendingMachine.dispenseCoins(9, [ 1, 2, 5, 10]), 3, "For amount 9 no Of coins should be 3");
  testing.assertEquals(vendingMachine.dispenseCoins(13, [ 1, 2, 5, 10]), 3, "For amount 9 no Of coins should be 3");
}

testGenerateCoins();


