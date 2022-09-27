const mongoose = require("mongoose");
const{Schema} = mongoose;


const photoSchema = new Schema({
 
    photo:{
        type: String,
       
    }

})

   


const Photo = mongoose.model('Photo', photoSchema)

module.exports = Photo;




