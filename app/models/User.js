// const mongoose = require('mongoose')

// const Schema = mongoose.Schema

// const visitorSchema = new Schema({
//     name : {
//         type : String,
//         required : true
//     }

// })

// const Visitor = mongoose.model('Visitor', visitorSchema)

// module.exports = {
//     Visitor
// }

const mongoose = require('mongoose')
const Schema = mongoose.Schema   
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 5
    },
    email: {
        type: String,
        required: true,
        unique: true,
       

    },
    phone: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 11
    },
   
})


const User = mongoose.model('User',userSchema)

module.exports = {
    User
}