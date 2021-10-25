var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

var reserved = [];
var waitList = [];
var guests = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});
  
app.get("/index.html", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/tables", function(req, res) {
    return res.json(guests);
});

app.get("/api/reservedtables", function(req, res) {
    return res.json(reserved);
});

app.get("/api/waitlist", function(req, res) {
    return res.json(waitList);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

app.post("/api/reservetable", function(req, res) {
    var newTable = req.body;
  
    newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newTable);
    
    if (guests.length < 5){
        reserved.push(newTable);
    }
    else {
        waitList.push(newTable);
    }

    guests.push(newTable);

    res.json(newTable);
});