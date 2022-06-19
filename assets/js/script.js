console.log("Hola! estoy dentro del archivo script.js!!!!")

$(function () {
    console.log("Estoy dentro de la función autoejecutable de jquery")

    //Aquí se colocaría la acción de "hide" del modal

    $("#enviarCorreo").click(function (){
        alert("El correo fue enviado correctamente...")

        // Aquí se colocaría el "show" del modal
    })

    $(".card-title").click(function(){
        $(".card-text").toggle()
    })

    $('body').on('dblclick','h4',function(){
        $(this).css("color","red")
    })




})