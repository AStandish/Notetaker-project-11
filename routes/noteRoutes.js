const noteRoute = require("express").Router();
const path = require("path");

const fs = require("fs");

// noteRoute.get("/", (req, res) =>
//   readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)))
// );

// noteRoute.post('/', (req, res) => {

noteRoute.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

noteRoute.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});
module.exports = noteRoute;
