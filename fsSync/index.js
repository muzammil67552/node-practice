const fs = require('fs')


//creating the initial read.txt file
// fs.writeFileSync('bio.txt', 'hello H There')

//add more data in your bio.txt file how
// fs.appendFileSync('bio.txt', ' Hey Still You Setup Your Project Accordingly')

//read the buf_data Without  your reading the data in  bio.txt
// const buf_data = fs.readFileSync('bio.txt');
// org_data = buf_data.toString();
// console.log(org_data);


//rename your bio txt file 
fs.renameSync('bio.txt', 'mybio.txt')
