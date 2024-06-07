const http = require('http');
const fs = require('fs');
const url = require('url');

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Req Received\n`
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile("log.txt", log, (err, data) => {
        switch (myUrl.pathname) {
            case '/': res.end("This is Home page");
                break
            case '/about':
                const username = myUrl.query.name;
                res.end(`wassup ${username}`);
                break
            case '/contact': res.end("this is contact page")
                break
            default: res.end("404 NOT FOUND");
                break
        }
    })
});
myServer.listen(9000, () => console.log("server initialized on : localhost:9000"));