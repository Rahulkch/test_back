const express=require("express");
const path=express.Router();

const {dumy}=require("../components/dumy");
const{getTodos,saving}=require("../components/contoller")



path.get("/dumy",dumy)
path.get("/getall",getTodos)
path.post("/save",saving)



module.exports=path;