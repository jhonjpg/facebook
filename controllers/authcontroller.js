const Users = require("./models/Users")
const {encrypt, compare} = require("./models/helpers/bcrypt");




const leerHome = async (req, res) => {

    const cuentas = [
        
        {image: "./assets/add.jpg", nombre:"Agregar cuenta"}
    
    ];

    res.render('home', {cuentas: cuentas})
}


const registrarCuentas = async (req, res) => {

    const {name, lastname, email, password, date, gender} = req.body;


    try {

        let users = await Users.findOne({email: email})
       if(users) throw new Error('ya existe el ususario');

       const passWordawait = await encrypt(password);


       users = await new Users({name: name, lastname: lastname, email:email, password:passWordawait, date:date, gender:gender,tokenconfirm: "tretre" });





          await users.save();


       res.redirect("/")


        
    } catch (error) {

        res.json({error: "ocurrio un eroor al registrar este usuario"})

        console.log(error)

        
    }   

}



const confirmarCuenta = async (req, res) => {

    const {token} = req.params

    try {

        const user = await Users.findOne({tokenconfirm: token});
        if(!user) throw new Error("no existe ese Usuario")

        user.cuentaConfirmada = true
        user.tokenconfirm = null

        await user.save()

        res.redirect("/")

    } catch (error) {


        res.json({error: error.message})

        
    }


}


const loginUser = async (req, res) => {

    const {email, password} = req.body

    try {
        

        const user = await Users.findOne({email:email});
        if(!user) throw new Error("no existe ese Usuario")

        if(!user.cuentaConfirmada) throw new Error("falta confirmar cuenta")

       await new Users({email: email, password: password});


        let checkPassword =  await compare(password, user.password);


      

        console.log(checkPassword)
        console.log(password)
        console.log(user.password)


        

       if (checkPassword ){

        res.redirect("/perfil")

       }else{

        throw new Error("contrasena incorrecta")
       }

       

        





    } catch (error) {
  


        console.log(error)

        res.send(error.message)
        
    }




}





module.exports = {

    leerHome,
    registrarCuentas,
    confirmarCuenta,
    loginUser
    
}