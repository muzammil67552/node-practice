// create a http server method including request and response parameters which is supplied by node js
// to listen to the request server.listen

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {  // it is a response from the server
    // routing will be perform over here
   // console.log(req.url);  // Corrected: logging req.url instead of url
   if(req.url == "/"){
    res.end("Hello from this is server side ");
   }
   else if(req.url == "/about"){
    res.end("Hello This Is Server About Page");
   }
   else if(req.url == "/contact"){
    res.end("Hello This Is Server Contact Page");
   }
   else if(req.url == "/userapi"){
    fs.readFile(`${__dirname}/httpserver/UserApi/userapi.json`, "utf-8",(err, data) =>{
        console.log(data)
    })
    res.end("Hello This Is Server User APi Page");
   }
   else if(req.url == "/help"){
    res.end("Help Page");
   }
   else{
    res.writeHead(404); // to give a status of code for appear in networking
    res.end("404 Error Page Not Found");
   }
   
   
})

server.listen(3000, () => {
    console.log("Listen to The Port no 3000");
})
