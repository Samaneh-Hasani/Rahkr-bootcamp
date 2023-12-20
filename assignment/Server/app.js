const express=require('express')
const cors=require('cors')
const playerRouter=require('./routes/playerRouter')
const app=express();


app.use(cors());
app.use(express.json());
let players;

// app.use("/", playerRouter);
app.post("/", (req,res,next)=>{
    players=req.body;
    // const players=players=req.body
    // console.log(players)
    // res.json({m:'hh'})
    //  console.log( res.json(players).body) 
});
app.get("/",(req,res,next)=>{

    res.json(players)
});
app.listen(3133,()=>{
    console.log("salam");
})