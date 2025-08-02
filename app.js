const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req.url);
    // res.end("Hello world");
    if(req.url == "/profile"){
        res.end("Profile page");
    }
    if(req.url == "/about"){
        res.end("About Page");
    }
    if(req.url == "/"){
        res.end("Home Page");
    }
})

server.listen(1234);