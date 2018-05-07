/////////////////////////////////////////////////////////
// routes/api/index.js                M Jordan
/////////////////////////////////////////////////////////
const router = require("express").Router();
const goalsRoutes = require("./goals");


console.log("--- routes/api/index.js")
// goals routes
router.use("/goals", goalsRoutes);

module.exports = router;
