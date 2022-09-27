const mongoose = require("mongoose");
const{Schema} = mongoose;
const bcrypt = require('bcryptjs')

const UserSchema = new Schema({
 
    UserName:{
        type: String,
        lowercase:true,
        required: true
    },

    UserEmail:{

        type: String,
        lowercase:true,
        required: true,
        unique:true


    }, 
    UserPassword:{

        type: String,
        required: true,
    }, 


    tokenConfirm:{

        type: String,
        default:null, 


    }, 
    cuentaConfirm:{

        type: Boolean,
        default:false, 


    },
    
})

UserSchema.pre('save', async function (next) {

    const user = this;
    
    if(!user.isModified('UserPassword')) return next()

    try {
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(user.UserPassword, salt)

        user.UserPassword = hash

        next()
    } catch (error) {
        console.log(error)
        next()
    }
})

module.exports = mongoose.model('User', UserSchema);