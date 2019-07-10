const express = require('express')
const cors = require('cors')
//const port = process.env.PORT ||  3000
const app = express()
app.use(express.json())
const port = 3005

//database connection
const {mongoose} = require('./config/database')


//  models
// 
const{User} = require('./app/models/User')


//controllers

const { userRouter } = require('./app/controllers/UserControllers')


// urlrouting
app.use(cors())

app.use('/users', userRouter)


app.listen(port,function(){
    console.log('listening on port',port)
})