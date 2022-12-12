const express = require("express");
const path = require("path");
const noteRoutes = require("./routes/noteRoutes");
const apiRoute = require("./routes/apiRoutes");
const app = express();

const PORT = 3000;

app.use(express.json());

app.use(express.static("public"));
app.use("/", noteRoutes);
app.use("/", apiRoute);
app.listen(PORT, () => {
  console.log("app is listening");
});
