const mongoose = require("mongoose");
const{Schema} = mongoose;


const UserSchema = new Schema({


    photo:{

        
        type: String,
        default: null
       
    },

 
    name:{
        type: String,
        lowercase:true,
        required: true,
        unique:true
    },

   
    lastname:{

        type: String,
        lowercase:true,
        required: true,
        unique:true


    },


     
    email:{
        type: String,
        lowercase:true,
        required: true,
        unique:true
    },
 
    password:{
        type: String,
        required: true,
        
    },


    date:{
        type: String,
        lowercase:true,
        required: true,
    },


    gender:{
        type: String,
        lowercase:true,
        required: true,
    },

    tokenconfirm:{
        type: String,
        default:null
    },

    cuentaConfirmada:{
        type: Boolean,
        default:false
       
    }


    
})


const Users = mongoose.model('Users', UserSchema)

module.exports = Users;




