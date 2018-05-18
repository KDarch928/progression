/////////////////////////////////////////////////////////
// routes/api/goals.js                M Jordan
/////////////////////////////////////////////////////////
const router = require("express").Router();
const Controller = require("../../controllers/Controller");

// Matches with "/api/goals"
router.route("/user")
  .get(Controller.findAll)
  .get(Controller.findById)
  .post(Controller.create);

router.route("/follow/")
  .post(Controller.updateGoalFollow)
  .delete(Controller.remove)

router
  .route("/search/:keyword")
  .get(Controller.findByCategory)
  .put(Controller.update)
  .delete(Controller.remove);

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

router
<<<<<<< HEAD
    .route("/update")
    // .get(Controller.findById)
    // .get(function(req, res, next) {
    //   console.log('we are in the route')
    // })
    .post(Controller.update);
// .put(function(req, res, next) {
//   console.log('we are in the route')
// })
//.delete(Controller.remove);


=======
  .route("/update")
  // .get(Controller.findById)
  // .get(function(req, res, next) {
  //   console.log('we are in the route')
  // })
  .post(Controller.update);
  // .put(function(req, res, next) {
  //   console.log('we are in the route')
  // })
  //.delete(Controller.remove);
>>>>>>> d3b046540f4e7f67cb62bbf987fa6eda4b11892f

module.exports = router;
