
class Alojamiento{
    constructor(nombre , precio_noche , noches_disponibles){

        this.nombre = nombre;
        this.precio_noche = precio_noche;
        this.noches_disponibles = noches_disponibles;
    
    }

    get_datos(){
        console.log(" ");
        console.log("Alojamiento: " , this.nombre);
        console.log("Precio:" , this.precio_noche);
    }

    get_noches_disponibies(){

        if(this.noches_disponibles < 3){
            return false
        } 
        else{
            return true
        }
    }

    update_noches_disponibles(cantidad){
        this.noches_disponibles = this.noches_disponibles - cantidad;
    }


    }


function buscar_alojamiento(alojamiento){{

    return alojamiento.nombre == reserva_usuario;
}}


// Herramienta para el propietario 

// Configuración de precios y disponibilidad de alojamientos 

let listado_alojamientos = [];

for(let i=0 ; i < 2 ; i++){

    let nombre = prompt("Ingrese nombre del alojamiento");
    let precio = prompt("Ingrese el precio por noche");
    let noches_disponibles = prompt("Ingrese cantidad de noches disponibles en agenda");
    
    let alojamiento = new Alojamiento(nombre, precio, noches_disponibles);

    listado_alojamientos.push(alojamiento);

}
console.log(listado_alojamientos);


// Herramientas para el usuario / huésped

// Visualización de alojamientos diponibles

for(let alojamiento of listado_alojamientos){

    alojamiento.get_datos();

}

// Reserva de alojamiento

let reserva_usuario = prompt("Ingrese el alojamiento deseado");

let resultado_find = listado_alojamientos.find(buscar_alojamiento);


if( resultado_find != undefined){

    if(resultado_find.get_noches_disponibies()){
        
        let noches = prompt("Indique cantidad de noches a reservar");

        if(noches < 3){
            console.log("La estadía mínima debe ser de tres noches");
        }
        else{
            resultado_find.update_noches_disponibles(noches);
            console.log( resultado_find);
        }
    }
    
    else{
        console.log("No hay noches disponibles para este establecimiento");
    }

    }

else{
    console.log("Ingresaste un alojamiento inexistente");
}



