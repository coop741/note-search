const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  note: String
});

const Note = mongoose.model("note", noteSchema);

module.exports = Note;
