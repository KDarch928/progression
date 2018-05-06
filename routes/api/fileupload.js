const router = require("express").Router();
const Controller = require("../../controllers/Controller");

router.route("/")
  .post(Controller.s3upload);


module.exports = router;