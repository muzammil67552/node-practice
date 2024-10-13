// call function of your  module.export = add;
// we also use dis structuring for reduce code 
const {add, sub, mul, division} = require('./operator')

console.log(add(5,5));
console.log(sub(20,5));
console.log(mul(2,5))
console.log(division(50,5))

