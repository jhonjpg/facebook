const mongoose = require("mongoose");
const{Schema} = mongoose;


const privateUserSchema = new Schema({
 

    user: {

        type:Schema.Types.ObjectId,
        ref:"Users", 
        required:true

    }

})

   


const PrivUser = mongoose.model('PrivateUser', privateUserSchema)

module.exports = PrivUser;




