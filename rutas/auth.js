const express = require('express');
const { leerHome, registrarCuentas, confirmarCuenta, loginUser } = require('../controllers/authcontroller');
const { updatefoto } = require('../controllers/photoControllers');
const router = express.Router()




router.get("/", leerHome)
router.post("/register", registrarCuentas)
router.get("/confirmarCuenta/:token", confirmarCuenta)
router.post("/login", loginUser );
router.get("/perfil", updatefoto);





router.get("/login", (req, res) => {

    

    res.render("login")
});





router.get("/register", (req, res) => {

    res.render("register")


});


router.get("/perfil", (req, res) => {

    res.render("perfil")


});




module.exports = router;