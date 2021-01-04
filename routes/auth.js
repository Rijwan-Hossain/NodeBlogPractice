const express = require('express'); 
const { 
   signupUser, 
   signinUser
} = require('../controllers/authController') 

const route = express.Router(); 

route.post('/registration', signupUser) 
route.post('/login', signinUser) 
route.post('/forgetPassword', () => {}) 
route.post('/changePassword', () => {}) 

module.exports = route; 