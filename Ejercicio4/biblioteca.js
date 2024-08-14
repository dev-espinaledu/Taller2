class Autor {
    constructor(nombre, nacionalidad, fechaNacimiento) {
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
        this.fechaNacimiento = fechaNacimiento;
    }
    mostrarInformacion() {
        console.log(`Autor: ${this.nombre} (${this.nacionalidad})`);
    }
}
class Libro {
    constructor(id, titulo, tipo, editorial, autor) {
        this.id = id;
        this.titulo = titulo;
        this.tipo = tipo;
        this.editorial = editorial;
        this.autor = autor;
        this.estado = 'disponible';
    }
    existenciaStock() {
        return this.estado === 'disponible';
    }
}
class Lector {
    constructor(idLector, nombre, apellidos) {
        this.idLector = idLector;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.prestamos = [];
    }
    prestarLibro(libro) {
        // completar
    }
    devolverLibro(libro) {
        // completar
    }
}
let autor1 = new Autor("Karl Feige", "Colombia", "06-12-1980");
let autor2 = new Autor("Isabel Allende", "Chile", "02-08-1992");
let autor3 = new Autor("Freddy Manus", "Colombia", "06-03-1966");

let libro1 = new Libro(1, "100 Días en el Infierno", "novela", "Editorial KVC", autor1);
let libro2 = new Libro(2, "Aquí no Hay Quién Viva", "novela", "PRC", autor2);
let libro3 = new Libro(3, "Estrés", "novela", "Editorial Sudamericana", autor3);
let libro4 = new Libro(4, "Volcánico", "novela", "Editorial Librin", autor3);

let lector1 = new Lector("Sara", "Jiménez", "1512545");
let lector2 = new Lector("Carlos", "Rodríguez", "2587413");
let lector3 = new Lector("Ana", "Martínez", "3698741");

lector1.prestarLibro(libro1);

lector2.prestarLibro(libro2);
lector2.prestarLibro(libro3);
lector3.prestarLibro(libro4);

lector1.devolverLibro(libro1);
lector2.devolverLibro(libro3);
lector3.devolverLibro(libro4);