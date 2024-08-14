class Avion {
    constructor(capacidad) {
        this.capacidad = capacidad;
    }

    calcularHorasVuelo() {
        // Implementación ficticia para calcular horas de vuelo
        return `Horas de vuelo calculadas para el avión con capacidad ${this.capacidad}`;
    }
}

class Vuelo {
    constructor(id, numPlazas, avion) {
        this.id = id;
        this.numPlazas = numPlazas;
        this.avion = avion;
        this.asientos = [];
    }

    reservarAsiento(pasajero) {
        if (this.asientos.length < this.numPlazas) {
            const numAsiento = this.asientos.length + 1;
            this.asientos.push(pasajero);
            return numAsiento;
        }
    }

    cancelarAsiento(numAsiento) {
        if (numAsiento > 0 && numAsiento <= this.numPlazas) {
            this.asientos.splice(numAsiento - 1, 1);
        }
    }

    obtenerAsientos() {
        return this.asientos;
    }
}

class Persona {
    constructor(nombre, apellidos, edad) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.billetes = [];
    }

    comprarBillete(vuelo) {
        const nuevoBillete = new Billete(this.billetes.length + 1, vuelo, this);
        this.billetes.push(nuevoBillete);
        return nuevoBillete;
    }

    cancelarBillete(numBillete) {
        const index = this.billetes.findIndex(billete => billete.numBillete === numBillete);
        if (index !== -1) {
            this.billetes.splice(index, 1);
        }
    }
}

class Billete {
    constructor(numBillete, vuelo, pasajero) {
        this.numBillete = numBillete;
        this.vuelo = vuelo;
        this.pasajero = pasajero;
        this.asiento = this.vuelo.reservarAsiento(this.pasajero);
    }

    cambiarAsiento(nuevoAsiento) {
        if (nuevoAsiento > 0 && nuevoAsiento <= this.vuelo.numPlazas && !this.vuelo.obtenerAsientos().includes(nuevoAsiento)) {
            this.vuelo.cancelarAsiento(this.asiento); 
            this.asiento = nuevoAsiento;
            this.vuelo.asientos[nuevoAsiento - 1] = this.pasajero;
            return `Asiento cambiado a ${nuevoAsiento} para ${this.pasajero.nombre} ${this.pasajero.apellidos}`;
        }
        return "No es posible cambiar al nuevo asiento";
    }

    calcularPrecio() {
        const precioBase = 100;
        const cargoEdad = this.pasajero.edad < 12 ? 20 : 0; 
        const cargoAsiento = this.asiento <= 2 ? 30 : 0; 
        return precioBase + cargoEdad + cargoAsiento;
    }

    obtenerDatosPasajero() {
        return {
            numBillete: this.numBillete,
            nombre: this.pasajero.nombre,
            apellidos: this.pasajero.apellidos,
            vuelo: this.vuelo.id,
            asiento: this.asiento
        };
    }
}

// Ejemplo de uso:

let avion = new Avion(3);
let vuelo = new Vuelo("Vuelo1", 3, avion);

let persona1 = new Persona("Juan", "López", 30);
let billete1 = persona1.comprarBillete(vuelo);
console.log(`Asiento reservado: ${billete1.asiento}`);

let persona2 = new Persona("Ana", "González", 25);
let billete2 = persona2.comprarBillete(vuelo);
console.log(`Asiento reservado: ${billete2.asiento}`);

// Cambiar de asiento
console.log(billete1.cambiarAsiento(2));

// Calcular el precio del billete
console.log(`Precio del billete 1: ${billete1.calcularPrecio()}`);

// Obtener datos del pasajero
console.log(billete1.obtenerDatosPasajero());

// Cancelar billete
persona1.cancelarBillete(1);