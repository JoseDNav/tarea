var Persona = require('./peliculas')

var basededatospelis = [
    {
        "nombre": "madmax",
        "descripcion": "peli de carros"
    },

    {
        "nombre": "avengers",
        "descripcion": "peli de superheroes"
    },
      
    {
        "nombre": "sirenita",
        "descripcion": "peli de sirenas"
    }
      

];
var buscar;
var peli;

console.log("bienvenido")

console.log("para ver las peliculas que existen ingrese 1")
console.log("para buscar una pelicula ingrese 2")




process.stdin.on('data', data => {
  buscar = data.toString().trim();

  switch (buscar) {
    case "1":
        console.log(basededatospelis);
        break;

    case "2":
            console.log("ingrese nombre de pelicula")
            process.stdin.on('data', data => {
                peli = data.toString().trim();

                basededatospelis.forEach(element => {
                    
                    if (peli==basededatospelis[element].nombre) {

                        console.log(basededatospelis[element])
                    
                    } else {
                        console.log(peli + " no existe en la base de datos")
                    }


                });



                process.exit(); 
            });

  
    default:
        console.log ("no valido")
        break;
  }
   
  process.exit(); 
  });



  



