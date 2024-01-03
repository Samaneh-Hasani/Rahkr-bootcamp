const express = require("express");
const router = express.Router();

const { checkuser } = require("../Controller/loginController")


router.post("/", checkuser);



module.exports = router;