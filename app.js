const express = require("express");
const cors = require("cors");
var colors = require("colors");
const dbConfig = require("./config/dbConfig");
const newsRoute = require("./routes/news.route");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Prothom Alo Server");
});

app.use("/api/v1/news", newsRoute);

module.exports = app;
