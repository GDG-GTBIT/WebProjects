let http = require("http");
let fs = require("fs");
let url = require("url");

let server = http.createServer();

server.on("request", function (request, response) {
  let html_file = fs.readFileSync(`${__dirname}/scripts/index.html`, "utf-8");
  let { pathname, query } = url.parse(request.url);
  console.log(pathname);

  if (pathname === "/") {
    response.writeHead(200, {
      "Content-type": "text/html",
      Organization: "Sigma",
    });

    console.log(
      "Date : ",
      new Intl.DateTimeFormat("en-GB").format(new Date()),
      "( Request for the Webpage made)"
    );

    response.end(html_file);
  } else if (pathname === "/scripts/app.js") {
    let javascript_file = fs.readFileSync(
      `${__dirname}/scripts/app.js`,
      "utf-8"
    );
    response.end(javascript_file);
  } else if (pathname === "/data") {
    let file = fs.createReadStream(`${__dirname}/data/data1.json`);

    file.on("data", (chunk) => response.write(chunk));
    file.on("end", () => response.end());
  } else if (pathname == "/feedPost.js") {
    let file = fs.readFileSync(`${__dirname}/scripts/feedPost.js`, "utf-8");
    response.end(file);
  } else if (pathname == "/bundle.js") {
    let file = fs.readFileSync(`${__dirname}/scripts/bundle.js`, "utf-8");
    response.end(file);
  } else {
    response.writeHead(404, {
      "Content-type": "text/html",
      Organization: "Sigma",
    });
    response.end("Request Cannot be processed");
  }
});

// We can send only one request at a time

server.on("request", function () {
  console.log("Confirmation Request");
});

server.on("close", function () {
  console.log("Server Closing");
});

// This event will listen to the closing events

server.listen(8000, "127.0.0.1", () => {
  console.log("Server Started");
  console.log("Date : ", new Intl.DateTimeFormat("en-GB").format(new Date()));
});
