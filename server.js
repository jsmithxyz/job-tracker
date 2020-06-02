const express = require("express");
const morgan = require("morgan");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect("mongodb://localhost/job_tracker", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!!!");
});

app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api", (req, res) => {
  const data = {
    name: "Jordan",
    age: 30,
  };
  res.json(data);
});

app.get("/api/username", (req, res) => {
  const data = {
    name: "Kate",
    age: 30,
  };
  res.json(data);
});

app.listen(PORT, console.log(`Server is starting at port ${PORT}`));
