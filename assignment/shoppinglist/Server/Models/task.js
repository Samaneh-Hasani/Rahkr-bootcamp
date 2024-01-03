const db = require("../Utilities/DataBase");
const bcrypt=require("bcrypt")
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
    // assync register(user){
    //   const {username,password}=data;
    //   const salt=await bcrypt.genSalt
    //   consthashpassword=await bcrypt.hash(password), salt
    // }

  
  }
  
  module.exports = new TaskModel();