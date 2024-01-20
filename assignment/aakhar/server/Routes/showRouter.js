const express = require("express");
const router = express.Router();

 const { showPhoto } = require("../Controller/photoController")


router.get("/", showPhoto);



module.exports = router;