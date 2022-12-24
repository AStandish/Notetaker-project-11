const apiRoute = require("express").Router();
const path = require("path");
const data = require("../db/db.json");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

apiRoute.get("/api/notes", (req, res) => {
  console.log(data, "hello");
  res.json(data);
});

uuidv4(); // => '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

apiRoute.post("/api/notes", (req, res) => {
  const newNote = req.body;
  newNote.id = uuidv4();
  data.push(newNote);
  res.json(data);
});

module.exports = apiRoute;
