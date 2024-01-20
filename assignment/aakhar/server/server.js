
const express=require("express")
const cors=require("cors")
const photoroutes=require("./Routes/photoRouter")
const showroutes=require("./Routes/showRouter")
const PORT=3000;

app=express()
app.use(express.json())
app.use(express.static("public"))
app.use(cors())

// //////
app.use("/sabteax",photoroutes)
////////
app.use("/showax",showroutes)


app.listen(PORT,()=>{
    console.log("it is RUNN");
})