const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../../models/user')



  // ==================================================
  // Register
  // ==================================================

  const registerUser = async(req,res) => {
   
    const {userName, email, password} = req.body

    try {
      
        const checkUser = await User.findOne({email})
        if(checkUser) return res.json({success : false, message: 'Email is already registered. Please use a different email or log in.'})
        const hashPassword = await bcrypt.hash(password, 12);
        const newUser = new User({
        userName,
        email,
        password: hashPassword,
        });
        
        await newUser.save();
        res.status(200).json({
          success: true,
          message: "Account Created Successfully!",
        });
      } catch (e) {
        console.log(e);
        res.status(500).json({
          success: false,
          message: "Some error occured",
        });
      }
      
  }

  // ==================================================
  // Login
  // ==================================================


  const loginUser= async(req,res) => {
    const { email, password} = req.body
    
        try {
          const checkUser = await User.findOne({email})
          if(!checkUser) return res.json({
            success : false,
            message: 'Account does not exist. Please check your details or sign up for a new account.'
          })

          const checkPasswordMatch = await bcrypt.compare(password, checkUser.password)
          if(!checkPasswordMatch) return res.json({
            success : false,
            message: 'Incorrect password. Please try again.'
          })

          const token = jwt.sign({
            id: checkUser._id,
            role: checkUser.role,
            email: checkUser.email
          }, 'CLIENT_SECRET_KEY', {expiresIn : '60mins'})

          res.cookie('token', token, {httpOnly: true, secure: false}).json({
            success : true,
            message : 'Login successful.',
            user : {
              email : checkUser.email,
              role : checkUser.role.at,
              id : checkUser._id
            }
          })

        } catch (e) {
            console.log(e);
            res.status(500).json({
                status: false,
                message: 'Error occured'
            })
        }
  }


  // ==================================================
  // Logout
  // ==================================================

  // ==================================================
  // Auth middleware
  // ==================================================


  module.exports = {registerUser, loginUser}