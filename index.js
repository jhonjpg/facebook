

const express = require("express");
const session = require("express-session");
const flash = require("connect-flash")
const passport = require("passport")
const {create} = require ("express-handlebars");
const csrf = require("csurf")
const Users = require("./controllers/models/Users");
require('dotenv').config()
require('./database/db')




const app = express();

app.use(session({

    secret: 'itachi',
    resave: false,
    saveUninitialized:false,
    name:"darkess"
}))



app.use(flash());




app.use(passport.initialize())
app.use(passport.session()); 



passport.serializeUser((user, done) => done(null, {id: user._id, name: user.name}));


passport.deserializeUser(async (user, done) => {

    const userdb = await Users.findById(user.id)



    return done(null, {id: userdb._id, name: userdb.name})
})


const hbs = create({
    extname: ".hbs",
    partialsDir: ["views/components"]
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views")





require('dotenv').config()
require('./database/db')
const port = 3000;



app.use(express.urlencoded({extended: true}))



                            // csrf
                            app.use(csrf())


                            app.use((req, res, next) => {
                            
                            
                                res.locals.csrfToken = req.csrfToken();
                                res.locals.mensajes = req.flash("mensajes");
                            
                                next()
                            })

app.use( "/", require("./rutas/auth"));

app.use( "/loginrut", require("./rutas/loginrut"));

           

                            //middleware            



app.use(express.static(__dirname + "/public"));


app.use( "/loginrut", require("./rutas/loginrut"));


app.listen(port, () => {

    console.log("bien hecho")
})

