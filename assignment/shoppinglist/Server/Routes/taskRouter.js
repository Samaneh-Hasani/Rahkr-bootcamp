const express = require("express");
const router = express.Router();

const { insertTask,showTask } = require("../Controller/taskController")

router.get("/",showTask );

router.post("/", insertTask);
router.get("/",showTask );


module.exports = router;