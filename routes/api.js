const express = require("express");
const router = express.Router();
const Note = require("../models/note");

router.get("/notes", (req, res, next) => {
  Note.find({})
    .then(data => {
      res.json(data);
      console.log("api got data: ", data);
    })
    .catch(next);
});

router.post("/notes", (req, res, next) => {
  Note.create(req.body)
    .then(data => {
      console.log('data:', data)
      res.json(data);
    })
    .catch(next);
});

router.delete("/notes/:id", (req, res, next) => {
  Note.findOneAndDelete({ _id: req.params.id })
    .then(data => res.json(data))
    .catch(next);
});

module.exports = router