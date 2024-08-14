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
        let info = `Fecha: ${this.fecha}, Lugar: ${this.lugarCelebracion}\n`;

        if (this.pareja.length > 0) {
            info += "Contrayentes:\n";
            for (let contrayente of this.pareja) {
                info += `${contrayente.nombre} ${contrayente.apellidos}\n`;
            }
        }
        if (this.testigos.length > 0) {
            info += "Testigos:\n";
            for (let testigo of this.testigos) {
                info += `${testigo.nombre} ${testigo.apellidos}\n`;
            }
        }
        if (this.juez) {
            info += `Juez: ${this.juez.nombre} ${this.juez.apellidos}\n`;
        }
        console.log("Información del matrimonio:");
        return info;
    }
}
let persona1 = new Persona("Johan", "Muñoz", 34, "M", "Calle Vendeta 1102", "Novio");
let persona2 = new Persona("María", "Rincón", 32, "F", "Calle Tijuana 5421", "Novia");
let testigo1 = new Persona("Stiven", "Dorado", 34, "M", "Calle Derrota 0123", "Testigo");
let testigo2 = new Persona("Danllely", "Castro", 36, "F", "Calle Luna 2014", "Testigo");
let juez = new Persona("Karol", "Martínez", 50, "M", "Calle Olimpo 142", "Juez");

let matrimonio = new Matrimonio("12/08/2024", "Parque Lexivius");
matrimonio.asignarJuez(juez);
matrimonio.asignarContrayentes([persona1, persona2]);
matrimonio.asignarJurado([testigo1, testigo2]);

console.log(matrimonio.informacionMatrimonio());