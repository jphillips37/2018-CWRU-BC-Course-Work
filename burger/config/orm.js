var connection = require("./connection.js");

var orm = {
    selectAll: function(cb){
        connection.query("SElect * FROM burgers", function(err, result){
            if(err) throw err;
            cb(result); 
        });
    },
    insertOne: function(burgerName, cb){
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, burgerName, function(err, result){
            if(err) throw err;
            cb(result)
        })
    },
    updateOne: function(burgerId, cb){
        var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
        connection.query(queryString, burgerId, function(err, result){
            if(err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;