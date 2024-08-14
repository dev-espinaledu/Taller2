class Persona {
    constructor(nombre, apellidos, edad, sexo, domicilio, tipo) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.sexo = sexo;
        this.domicilio = domicilio;
        this.tipo = tipo;
    }
    informacionPersona() {
        return `Nombre: ${this.nombre} ${this.apellidos}, Edad: ${this.edad}, Sexo: ${this.sexo}, Domicilio: ${this.domicilio}, Tipo: ${this.tipo}`;
    }
}
class Matrimonio {
    constructor(fecha, lugarCelebracion) {
        this.fecha = fecha;
        this.lugarCelebracion = lugarCelebracion;
        this.pareja = [];
        this.testigos = [];
        this.juez = null;
    }
    asignarJuez(persona) {
        this.juez = persona;
    }
    asignarJurado(personas) {
        this.testigos = personas;
    }
    asignarContrayentes(personas) {
        this.pareja = personas;
    }
    informacionMatrimonio() {
        // completar
    }
}
let persona1 = new Persona("Johan", "Muñoz", 34, "M", "Calle Vendeta 1102", "Novio");
let persona2 = new Persona("María", "Rincón", 32, "F", "Calle Tijuana 5421", "Novia");
let testigo1 = new Persona("Stiven", "Dorado", 34, "M", "Calle Derrota 0123", "Testigo");
let testigo2 = new Persona("Danllely", "Castro", 36, "F", "Calle Luna 2014", "Testigo");
let juez = new Persona("Karol", "Martínez", 50, "M", "Calle Olimpo 142", "Juez");

let matrimonio = new Matrimonio("12/08/2024", "Parque Lexivius");
matrimonio.asignarJuez(juez);

console.log(matrimonio.informacionMatrimonio());