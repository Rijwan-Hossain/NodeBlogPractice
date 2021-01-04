const mongoose = require('mongoose') 
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({ 
   name: { 
      type: String, 
      required: true 
   },
   email: { 
      type: String, 
      unique: true, 
      required: true, 
      lowercase: true, 
      trim: true, 
      validate: { 
         validator: (data) => validator.isEmail(data), 
         message: 'Please enter a valid email'
      } 
   },
   age: { 
      type: Number, 
      default: 19 
   }, 
   password: { 
      type: String, 
      required: true, 
      select: false 
   }, 
   confirmPassword: { 
      type: String, 
      required: true, 
      validate: { 
         validator: function() { 
            return this.password === this.confirmPassword
         }, 
         message: 'Password doesn\'t match'
      } 
   }, 
}) 

userSchema.pre('save', async function(next) { 
   this.password = await bcrypt.hash(this.password, 12); 
   this.confirmPassword = undefined; 
   next(); 
}) 


const User = mongoose.model('User', userSchema); 
module.exports = User; 