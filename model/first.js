const mongoose=require("mongoose")
const userschema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    nickname:{
        type:String,
        require:true
    }
})
module.exports=mongoose.model("display",userschema);
