/////////////////////////////////////////////////////////
// routes/api/index.js                M Jordan
/////////////////////////////////////////////////////////
const router = require("express").Router();
const goalsRoutes = require("./goals");
const uploaderRoutes = require("./fileupload");

console.log("--- routes/api/index.js")
// goals routes
router.use("/goals", goalsRoutes);

router.use("/s3uploads", uploaderRoutes);

module.exports = router;
