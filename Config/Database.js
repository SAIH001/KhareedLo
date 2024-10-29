const mongoose = require("mongoose");




async function connectionDB(){
try{

    const connectDB =await  mongoose.connect(process.env.DB)
    if(connectDB) console.log("MONGODB ATLAS CONNECTED SUCCESSFULLYY !!")
    }catch(error){

        console.log(error)

    }
}


module.exports = {connectionDB}