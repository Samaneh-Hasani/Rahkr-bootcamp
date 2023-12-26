const TaskModel = require("../models/task");


exports.insertTask =async (req, res) => {
    let result = TaskModel.addTask(req.body);
    res.json(result);
  }
  exports.showTask =async (req, res) => {
    let result =await TaskModel.getTask();
    res.json(result[0]);
  }
 