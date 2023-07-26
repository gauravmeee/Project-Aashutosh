const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/authn")
    .then(() => {
        console.log("mongo connected");
    })
    .catch(() => {
        console.log("failed to connect");
    })

const loginSchema = new mongoose.Schema({
    

    
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    realname: {
        type: String,
        required: true,
        unique: true
    },
    phno: {
        type: Number,
        required:true
    },
    exam: {
        type: String,
        required:true
        
    }
   

   

})

    

const collection = new mongoose.model("collection1", loginSchema)
module.exports = collection



