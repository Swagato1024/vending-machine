const testing = require('../lib/testing.js');
const vendingMachine = require('../src/vending-machine.js');

testing.assertEquals(3,3,"Equals");
testing.assertEquals(2,3,"Not Equals");

testing.assertEquals(vendingMachine.one, 1, "Should be 1");
testing.assertEquals(vendingMachine.two, 1, "Should be 2");

