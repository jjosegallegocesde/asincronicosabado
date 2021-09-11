//Datos del usuario
let datosUsuario={
    usuario:"jjgallego@gmail.com",
    password:"Admin123**"
}

function conectarConNetflix(datos){
    
    console.log("Procesando la peticion...");

    let promesa=new Promise(function(resolve,reject){

        setTimeout(function(){

            if(datos.usuario==="jjgallego@gmail.com" && datos.password==="Admin123*"){
                  //login ok
                resolve("bienvenido a netflix")
            }else{
                //login fail
               reject("No estas registrado, suscribete...")
            }
        },5000)
    })

    return promesa;
    
    
}

conectarConNetflix(datosUsuario)
.then(function(respuesta){
    console.log(respuesta)

})
.catch(function(respuesta){
    console.log(respuesta)
})