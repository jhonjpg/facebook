const mongoose = require("mongoose");
const{Schema} = mongoose;


const UserSchema = new Schema({
 
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
        lowercase:false,
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

// UserSchema.pre('save', async function (next) {

//     const user = this;
    
//     if(!user.isModified('password')) return next()

//     try {
//         const salt = await bcrypt.genSalt(10)
//         const hash = await bcrypt.hash(user.password, salt)

//         user.password = hash

//         next()
//     } catch (error) {
//         console.log(error)
//         next()
//     }
// });


// UserSchema.methods.comparePassword = async (canditePassword) => {

//     return await bcrypt.compare(canditePassword, this.password)
// }


const Users = mongoose.model('Users', UserSchema)

module.exports = Users;




