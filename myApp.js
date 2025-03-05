let express = require('express');
let app = express();
require('dotenv').config()

console.log("Hello World");

// app.get("/", GET);
app.get("/", SERVE_HTML);
app.use("/", simpleLogger);
app.use("/public", express.static(__dirname + "/public"));
app.get("/json", JSON);
app.get("/now", middleware, responsJSON);
app.get("/:word/echo", ECHO);
app.get("/name", NAME);

// function GET (req, res){
//     res.send("Hello Express")
// }

function SERVE_HTML (req, res){
    res.sendfile(__dirname + "/views/index.html")
}

function JSON(req,res){

    var response;
    if(process.env.MESSAGE_STYLE === "uppercase"){
        response = "hello json".toUpperCase();
    } else {
        response = "Hello json";
    }

    res.json ({ message: response});
}

function simpleLogger(req,res,next){
    var stringReponse = req.method + " " + req.path + " " + "-" + " " + req.ip;
    console.log(stringReponse);

    next();
}

function middleware(req,res,next){
    req.time = new Date().toString();
    next();
}

function responsJSON(req,res){
    res.send({
        time: req.time
    });
}

function ECHO(req,res){
    const { word } = req.params;

    res.send({
        echo: word
    });
}

function NAME(req,res){
    // OR you can destructure and rename the keys
    var { first: firstName, last: lastName } = req.query;
    // Use template literals to form a formatted string
    res.json({
        name: `${firstName} ${lastName}`
    });
}































 module.exports = app;
