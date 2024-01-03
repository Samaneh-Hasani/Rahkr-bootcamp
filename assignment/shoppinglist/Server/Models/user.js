const db = require("../Utilities/DataBase");
const bcrypt=require("bcrypt")
class UserModel {

    
  
    async checkUser(data) {
      const { username,password } = data;
      console.log(data);
      const query = "select from `users`(`username`) VALUES (?)";
      
      const [user] = await db.connection.execute(query, [username])
      if(user.length===0){return "useer not found"}
      const ispassValid=await bcrypt.compareSync(password,user[0].password)


     
       if (isPasswordValid) {
        const token = jwt.sign({ username }, "secret" , { expiresIn: "1h" });
      return token;}
      
    }


    async registerUser(user){

     
        let {username,password}=user
        
        const salt = await bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hashSync(password, salt);
        let query="insert into users (username,password) values( ?,?)"
        await db.connection.execute(query,[username,hashedPassword])
  
        return true
      
    }
  
  
  
  
  }
  
  module.exports = new UserModel();