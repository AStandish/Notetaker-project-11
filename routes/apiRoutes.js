const apiRoute = require("express").Router();
const path = require("path");
const data = require("../db/db.json");
const fs = require("fs");

apiRoute.get("/api/notes", (req, res) => {
  res.json(data);
});
apiRoute.post("/api/notes", (req, res) => {
  // res.json(data);
  //console.log(req.body);
  const newNote = req.body;
  data.push(newNote);
  console.log(data);
});

module.exports = apiRoute;
