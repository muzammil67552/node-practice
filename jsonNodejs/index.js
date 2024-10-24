const fs = require('fs')
// to create a object .
const mybiodata = {
    name : "Muzammmil",
    age : 21,
    status: "student",
    study: "University",
};
// convert this object into JSON file by using stringify

const jsonData = JSON.stringify(mybiodata)
console.log(jsonData)

// now convert the jsonData into object by parse

const objectData = JSON.parse(jsonData);
console.log(objectData)

// create a file for json data to add object

const myData = JSON.stringify(mybiodata);
fs.writeFile('json1.json', myData,  (err) =>{
    console.log("done")
} )

fs.readFile('json1.json', 'utf-8', (err, data) => {
    console.log(data);
});

