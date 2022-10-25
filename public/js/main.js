$(document).ready(function(){


  

let back = $(".whitediv")
let bck = $(".darkdiv")




back.click( () => {


    location.replace("/")

})



bck.click( () => {


    location.replace("/")

})

let close = $(".close")
let salto = $("#salto")


close.click( () => {

    salto.css('display', 'none') 
    close.css('display', 'none') 

    console.log("me diste")


})





let registrarse = $(".registrate");

registrarse.click((e) => {

e.prevenDefault()
    let input = $(".register input")

    let name = $(".name").val();
    let lastname = $(".lastname").val();
    let email = $(".email").val();
    let password = $(".password").val();

    if(input === " "){

        input.css('border', 'solid 1px red') 


                   
    }





})





// window.location.href = ("/")





})