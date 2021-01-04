const User = require('../models/User')


const getAllUser = async (req, res) => { 
   try { 
      const users = await User.find() 
      res.status(200).json({ 
         status: 'Success', 
         users
      }) 
   } 
   catch (error) {
      res.status(400).json({ 
         status: 'Fail', 
         error
      }) 
   }
} 

const getSingleUser = async (req, res) => { 
   try { 
      const { id } = req.params 
      const users = await User.findById(id) 
      res.status(200).json({ 
         status: 'Success', 
         users 
      }) 
   } 
   catch (error) { 
      res.status(400).json({ 
         status: 'Fail', 
         error 
      }) 
   } 
} 

const updateUser = async (req, res) => { 
   try { 
      const { id: _id } = req.params 
      const updatedUser = await User.findByIdAndUpdate({_id}, req.body, {new: true}) 
      res.status(200).json({ 
         status: 'Success', 
         updatedUser 
      }) 
   } 
   catch (error) { 
      res.status(400).json({ 
         status: 'Fail', 
         error 
      }) 
   } 
} 

const deleteUser = async (req, res) => { 
   try { 
      const { id: _id } = req.params 
      const deletedUser = await User.findByIdAndDelete({_id}) 
      res.status(200).json({ 
         status: 'Success', 
         deletedUser 
      }) 
   } 
   catch (error) { 
      res.status(400).json({ 
         status: 'Fail', 
         error 
      }) 
   } 
} 

const deleteAllUser = async (req, res) => { 
   try { 
      const deletedUser = await User.deleteMany()
      res.status(200).json({ 
         status: 'Success', 
         deletedUser 
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
   getAllUser, 
   getSingleUser, 
   updateUser, 
   deleteUser, 
   deleteAllUser
}

