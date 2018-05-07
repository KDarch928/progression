/////////////////////////////////////////////////////////
// controllers/Controller.js                M Jordan
/////////////////////////////////////////////////////////
require("dotenv").config();
// const s3 = require("react-s3");
const db = require("../models");
const data = require("./key");



// Defining methods for the Controller
module.exports  = {

  findAll: function(req, res) {
    db.Goals
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Goals
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByCategory: function(req, res) {
    console.log("findByCategory req "+req.params.category)
    db.Goals
      .find({gcategory: (req.params.category).toString()})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Goals
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Goals
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Goals
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  data: function(req,res){
    let getData = {
      bucket: data.s3Data.bucket,
      key: data.s3Data.key,
      secret: data.s3Data.secret
    }
    console.log(getData);
    res.json(getData);
  }
};
