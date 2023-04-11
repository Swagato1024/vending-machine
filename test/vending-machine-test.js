const testing = require('../lib/testing.js');
const vendingMachine = require('../src/vending-machine.js');

const print = function (text) {
  console.log(text);
}



const testGenerateCoins = function() {
  print("testing for dinomination 1 and 2");

  testing.assertEquals(vendingMachine.generateNoOfCoins(0), 0, "For amount zero no Of coins should be zero");
  testing.assertEquals(vendingMachine.generateNoOfCoins(1), 1, "For amount 1 no Of coins should be 1");
  testing.assertEquals(vendingMachine.generateNoOfCoins(2), 1, "For amount 2 no Of coins should be 1");
  testing.assertEquals(vendingMachine.generateNoOfCoins(4), 2, "For amount 4 no Of coins should be 2");
  testing.assertEquals(vendingMachine.generateNoOfCoins(5), 1, "For amount 5 no Of coins should be 1");
  testing.assertEquals(vendingMachine.generateNoOfCoins(10), 1, "For amount 10 no Of coins should be 2");
  testing.assertEquals(vendingMachine.generateNoOfCoins(9), 3, "For amount 9 no Of coins should be 3");
  testing.assertEquals(vendingMachine.generateNoOfCoins(13), 3, "For amount 9 no Of coins should be 3");
}

testGenerateCoins();


