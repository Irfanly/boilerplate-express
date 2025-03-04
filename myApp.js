let express = require('express');
let app = express();

console.log("Hello World");

// app.get("/", GET);
app.get("/", SERVE_HTML);
app.use("/public", express.static(__dirname + "/public"));
app.get("/json", JSON);

// function GET (req, res){
//     res.send("Hello Express")
// }

function SERVE_HTML (req, res){
    res.sendfile(__dirname + "/views/index.html")
}

function JSON(req,res){
    res.json({
        message : "Hello json"
    })
}
































 module.exports = app;
