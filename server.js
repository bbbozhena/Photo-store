require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const photoRouter = require("./backend/routes/PhotoRoutes");
const ServerApiVersion = require("mongodb");

const PORT = 3000;
const password = process.env.PASSWORDAPI;
const URL = `mongodb+srv://bbbozhena:${password}@photocluster.uph0tyw.mongodb.net/Photo-box?retryWrites=true&w=majority`;

const app = express();
app.use(cors());
app.use(express.json());
app.use(photoRouter);

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  })
  .then((res) => console.log("Conecting to Mongo"))
  .catch((err) => console.log(`DB connection error: ${err}`));

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Listening port ${PORT}`);
});
