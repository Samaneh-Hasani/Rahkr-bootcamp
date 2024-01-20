const photos = require("../Models/photos")




exports.insertPhoto =async (req, res) => {

  
  console.log("req.body.nam",req.body.name);
  console.log("req.file.nam",req.file.originalname);
    try {
      const responseData={
                message: "succesfuly",
                originalFileName:req.file.originalname,
                mimeType:req.file.mimeType,
                sizeInBytes:req.file.sizeInBytes
            };
    let data=await photos.create({
        name: req.body.name,
        // url:responseData.originalFileName
        url: 'http://localhost:3000/uploads/'+responseData.originalFileName
       
    });
    
    
      res.status(200).json(data)
    } catch (error) {
      res.json({message:error},400);
    }
  }
 
  exports.showPhoto=async (req, res) => {
    
  try {
   let data=await photos.findAll();
  //  console.log("data of findAll",data)
   res.json(data,200);
  }catch (error) {
      res.json({message:error},400);
    }
 }