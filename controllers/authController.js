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


module.exports = {
   signupUser
}