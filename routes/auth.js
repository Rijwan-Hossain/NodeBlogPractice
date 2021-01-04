const express = require('express'); 
const { 
   signupUser, 
} = require('../controllers/authController') 

const route = express.Router(); 

route.post('/registration', signupUser) 
route.post('/login', () => {}) 
route.post('/forgetPassword', () => {}) 
route.post('/changePassword', () => {}) 

module.exports = route; 