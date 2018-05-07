/////////////////////////////////////////////////////////
// routes/api/index.js                M Jordan
/////////////////////////////////////////////////////////
const router = require("express").Router();
const goalsRoutes = require("./goals");

// goals routes
router.use("/goals", goalsRoutes);

module.exports = router;
