const testing = require('../lib/testing.js');
const vendingMachine = require('../src/vending-machine.js');


console.log('testing for vending machine for one rupee copy');
testing.assertEquals(vendingMachine.generateNoOfCoins(0, 1), 0, "For amount zero no Of coins should be zero");
testing.assertEquals(vendingMachine.generateNoOfCoins(1, 1), 1, "For amount 1 no Of coins should be 1");
testing.assertEquals(vendingMachine.generateNoOfCoins(5, 1), 5, "For amount 5 no Of coins should be 5");

