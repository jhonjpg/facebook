
$(document).ready(function(){



    function validar(){



    
      
    const expresiones = {
        nombre: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        contrasena: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    }



        let input = $("#register input");
        let name = $(".name").val();
    let names = $(".name");

    let lastname = $(".lastname").val();
    let lastnames = $(".lastname");


    let email = $(".email").val();
    let emails = $(".email");

    let password = $(".password").val();
    let passwords = $(".password");

    let date = $(".date");
    let genders = $(".gender");

    let iname = $(".i-name");
    let ilastname = $(".i-lastname");
    let iemail = $(".i-email");
    let ipassword = $(".i-password");


    



    names.blur(() => {


        if(names.val().length >= 1 ){

            names.css('border', 'solid 1px #ccd0d5') 
            iname.css('display', 'none') 



        }else {

            names.css('border', 'solid 1px red') 
            iname.css('display', 'block') 



        }

    })






    lastnames.blur(() => {


        if(lastnames.val().length >= 1){

            lastnames.css('border', 'solid 1px #ccd0d5') 
            ilastname.css('display', 'none') 



        }else {

            lastnames.css('border', 'solid 1px red') 
            ilastname.css('display', 'block') 



        }

    })





    emails.blur(() => {


        if(emails.val().length >= 1){

            emails.css('border', 'solid 1px #ccd0d5') 
            iemail.css('display', 'none') 



        }else {

            emails.css('border', 'solid 1px red') 
            iemail.css('display', 'block') 


        }
    })



    passwords.blur(() => {


        if(passwords.val().length >= 1){

            passwords.css('border', 'solid 1px #ccd0d5') 
            ipassword.css('display', 'none') 



        }else {

            passwords.css('border', 'solid 1px red') 
            ipassword.css('display', 'block') 



        }

    })




    date.blur(() => {


        if(date.val().length >= 1){

            date.css('border', 'solid 1px #ccd0d5') 



        }else {

            date.css('border', 'solid 1px red') 


        }

    })


    


}

validar()



})




























// #ccd0d5

// if(name === "" || name === "" || lastname === "" || email === "" || password === "" || gender === ""){


//     names.addClass("incorrect")
//     lastnames.addClass("incorrect")
//     emails.addClass("incorrect")
//     passwords.addClass("incorrect")
//     genders.addClass("incorrect")

//     names.removeClass("name")



// }


// name.blur(() => { 
//     name.css('border', 'solid 1px red') 
// })


// lastname.blur(() => { 
//     lastname.css('border', 'solid 1px red') 
// })


      
//     const expresiones = {
//         name: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
//         nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
//         password: /^.{4,12}$/, // 4 a 12 digitos.
//         correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//         telefono: /^\d{7,14}$/ // 7 a 14 numeros.
//     }


//          const validarFormulario = (e) => {

//           switch (e.target.name){

//             case "name":

//                     if(expresiones.name.test(e.target.value)){

//                         name.classList.remove("incorrecto")



//                     }else{

//                         name.classList.add("incorrecto")


//                     }


//                 breake;

//                 case "lastname":

            
//                     breake;

//                     case "email":

            
//                         breake;

//                         case "password":

            
//                             breake;

//                             case "gender":

            
//                                 breake;
//           }




//          }


    
    
// //          focus.each(focu => {

// // console.log(focu.focu)               

             
// //          });
    
    
          
// // focus.forEach((focu) => {
// // 	focu.keyup(validarFormulario)
// // 	focu.blur(validarFormulario)
// // });


    
//     // focus.forEach((focu), )


//     // focus.blur(() => {


//     //     focus.css('border', 'solid 1px red')


//     //     console.log("hecho")

//     // })


    
//     name.css('border', 'solid 1px red') 
