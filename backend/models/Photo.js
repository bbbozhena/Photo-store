const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const photoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
  add: {
    type: Boolean,
  },
  like: {
    type: Boolean,
  },
  type: {
    type: String,
    required: true,
  },
});

const Photo = mongoose.model("Photo", photoSchema, "Photos");
module.exports = Photo;
