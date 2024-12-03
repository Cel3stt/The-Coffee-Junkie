const User = require("../models/userModels")

const createUser = async (req,res) => {
    const email = req.body.email
    const findUser = await User.find({email:email});
        if(!findUser){
            //create new user
            const newUser = User.create(req.body)
            res.json(newUser)
        } else{
            //user already exist
            res.json({
                msg: "User Already Exists",
                success: false,
            })
        }
}
module.exports = {createUser}