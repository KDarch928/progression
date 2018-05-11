/////////////////////////////////////////////////////////
// routes/api/goals.js                M Jordan
/////////////////////////////////////////////////////////
const router = require("express").Router();
const Controller = require("../../controllers/Controller");

// Matches with "/api/goals"
router.route("/goals")
  .get(Controller.findAll)
  .post(Controller.create);
  
// Matches with "/api/goals/:id"
router
  .route("/:id")
  .get(Controller.findById)
  .put(Controller.update)
  .delete(Controller.remove);

// Matches with "/api/goals/category/:category"
router
  .route("/category/:category")
  .get(Controller.findByCategory)
  .put(Controller.update)
  .delete(Controller.remove);

// Matches with "/api/goals/user/:user"
router
  .route("/user/:user")
  .get(Controller.findByUser)
  .put(Controller.update)
  .delete(Controller.remove);

module.exports = router;
