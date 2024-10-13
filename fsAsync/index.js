const fs = require('fs')

// creating read file by async
fs.writeFile('bio.txt', ' Welcome To Async Another Bio.txt Files', () =>{
    console.log("File Has Been Created")                                       //call back function
});

//add more data in your files 
fs.appendFile('bio.txt', ' Hey There Hope You will Understand Your Concept Of Async In mode Js For Creating Your File ', () =>{
    console.log("file")
})

// read the data in index without using the  txt
fs.readFile('bio.txt','UTF-8',(err,data) =>{
          console.log(data)
});