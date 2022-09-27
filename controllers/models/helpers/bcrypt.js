const bcrypt = require('bcryptjs')




const encrypt = async (password) => {

    const salt =  await bcrypt.genSalt(5)

    return await bcrypt.hash(password, salt)
}



const compare = async (passwordtext, password) => {

    return await bcrypt.compare(passwordtext, password)
}


module.exports = {


    encrypt,
    compare
}