const mongoose=require("mongoose");
require("dotenv").config();

const xyz_database=() =>{
    mongoose.connect(process.env.DATABASE_URL)
    .then( () => console.log("db is connection succesfully and this is test mongoose"))
    .catch((e) => {
        console.log("issue in connecting data bse ",e);
    })

}
module.exports=xyz_database;