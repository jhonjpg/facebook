const express = require('express');
const {body} = require("express-validator")
const { leerHome, registrarCuentas, confirmarCuenta, loginUser,loginform, registrarform, upPhoto, closeSession } = require('../controllers/authcontroller');
const { updatefoto } = require('../controllers/photoControllers');
const verifyUser = require('../middleware/verifyUser');
const router = express.Router()




router.get("/", leerHome);

                                    //register
router.get("/register", (req, res) => {

    res.render("register")


});


router.post("/register",[
    body("name", "Ingrese un nombre valido").trim().notEmpty(),
    body("lastname", "Ingrese un apellido valido").trim().notEmpty(),    
    body("email", "Ingrese una email valida").trim().isEmail().normalizeEmail(),
    body("password", "Ingrese una contrasena valida").trim().notEmpty().isLength({min: 2}),
    body("gender", "Ingrese una genero valida").notEmpty()



], registrarCuentas)

router.get("/register",registrarform)



router.get("/confirmarCuenta/:token", confirmarCuenta)


                                //login

router.get("/login", loginform);


router.post("/login",[

    body("email", "El correo electronico que has introducido no esta conectado a una cuenta").trim().isEmail().normalizeEmail(),    
    body("password", "Ingrese una contrasena valida").trim().isLength({min: 2}) ], loginUser );
    


                        // perfil


router.get("/perfil", verifyUser) ;
router.post("/perfil",  updatefoto);

router.get("/logout", closeSession)














router.get("/perfil", (req, res) => {

    res.render("perfil")


});




module.exports = router;