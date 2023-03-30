const express = require("express");
const {
  getPhoto,
  getPhotoById,
  deletePhoto,
  postPhoto,
  patchPhoto,
} = require("../controllers/PhotoController");

const router = express.Router();

router.get("/Photos", getPhoto);
router.get("/Photos/:id", getPhotoById);
router.delete("/Photos/:id", deletePhoto);
router.post("/Photos", postPhoto);
router.patch("/Photos/:id", patchPhoto);

module.exports = router;
