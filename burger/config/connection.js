var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "pwcspfbyl73eccbn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "texj1cs611bo49fw",
    password: "dfn43ykeymv9zex7",
    database: "d1sgqjy8tcym22fu"
});

connection.connect(function(err){
    if(err){
        console.log("error connection: " + err.stack);
        return;
    }
    console.log("conneceted as id " + connection.threadId);
});

module.exports = connection;
