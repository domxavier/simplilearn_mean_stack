// var http = require("http");
// var server = http.createServer((req,res) => {
// 	console.log("welcome to Nodejs");
// 	res.write("Welcome to NodeJS");
// 	res.end();
// })
// server.listen(9090)
// console.log("Server is running on port number 9090")

let port = 9090;
let http = require("http");
http.createServer((req,res) => {
	if(req.url == "/") {
		res.writeHead(200,{"content-type" : "text/html"});
		res.write("Welcome to http server - Home Page");
	} else if (req.url == "/about") {
		res.writeHead(200,{"content-type" : "text/html"});
		res.write("Welcome to http server - About Page");
	} else if (req.url == "/contactus") {
		res.writeHead(200,{"content-type" : "text/html"});
		res.write("Welcome to http server - Contact Page");
	} else {
		res.writeHead(200,{"content-type" : "text/html"});
		res.write("<font color=red>Error Page</font>");
	}
	res.end();
}).listen(port)

console.log(`the server is running ${port}`);
