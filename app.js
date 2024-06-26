const express=require("express");
const app=express();
require("dotenv").config();
const port=process.env.PORT||8000;

app.use(express.json());
const db=require("./components/db");
db();


// const cors=require("cors")
// app.use(cors());



const x=require("./route/route");
app.use("/route",x)





app.listen(port,() => {
    console.log("listen  or ye terminal m chale ga ",port)
})

app.get("/" ,(req,res) => {
   res.send("this is  is edited home page ")
})