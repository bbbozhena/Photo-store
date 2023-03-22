const express = require("express");
const { connectToDb, getDb } = require("./db");
const { ObjectId } = require("mongodb");

const PORT = 3000;

const app = express();
app.use(express.json());

let db;

connectToDb((err) => {
  if (!err) {
    app.listen(PORT, (err) => {
      err ? console.log(err) : console.log(`Listening port ${PORT}`);
    });
    db = getDb();
  } else {
    console.log(`DB connection error: ${err}`);
  }
});

const handleError = (res, error) => {
  res.status(500).json({ error });
};

app.get("/Photos", (req, res) => {
  const photos = [];

  db.collection("Photos")
    .find()
    .forEach((photo) => photos.push(photo))
    .then(() => {
      res.status(200).json(photos);
    })
    .catch(() => handleError(res, "Something goes wrong..."));
});

app.get("/Photos/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    db.collection("Photos")
      .findOne({ _id: new ObjectId(req.params.id) })
      .then((doc) => {
        res.status(200).json(doc);
      })
      .catch(() => handleError(res, "Something goes wrong..."));
  } else {
    handleError(res, "Wrong id!");
  }
});

app.delete("/Photos/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    db.collection("Photos")
      .deleteOne({ _id: new ObjectId(req.params.id) })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch(() => handleError(res, "Something goes wrong..."));
  } else {
    handleError(res, "Wrong id!");
  }
});

app.post("/Photos", (req, res) => {
  db.collection("Photos")
    .insertOne(req.body)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch(() => handleError(res, "Something goes wrong..."));
});

app.patch("/Photos/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    db.collection("Photos")
      .updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch(() => handleError(res, "Something goes wrong..."));
  } else {
    handleError(res, "Wrong id!");
  }
});
