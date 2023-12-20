const express=require('express')
const router=express.Router();
const {addPlayers}=require('../controllers/playerControl')
router.get("/", addPlayers)
module.exports=router;
