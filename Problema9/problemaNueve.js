//declarar la funcion principal//
function crearPadwan(nombre,edad,planeta,estatura,clasificarPadwan){
    setTimeout(function(){
        //Logica de la principal
        let padwan={ //creaccion de objeto agrupando lo solicitado es decir manera de acumular todo en un bloque
        nombreEstudiante:nombre,
        edadEstudiante:edad,
        planetaEstudiante:planeta,
        estaturaEstudiante:estatura
        }
clasificarPadwan(padwan) //se llama la segunda funcion y en el llamar el objeto que cree
    },2000)
}

//llamar funcion principal
crearPadwan("crood",200,"yodora",20,function(padwan){ //para llamarlo o usar interpolacion se usa ``//
if(padwan.edadEstudiante<150){
    console.log(`${padwan.nombreEstudiante} tiene ${padwan.edadEstudiante} vas a la clase de manejo de la fuerza`)
}else{
    console.log(`${padwan.nombreEstudiante} tiene ${padwan.edadEstudiante} vas a la clase de manejo del sable de luz`)
}

},)
