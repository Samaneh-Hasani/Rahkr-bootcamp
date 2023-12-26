const db = require("../Utilities/DataBase");
class TaskModel {

    
  
    async addTask(task) {
      const { title } = task;
      console.log(task);
      const query = "INSERT INTO `tasks`(`title`) VALUES (?)";
      
      let res = await db.connection.execute(query, [title])
      return res;
    }
  
    async getTask() {
      
      const query = "SELECT * FROM `tasks`";
      return await db.connection.execute(query);
      
    }

  
  }
  
  module.exports = new TaskModel();