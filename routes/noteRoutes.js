const noteRoute = require("express").Router();
const path = require("path");

const fs = require("fs");


noteRoute.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

noteRoute.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});
module.exports = noteRoute;
