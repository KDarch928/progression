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

<<<<<<< HEAD
router.route("/uploads")
  .post(Controller.s3upload);

=======
router
  .route("/category/:category")
  .get(Controller.findByCategory)
  .put(Controller.update)
  .delete(Controller.remove);
>>>>>>> 32c204c94b5ed076842726f66309612132f1ad78
module.exports = router;