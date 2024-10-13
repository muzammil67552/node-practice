const path = require('node:path');

console.log(path.extname("D:\Thapa Node Tut\PathModules"));
console.log(path.dirname("D:\Thapa Node Tut\PathModules"));
console.log(path.basename("D:\Thapa Node Tut\PathModules"));

// it is used for the collection for all of your project directries
console.log(path.parse("D:\Thapa Node Tut\PathModules"));