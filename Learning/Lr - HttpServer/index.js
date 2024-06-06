const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Req Received\n`
    fs.appendFile("log.txt", log, (err, data) => {
        switch (req.url) {
            case '/': res.end("This is Home page");
                break
            case '/about': res.end("This is About page");
                break
            case '/contact': res.end("this is contact page")
                break
            default: res.end("404 NOT FOUND");
                break
        }
    })
});
myServer.listen(9000, () => console.log("server initialized"));