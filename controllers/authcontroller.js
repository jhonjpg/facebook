const Users = require("./models/Users")
const PrivUser = require("./models/PrivateUser");
const {validationResult} = require("express-validator")
const {encrypt, compare} = require("./models/helpers/bcrypt");




const leerHome = async (req, res) => {



    try {



        const user = await Users.find().lean()


        if(user){


                const cuentas = [ {image: user[0].photo, nombre: user[0].name},

            ]


            res.render('home',{cuentas: cuentas})


            console.log("todo bien")

        }
        
     }catch (error) {


        console.log(error)
        console.log("todo mal")
        res.render('home')

        
    }



}




const registrarform =  (req, res) => {

    res.render("register")


    
}


const registrarCuentas = async (req, res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()) {



        req.flash("mensajes", errors.array())

   

        return res.redirect("register")
    }




    const {name, lastname, email, password, date, gender} = req.body;



    try {

        let users = await Users.findOne({email: email})
       if(users) throw new Error('ya existe el ususario');


       const passWordawait = await encrypt(password);
       

       users = await new Users({name: name, lastname: lastname, email:email, password:  passWordawait, date:date, gender:gender,tokenconfirm: "tretre" });


          await users.save();


          req.flash("mensajes", [{msg: "Revisa tu correo electronico y valida cuenta"}])


          res.redirect("/")


        
    } catch (error) {


        req.flash("mensajes", [{msg: error.message}])

         return res.redirect("/register")


        
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


        req.flash("mensajes", [{msg: error.message}])
        return res.render("/")
        
    }


}

const loginform =  (req, res) => {


    res.render("login")



}


 
const loginUser = async (req, res) => {

    const errors = validationResult(req);


    if(!errors.isEmpty()) {

        req.flash("mensajes", errors.array())

        return res.redirect("/login")
    }



    const {email, password} = req.body

    try {
        
        const user = await Users.findOne({email:email});
        if(!user) throw new Error("El correo electronico que has introducido no esta conectado a una cuenta")

        if(!user.cuentaConfirmada) throw new Error("falta confirmar cuenta")

       await new Users({email: email, password: password});

            // const passWordawait = await encrypt(password); 

            
        if((!await compare(password, user.password)))  throw new Error("contrasena incorrecta");





            //me esta creando la sesion de usuario atraves de passport
        req.login(user, function(err){

            if(err) throw new Error("error al crear la sesion")
            res.redirect("/perfil")
        })


       
    } catch (error) {
  
        console.log(error)

        req.flash("mensajes", [{msg: error.message}])
        return res.redirect("login")

        
    }




}



const closeSession = (req, res) =>  {


   req.session.destroy()
    
    return res.redirect("/")

}





// const upPhoto = async (req, res) => {

// const {upPhoto}= req.body


//     try {


//         const users = await PrivUser.find({user: req.user.id})



//         return  res.render("perfil", {users: users} );



        
//     } catch (error) {


//         req.flash("mensajes", [{msg: error.message}])
//         return res.render("perfil")

        
//     }

// }




module.exports = {

    leerHome,
    registrarCuentas,
    registrarform,
    confirmarCuenta,
    loginUser,
    loginform,
    closeSession
    
}