function chapdata(req,res,next){
    console.log("az dakhle middlware");
    next();
}
module.exports = chapdata;