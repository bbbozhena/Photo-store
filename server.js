const express = require("express");
const mongoose = require("mongoose");
const Photo = require("./models/Photo");
const photoRouter = require("./routes/PhotoRoutes");

const PORT = 3000;
const URL = "mongodb://localhost:27017/Photo-box";

const app = express();
app.use(express.json());
app.use(photoRouter);

mongoose
  .connect(URL)
  .then((res) => console.log("Conecting to Mongo"))
  .catch((err) => console.log(`DB connection error: ${err}`));

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Listening port ${PORT}`);
});
