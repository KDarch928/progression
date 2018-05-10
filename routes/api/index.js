/////////////////////////////////////////////////////////
// routes/api/index.js                M Jordan
/////////////////////////////////////////////////////////
require("dotenv").config();
const router = require("express").Router();
const goalsRoutes = require("./goals");
const data = require("./key");


// goals routes
router.use("/goals", goalsRoutes);

router.get("/getdata", function(req,res) {
    console.log("I made it to get");
    
    let getData = {
        bucket: data.s3Data.bucket,
        key: data.s3Data.key,
        secret: data.s3Data.secret
      }
      console.log(getData);
      res.json(getData);
});

module.exports = router;
