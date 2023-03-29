const Photo = require("../models/Photo");

const handleError = (res, error) => {
  res.status(500).json({ error });
};

const getPhoto = (req, res) => {
  Photo.find()
    .sort({ title: 1 })
    .then((photos) => {
      res.status(200).json(photos);
    })
    .catch((err) => handleError(res, err));
};

const getPhotoById = (req, res) => {
  Photo.findById(req.params.id)
    .then((photos) => {
      res.status(200).json(photos);
    })
    .catch((err) => handleError(res, err));
};

const deletePhoto = (req, res) => {
  Photo.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => handleError(res, err));
};

const postPhoto = (req, res) => {
  const photo = new Photo(req.body);
  photo
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => handleError(res, err));
};

const patchPhoto = (req, res) => {
  Photo.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => handleError(res, err));
};

module.exports = { getPhoto, getPhotoById, deletePhoto, postPhoto, patchPhoto };
