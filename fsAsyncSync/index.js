const fs = require('fs')


//Synchronous
//creating file in txt
// fs.writeFileSync('read.txt', 'Hello These Is For Both Async And Sync')

// read the the txt file in Sync and Async
//in Sync
const data = fs.readFileSync('read.txt','utf-8');
console.log(data)

fs.readFile('read.txt', 'utf-8', (data) =>{
    console.log("after Data ")
})


//read