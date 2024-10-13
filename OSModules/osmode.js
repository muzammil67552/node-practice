const os = require('node:os');

console.log(os.arch());
// To Find System Host Name
console.log(os.hostname());
// to find the window platform
console.log(os.platform());

//remainig memory
const  freeMemory = os.freemem();
console.log(freeMemory)//for check your arch and memory in byte
console.log(`${freeMemory /1024 / 1024 / 1024}`); // to check the exact remaining of your storage in your sys 

// to know the total  storage of your sys
const  totalMemory = os.totalmem();
console.log(totalMemory)//for check your arch and memory in byte
console.log(`${totalMemory /1024 / 1024 / 1024}`); 
