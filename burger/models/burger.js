var orm = require("../config/orm.js");

var burger = {
    all: function(cb){
        orm.selectAll(function(results){
            cb(results);
        });
    },
    update: function(id, cb){
        orm.updateOne(id, function(results){
            cb(results);
        });
    },
    insertOne: function(burgerName, cb){
        orm.insertOne(burgerName, function(results){
            cb(results);
        });
    }
};

module.exports = burger;