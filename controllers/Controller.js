/////////////////////////////////////////////////////////
// controllers/Controller.js                M Jordan
/////////////////////////////////////////////////////////
require("dotenv").config();
const s3 = require("react-s3");
const db = require("../models");


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
    db.Goals
      .findById(req.params.id)
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
  s3upload: function(req, res) {
    const config = {
      bucketName: "progressionapp",
      region: "us-east-2",
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
    console.log("I made to sign s3");
    console.log(req.body);
    console.log(req.query);
    console.log(req.params);

    // s3.upload(file, config)
    //   .then((data) => console.log(data))
    //   .catch((err) => console.log(err));
  }
};
