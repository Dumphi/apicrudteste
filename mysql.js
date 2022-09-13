const mysql = require('mysql')

var pool = mysql.createPool({
    "user": "b35e4cefe1f424",
    "password": "c60df0aa",
    "database": "heroku_4504289e8674303",
    "host": "us-cdbr-east-06.cleardb.net",
    "port": 3306
})

exports.pool = pool