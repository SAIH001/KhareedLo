// -- Model 

const { userRoles } = require("../Models/Roles")
const { userAccounts } = require("../Models/UserAccount")



//Method -------  POST
//Api   --------  http://localhost:5000/role
//Description --  USER ROLES INSERTION FUNCTIONALITY



async function createRoles(req, res) {
    const { Role_Name, Status } = req.body;

    // -- USER ROLE ALREADY EXISTS OR NOT
    const roleExist = await userRoles.find({ Role_Name: Role_Name.toLowerCase() })


    // -- TEST CHECKER OF USER INPUTS
    const roleName_checker = /^[A-Za-z]+$/;

    
    if (roleName_checker.test(Role_Name)) {

        if (roleExist.length > 0) return res.send({ "error": "Already Added in the DataBase" })

        const newRole = await userRoles.create(
            {
                Role_Name: Role_Name.toLowerCase(),
                Status: Status
            }
        )


        return res.status(201).send({ "data": req.body })
    } else {
        return res.send({ "error": "Special character , extra spaces or numbers are not allowed" })
    }
}


//Method -------  GET
//Api   --------  http://localhost:5000/role
//Description --  ALL USER ROLE WILL BE GET THROUH THIS FUNCIONALITY 



async function getRoles(req, res) {
    return res.status(200).send({ "message": "All Roles display here !!" })
}





module.exports = { createRoles, getRoles }