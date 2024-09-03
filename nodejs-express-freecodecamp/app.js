// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const {john, peter} = require('./4-names');
const sayHi = require('./5-utils')
// console.log(names);
// console.log(sayHi);


sayHi('Gaurav');
sayHi(john);
sayHi(peter);