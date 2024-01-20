const express = require("express");
const router = express.Router();
const multer  = require('multer')
const { insertPhoto } = require("../Controller/photoController")
// const bodyParser = require('body-parser');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/uploads/")
      
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
      
    }
  })
  const upload = multer({ storage: storage })

router.post("/",upload.single("file"), insertPhoto);



module.exports = router;