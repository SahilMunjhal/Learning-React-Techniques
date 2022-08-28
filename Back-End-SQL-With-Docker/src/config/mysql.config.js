const mysql = require("mysql2");

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'Munjhalji@1234',
    database:'sahildb'
});

module.exports = pool;