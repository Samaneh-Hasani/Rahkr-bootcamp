const express=require('express')
const router=express.Router();
const {GetBooks}=require('../controllers/bookC')
router.get("/:id", GetBooks)
module.exports=router;
