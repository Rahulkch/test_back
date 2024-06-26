const display=require("../model/first");

exports.saving=async(req,res)=>{
     try{
        const {name,nickname}=req.body;
        console.log("hey therr");
        const response = await display.create({name,nickname});
        //send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry Created Successfully'
            }
        );
     }
     catch(err){
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })

     }
}
// exports.getall=async(req,res)=>{
//    try{
//     const x= await display.find({});
  
    
//     console.log(data)
//      return res.status(200)
//     .json({
//         success:true,
//         data:data,
//         message:"all dta fetch successfully",
//     })



//    }
//    catch(e){
//      return res.status(500)
//         .json({
//             success:false,
//             data:"Err while fetching data ",
//             message:"err.message",
//         })

//    }
// }


exports.getTodos = async (req, res) => {
    try {
      // fetch all todo items from database
      const todos = await display.find({});
  
      // Response
      res.status(200).json({
        success: true,
        data: todos,
        message: "Entire Todo Data is Fetched",
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        success: false,
        error: err.message,
        message: "Server error",
      });
    }
  };