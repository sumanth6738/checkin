// const express = require('express')
// const router = express.Router()
// const { Visitor } = require('../models/vistorModel')

// router.get('/', function(req, res){
//     Visitor.find()
//     .then(function(visitor){
//         res.send(visitor)
//     })
//     .catch(function(err){
//         res.send(err)
//     })
// })

// router.post('/', function(req, res) {
//     const body = req.body
//     const visitor = new Visitor(body)
//     visitor.save()
//     .then(function(visitor){
//         res.send(visitor)
//     })
//     .catch(function(err){
//         res.send(err)
//     })
// })

// module.exports = {
//     visitorController : router
// }

const express = require('express')
const router = express.Router()
const { User } = require('../models/User')

// get user list
router.get('/',function(req,res){
    // will return all the document in the collection
    User.find()
    .then(function(user){
        res.send(user)
    })
    .catch(function(err){
        res.send(err)
    })
})

// register
router.post('/register',function(req,res){
    const body = req.body
   
   
    const user = new User(body)
    // console.log(user.isNew)
   
    user.save()
        .then(function(user){
            console.log(user.isNew)
            res.send(user)
        })
        .catch(function(err){
            res.send(err)
        })
})



module.exports = {
    userRouter: router
}