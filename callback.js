//Datos del usuario
let datosUsuario={
    usuario:"jjgallego@gmail.com",
    password:"Admin123*"
}

//DECLARE (DECIR QUE HACE) la funcion PRINCIPAL
//LLamo a mi funcion secundario o CALLBACK
function conectarConNetflix(datos,generarRespuestaCallback){
    
    console.log("Procesando la peticion...");
    setTimeout(function(){

        if(datos.usuario==="jjgallego@gmail.com" && datos.password==="Admin123*"){
              //login ok
            generarRespuestaCallback(200,"bienvenido a netflix")
        }else{
            //login fail
            generarRespuestaCallback(204,"No estas registrado, suscribete...")
        }
    },5000)

    //preguntar si los datos son correctos

}

//Utilizar (LLAMAR) la funcion principal
//DECLARO LO QUE HACE EL CALLBACK 
conectarConNetflix(datosUsuario,function(codigo,mensaje){


    if(codigo==200){
        console.log(mensaje)
        console.log("Cargando Peliculas....");
    }else{
        console.log(mensaje)
    }

})