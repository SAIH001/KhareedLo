const express = require("express");

const app = express();


// -- ENV

require("dotenv").config();


// MIDDLEWARES

app.use(express.json());
app.use(express.urlencoded({extended:true}))

// - DB
const {connectionDB} = require("./Config/Database")


// MODELS - IMPORTED
const {  createRoles , getRoles  } = require("./Controllers/RolesController")


// -- USER ROLE API [ GET , POST  ]
app.route("/role").get(getRoles).post(createRoles)





// -- SERVER LISTEN
app.listen(process.env.PORT,function(){
    console.log(`The Server is running on the port ${process.env.PORT}`)
    connectionDB()
})

