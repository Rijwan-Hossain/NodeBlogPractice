const express = require('express') 
const mongoose = require('mongoose') 
const morgan = require('morgan')
const userRouter = require('./routes/user') 
const authRouter = require('./routes/auth') 

// Create App 
const app = express() 

// Global middlewares 
app.use(express.json()) 
app.use(morgan('tiny')) 

// Port
const port = process.env.PORT 


// App Routes
app.use('/', authRouter) 
app.use('/user', userRouter) 

app.get('*', (req, res) => { 
   res.send('404 Not Found') 
}) 


// Running App
app.listen(port, () => { 
   console.log('App is running on port: ' + port); 
   mongoose.connect( 
      process.env.DATABASE_URL, 
      { 
         useNewUrlParser: true, 
         useUnifiedTopology: true, 
         useCreateIndex: true, 
         useFindAndModify: false, 
         useUnifiedTopology: true,
         autoIndex: true // for unique
      }, 
      () => console.log('DB connected') 
   ) 
}) 

