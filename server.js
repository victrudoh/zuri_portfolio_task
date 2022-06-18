const http = require("http");
const path = require("path");
const fs = require("fs");
const PORT = 3000;

const myExpress = (req, res) => {
  if (req.method === "GET" && req.url === "/") {
    // fetch page
    let getFile = path.resolve(__dirname, "views/index.html");
    let foundFile = fs.existsSync(getFile);

    // if page is not found
    if (!foundFile) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html");
      let get404 = path.resolve(__dirname, "views/error.html");
      const render = fs.createReadStream(get404).pipe(res);
      return render;
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream(getFile).pipe(res);
  } else if (req.method === "GET" && req.url === "/about") {
    // fetch page
    let getFile = path.resolve(__dirname, "views/about.html");
    let foundFile = fs.existsSync(getFile);

    // if page is not found
    if (!foundFile) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html");
      let get404 = path.resolve(__dirname, "views/error.html");
      const render = fs.createReadStream(get404).pipe(res);
      return render;
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream(getFile).pipe(res);
  } else if (req.method === "GET" && req.url === "/contact") {
    // fetch page
    let getFile = path.resolve(__dirname, "views/contact.html");
    let foundFile = fs.existsSync(getFile);

    // if page is not found
    if (!foundFile) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html");
      let get404 = path.resolve(__dirname, "views/error.html");
      const render = fs.createReadStream(get404).pipe(res);
      return render;
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream(getFile).pipe(res);
  } else {
  }
};

const server = http.createServer(myExpress);

server.listen(PORT, () => {
  console.log(`Server running on: ${PORT}`);
});
