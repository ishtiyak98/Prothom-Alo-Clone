const express = require("express");
const cors = require("cors");
require("dotenv").config();
var colors = require("colors");
const dbConfig = require("./config/dbConfig");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Prothom Alo Server");
});

app.listen(PORT, () => {
  console.log(`Server is running from ${PORT}`.yellow.underline);
});
