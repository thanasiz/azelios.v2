var express = require("express");
var app = express();

//express to use css files in public folder
app.use(express.static("public"));
//express to use images in img folder
app.use(express.static("img"));
//express to use other folder
app.use(express.static("other"));
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
