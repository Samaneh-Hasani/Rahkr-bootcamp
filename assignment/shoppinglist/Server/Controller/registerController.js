const UserModel = require("../models/user");



  exports.register =async (req, res) => {
    let result =await UserModel.registerUser();
    res.json(result[0]);
  }