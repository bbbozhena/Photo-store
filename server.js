const express = require("express");
const mongoose = require("mongoose");
const Photo = require("./models/Photo");

const PORT = 3000;
const URL = "mongodb://localhost:27017/Photo-box";

const app = express();
app.use(express.json());

mongoose
  .connect(URL)
  .then((res) => console.log("Conecting to Mongo"))
  .catch((err) => console.log(`DB connection error: ${err}`));

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Listening port ${PORT}`);
});

const handleError = (res, error) => {
  res.status(500).json({ error });
};

app.get("/Photos", (req, res) => {
  Photo.find()
    .sort({ title: 1 })
    .then((photos) => {
      res.status(200).json(photos);
    })
    .catch(() => handleError(res, "Something goes wrong..."));
});

app.get("/Photos/:id", (req, res) => {
  Photo.findById(req.params.id)
    .then((photos) => {
      res.status(200).json(photos);
    })
    .catch(() => handleError(res, "Something goes wrong..."));
});

app.delete("/Photos/:id", (req, res) => {
  Photo.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() => handleError(res, "Something goes wrong..."));
});

app.post("/Photos", (req, res) => {
  const photo = new Photo(req.body);
  photo
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch(() => handleError(res, "Something goes wrong..."));
});

app.patch("/Photos/:id", (req, res) => {
  Photo.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() => handleError(res, "Something goes wrong..."));
});
