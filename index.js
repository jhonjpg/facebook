

const express = require("express");
const session = require("express-session");
const flash = require("connect-flash")
const passport = require("passport")
const {create} = require ("express-handlebars");
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



passport.serializeUser((user, done) => 
done(null, {id: user._id, name: user.name}));

passport.deserializeUser(async (user, done) => {

    const userdb = await Users.findById(user.id)

    return done(null, {id: userdb._id, name: userdb.email})
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


app.use( "/", require("./rutas/auth"));


app.use( "/loginrut", require("./rutas/loginrut"));

            //middleware            


app.use(express.static(__dirname + "/public"));


app.use( "/loginrut", require("./rutas/loginrut"));


app.listen(port, () => {

    console.log("bien hecho")
})


// const http = require('http');


// const server = http.createServer((req , res) => {

//     res.end('esta es la respuesta')
// });

// server.listen(port, () => console.log("fuiciona"))








// const hbs = create({
//     extname: ".hbs",
//     partialsDir: ["views/components"]
// });

// app.engine(".hbs", hbs.engine);
// app.set("view engine", ".hbs");
// app.set("views", "./views")

// console.log("saludo desde el  backend");
// app.use(express.urlencoded({extended: true}))
// app.use("/", require("./routes/home"));
// app.use("/usuario", require("./routes/auth"))

// app.use(express.static(__dirname + "/public"));


// const PORT = process.env.PORT || 4000
// app.listen(PORT, () => {

// console.log("funciona" + " " + PORT);
// })

// console.log("como estan todos")

