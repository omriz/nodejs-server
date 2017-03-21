"use strict";
//Lets require/import the HTTP module
let http = require('http');

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
let server = http.createServer(handleRequest);

//Lets start our server
server.listen(process.env.PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", process.env.PORT);
});