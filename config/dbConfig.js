const mongoose = require("mongoose");

const DB_STRING = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.kod4hpz.mongodb.net/prothom-alo`;

mongoose.connect(DB_STRING);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("MongoDB connected");
});

connection.on("error", (err) => {
  console.log("MongoDB connection failed");
});
