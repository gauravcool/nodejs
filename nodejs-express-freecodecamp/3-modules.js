//CommonJS, every file is module(by default)
//Modules - Encapsulated Code (only share minimum)
const names = require('./4-names')
console.log(names);

const sayHi = require('./5-utils')
console.log(sayHi);

const data = require('./6-alternative-flavor')
console.log(data);

require('./7-mind-grenamde')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)  //john, peter, susan
