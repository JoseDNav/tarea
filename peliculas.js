class Persona {
    //constructor
    constructor(nombrepeli, descripcionpeli) {
        this.nombrepeli = nombrepeli
        this.descripcionpeli = descripcionpeli
  
    }

    mostrarpeli() {
        return "Pelicula:" + this.nombrepeli + " descripcion" + this.descripcionpeli
    }

    


}

module.exports = Persona