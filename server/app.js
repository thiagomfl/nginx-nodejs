const express = require("express");
const mysql = require("mysql2");

const app = express();

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
  rowsAsArray: true,
};

const conn = mysql.createConnection(config);

const table =
  "CREATE TABLE people(id int not null auto_increment, name varchar(255) not null, primary key(id))";

conn.query(table)

const insert = `INSERT INTO people (name) values ('Thiago')`

conn.query(insert)

const sql = `SELECT * FROM people`;

let result;
conn.query(sql, (err, results) => (result = results));

app.get("/", (_, res) => res.send(`<h1>Hello Fullcycle, ${result[0][1]}`));

app.listen(3000, () => console.log("Server is running..."));
