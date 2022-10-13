const express = require('express');
const {body} = require("express-validator")
const { leerHome, registrarCuentas, confirmarCuenta, loginUser,loginform, registrarform, upPhoto } = require('../controllers/authcontroller');
const { updatefoto } = require('../controllers/photoControllers');
const router = express.Router()




router.get("/", leerHome);


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

router.get("/login", loginform);


router.post("/login",[

    body("email", "El correo electronico que has introducido no esta conectado a una cuenta").trim().isEmail().normalizeEmail(),    
    body("password", "Ingrese una contrasena valida").trim().isLength({min: 2}) ], loginUser );
    





router.get("/perfil");
router.post("/perfil", upPhoto);














router.get("/perfil", (req, res) => {

    res.render("perfil")


});




module.exports = router;