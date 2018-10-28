var express = require("express");
var app = express();
//const port = 3000

//app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//var fs = require('fs');
//var http = require('http');
//var https = require('https');
//var privateKey  = fs.readFileSync('certificates/key.pem', 'utf8');
//var certificate = fs.readFileSync('certificates/cert.pem', 'utf8');

//var credentials = {key: privateKey, cert: certificate};

//var httpServer = http.createServer(app);
//var httpsServer = https.createServer(credentials, app);

// For http
//httpServer.listen(8080);
// For https
//httpsServer.listen(8443);


//express to use css files in public folder
app.use(express.static("public"));
//express to use images in img folder
app.use(express.static("img"));
//express to use other folder
app.use(express.static("other"));
//add tags and blogs
// app.use(express.static("tags"))
//remove ejs suffix from files
app.set("view engine", "ejs");

//"/tags/:title"
// app.get("/tags/:tagName/:titleOfArticle", function(req, res) {
//     res.send("tag");
//     console.log("description area");
// });

//"/tags/:title" blog posts
app.get("/tags/customer-support-engineer-product-manager", function(req, res) {
    res.render("tags/customer-support-engineer-product-manager");
})

//"/tags",tags page with blog pages
app.get("/tags", function(req, res) {
    res.render("tags");
})

//"/", index page
app.get("/", function(req, res) {
    res.render("index");
})

//"/description"
app.get("/description", function(req, res) {
    res.render("description");
});

//"/resume"
app.get("/resume", function(req, res) {
    res.render("resume");
});

app.get("*", function(req, res) {
    res.send("Page Not Found");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started");
});
