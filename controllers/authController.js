const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/User')

const signupUser = async (req, res) => { 
   try { 
      const user = await User.create(req.body) 

      res.status(201).json({ 
         status: 'Success',
         info: user
      }) 
   } 
   catch (error) { 
      res.status(400).json({ 
         status: 'Fail', 
         error 
      }) 
   } 
} 

const signinUser = async (req, res) => { 
   try { 
      // Get data 
      const {email, password} = req.body 
      if(!email || !password) { 
         return res.status(400).json({ 
            status: 'Fail', 
            message: 'Email or password not given' 
         }) 
      } 

      // Check if user exist 
      const user = await User.findOne({email}).select('+password')
      if(!user) { 
         return res.status(400).json({ 
            status: 'Fail', 
            message: 'Wrong Email' 
         }) 
      } 

      // Match password 
      const result = await bcrypt.compare(password, user.password) 
      if(!result) { 
         return res.status(400).json({ 
            status: 'Fail', 
            message: 'Wrong Password' 
         }) 
      } 

      // Create & send JWT token 
      const token = jwt.sign( 
         {id: user._id}, 
         'my_secret', 
         {expiresIn: '24h'} 
      ) 

      res.status(200).json({ 
         status: 'Success', 
         token 
      }) 
   } 
   catch (error) { 
      res.status(400).json({ 
         status: 'Fail', 
         error 
      }) 
   } 
} 


module.exports = { 
   signupUser, 
   signinUser
} 