class Vuelo {
    constructor(fecha, numPlazas, listaAviones) {
        this.fecha = fecha;
        this.numPlazas = numPlazas;
        this.listaAviones = listaAviones;
        this.pasajeros = [];
    }
    reservarAsiento(persona) {
        if (this.pasajeros.length < this.numPlazas) {
            this.pasajeros.push(persona);
            console.log("Asiento reservado para " + persona.nombre);
        } else {
            console.log("No hay asientos disponibles.");
        }
    }
    cancelarAsiento(persona) {
        for (let i = 0; i < this.pasajeros.length; i++) {
            if (this.pasajeros[i] === persona) {
                this.pasajeros.splice(i, 1);
                console.log("Asiento cancelado para " + persona.nombre);
                return;
            }
        }
        console.log("El pasajero no se encuentra en este vuelo.");
    }
}
class Avion {
    constructor(capacidad) {
        this.capacidad = capacidad;
    }
    calcularHorasVuelo() {
        console.log("Horas de vuelo calculadas.");
    }
}
class Billete {
    constructor(numBillete, vuelo, pasajero) {
        this.numBillete = numBillete;
        this.vuelo = vuelo;
        this.pasajero = pasajero;
    }
    cambiarAsiento() {
        console.log("Asiento cambiado para el billete " + this.numBillete);
    }
    calcularPrecio() {
        console.log("Precio calculado para el billete " + this.numBillete);
    }
    obtenerDatosPasajero() {
        return this.pasajero;
    }
}
class Persona {
    constructor(nombre, apellidos, edad) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.billete = null;
    }
    comprarBillete(billete) {
        this.billete = billete;
        console.log(this.nombre + " ha comprado un billete.");
    }
    cancelarBillete() {
        this.billete = null;
        console.log(this.nombre + " ha cancelado su billete.");
    }
}
let avion1 = new Avion(180);
let vuelo1 = new Vuelo("14-02-2024", 180, [avion1]);

let persona1 = new Persona("Pepito", "Carmelo", 30);
let billete1 = new Billete(1, vuelo1, persona1);

persona1.comprarBillete(billete1);
vuelo1.reservarAsiento(persona1);
billete1.cambiarAsiento();
billete1.calcularPrecio();
persona1.cancelarBillete();
vuelo1.cancelarAsiento(persona1);