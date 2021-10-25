var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res){
    console.log(req.body.newBurger);
    burger.insertOne(req.body.newBurger, function(results){
        
        //res.json({ id: results.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res){
    var burgerID = req.params.id;
    console.log(burgerID);
    burger.update(burgerID, function(results){
        res.json(results);

        if (results.changedRows == 0) {
            return res.status(404).end();
        } 
        else {
            res.status(200).end();
        };

        // console.log("done");
    });
});

module.exports = router;