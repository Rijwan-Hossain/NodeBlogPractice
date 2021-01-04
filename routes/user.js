const express = require('express'); 
const { 
   getAllUser, 
   getSingleUser, 
   updateUser, 
   deleteUser, 
   deleteAllUser
} = require('../controllers/userController') 

const { routeProtection } = require('../controllers/authController')

const route = express.Router(); 

route.get('/', getAllUser) 
route.get('/:id', getSingleUser) 
route.patch('/:id', updateUser) 
route.delete('/:id', routeProtection, deleteUser) 
route.delete('/', deleteAllUser) 

module.exports = route; 