const formidable = require("formidable");
const fs = require("fs")
const path = require("path");
const Users = require("./models/Users");
const Jimp = require("jimp");
const PrivUser = require("./models/PrivateUser");



const perfil = async (req, res) => {


    try {

        const user = await Users.findById(req.user.id).lean()



        res.render('perfil', {user: req.user, photo: user.photo})

        
    } catch (error) {



        req.flash("mensajes", [{msg: "se subio la imagen"}])

        res.redirect('perfil')


        
    }


}

const editarPhoto = async (req, res) => {


const form = new formidable.IncomingForm()
form.maxFilesSize = 50 * 1024 * 1025 //5mb 


form.parse(req, async(err, fields, files)=> {

    try {

        if(err){


            throw new Error("fallo la subida de imagen");

        }

        const file = files.upPhoto;


        if(file.originalFilename === ""){

            throw new Error("por favor agrega una imagen")
        }

        const imageTypes = ["image/jpg","image/jpeg", "image/png", "image/webp"]



        if(!imageTypes.includes(file.mimetype)){

            throw new Error(" agrega una imagen .jpg o .png")
        }


        if(file.size >  50 * 1024 * 1025){

            throw new Error("menos de 5MB por favor")
        }

        const extension = file.mimetype.split("/")[1];


        const dirfile =  path.join(__dirname, `../public/assets/${req.user.id}.${extension}`);



        fs.renameSync(file.filepath, dirfile);



       const image =  await Jimp.read(dirfile)
       image.resize(300, 300).quality(100).writeAsync(dirfile)


        const user = await Users.findById(req.user.id);

        user.photo = `${req.user.id}.${extension}`;

        
        await user.save()




                req.flash("mensajes", [{msg: "se subio la imagen"}])


        
    } catch (error) {


        req.flash("mensajes", [{msg: error.message}])
        console.log(error)
      


        
    }finally{

        return res.redirect("perfil");

    }
})


}

module.exports = {

    perfil,
    editarPhoto
    
}