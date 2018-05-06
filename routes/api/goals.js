/////////////////////////////////////////////////////////
// routes/api/goals.js                M Jordan
/////////////////////////////////////////////////////////
const router = require("express").Router();
const Controller = require("../../controllers/Controller");

// Matches with "/api/goals"
console.log("*** routes/api/goals.js")
router.route("/")
  .get(Controller.findAll)
  .post(Controller.create);

router.route("/")
  .get(Controller.findAll)
  .post(Controller.create);
  
// Matches with "/api//:id"
router
  .route("/:id")
  .get(Controller.findById)
  .put(Controller.update)
  .delete(Controller.remove);

router.route("/uploads")
  .post(Controller.s3upload);

module.exports = router;