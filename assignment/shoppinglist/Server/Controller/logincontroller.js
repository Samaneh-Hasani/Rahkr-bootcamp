const UserModel = require("../models/user");



  exports.checkuser =async (req, res) => {
    let result =await UserModel.checkUser();
    res.json(result[0]);
  }