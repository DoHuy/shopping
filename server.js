const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const nunjucks = require("nunjucks");
require("dotenv").config();
const app = express();

// use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// use template engine
nunjucks.configure("resources/views", {
    autoescape: true,
    express: app
});

//example
app.get("/",(req, res)=>{
    res.render("index.njk.html", {title : "hello"});

});

app.listen(process.env.PORT || 3000, ()=>{
    console.log("server listenning at port 3000 ...");
});