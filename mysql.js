const mysql = require('mysql')

var pool = mysql.createPool({
    "user": "bf9edaa381acdb",
    "password": "21829e51",
    "database": "heroku_1c35cff35132432",
    "host": "us-cdbr-east-06.cleardb.net",
    "port": 3306
})

exports.pool = pool