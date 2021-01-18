const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
  {
    id: Number,
    name: String,
    location: String,
    category: String,
    likes: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Advices", DataSchema);
