var express = require("express");
var app = express();
var helmet = require("helmet");

//use "helmet" for security headers
app.use(helmet());
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

// /tags/uncertainty-scaling-human-systems
app.get("/tags/uncertainty-scaling-human-systems", function(req, res) {
    res.render("tags/uncertainty-scaling-human-systems");
})

// /tags/customer-support-engineer-product-manager
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
    console.log("Server started");
});
