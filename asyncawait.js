let datosUsuario={
    usuario:"jjgallego@gmail.com",
    password:"Admin123*"
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

async function procesarPeticion(datosUsuario){

    try{

        let respuesta= await conectarConNetflix(datosUsuario);
        console.log(respuesta)

    }catch(error){
        console.log(error)

    }

}

procesarPeticion(datosUsuario);