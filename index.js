const express = require("express");

const app = express();


// -- env

require("dotenv").config();


// - db
const {connectionDB} = require("./Config/Database")

// -- model 

const {userRoles} = require("./Models/Roles")
const {userAccounts} = require("./Models/UserAccount")




// -- server listen
app.listen(process.env.PORT,function(){
    console.log(`The Server is running on the port ${process.env.PORT}`)
    connectionDB()
})

