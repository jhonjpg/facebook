const Photo = require ("./models/photo");




const updatefoto = async (req, res) => {


    const pic = [
        
        {fotoUp: "../public/assets/camara.jpg"}
    
    ];

    res.render('perfil', {pic: pic})
}

module.exports = {

    updatefoto
    
}