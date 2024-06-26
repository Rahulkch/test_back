const mongoose=require("mongoose");
require("dotenv").config();

const xyz_database=() =>{
  mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
         socketTimeoutMS: 2147483647, // Maximum value for a 32-bit signed integer
    connectTimeoutMS: 2147483647
    })
    .then( () => console.log("db is connection succesfully and this is test mongoose"))
    .catch((e) => {
        console.log("issue in connecting data bse ",e);
    })

}
module.exports=xyz_database;
