const mongoose=require("mongoose");
require("dotenv").config();

const xyz_database=() =>{
  mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        socketTimeoutMS: 45000,
        connectTimeoutMS: 30000
    })
    .then( () => console.log("db is connection succesfully and this is test mongoose"))
    .catch((e) => {
        console.log("issue in connecting data bse ",e);
    })

}
module.exports=xyz_database;
