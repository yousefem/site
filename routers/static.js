const express = require("express");
const router = express.Router();
const path = require("path");

router.get("*", (req, res, next) => {
  if (path.isAbsolute(__dirname ,'/../', "/front_end/static/" + req.url)) {
    
    res.sendFile(path.join(__dirname ,'/../', "/front_end/static/" + req.url));
  }
});

module.exports = router;
