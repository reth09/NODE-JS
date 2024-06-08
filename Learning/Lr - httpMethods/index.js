const http = require('http');
const fs = require('fs');
const url = require('url');

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.method} ${req.url} New Req Received\n`
    const myUrl = url.parse(req.url, true);
    fs.appendFile("log.txt", log, (err, data) => {
        switch (myUrl.pathname) {
            case '/': res.end("This is Home page");
                if (req.method == 'GET') {
                    res.end("this is your home page")
                }
                break
            case '/about':
                const username = myUrl.query.name;
                res.end(`wassup ${username}`);
                break
            case '/contact': res.end("this is contact page")
                break
            case '/signup':
                if(req.method == 'GET'){
                    res.end("this is a signup page")
                }else if(req.method=='POST'){
                    // database sent
                    res.end("SIGN-UP SUCCESS")
                }
            default: res.end("404 NOT FOUND");
                break
        }
    })
});
myServer.listen(9000, () => console.log("server initialized on : localhost:9000"));