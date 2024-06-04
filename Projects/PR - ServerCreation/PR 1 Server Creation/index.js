const http = require("http");

const fs = require("fs");

const port = 8088;

const requestHandler = (req, res) => {
  let filename = "";
  switch (req.url) {
    case "/":
      filename = "./home.html";
        break; 

    case "/about":
      filename = "./about.html";
      break;

    case "/blogs":
      filename = "./blogs.html";
      break;
  }
  fs.readFile(filename, (err, result) => {
    if (!err) {
      res.end(result);
    } else {
      res.end("Error");
    }
  });
};
const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    console.log("server not start in port");
    return false;
  }
  console.log("server server start in port:- " + port);
});
