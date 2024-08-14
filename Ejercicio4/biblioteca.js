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
        if (libro.existenciaStock()) {
            this.prestamos.push(libro);
            libro.estado = 'prestado';
            console.log(`Libro ${libro.titulo} prestado a ${this.nombre} ${this.apellidos}`);
        } else {
            console.log(`El libro ${libro.titulo} no está disponible`);
        }
    }
    devolverLibro(libro) {
        const index = this.prestamos.indexOf(libro);
        if (index !== -1) {
            this.prestamos.splice(index, 1);
            libro.estado = 'disponible';
            console.log(`Libro ${libro.titulo} devuelto por ${this.nombre} ${this.apellidos}`);
        } else {
            console.log(`El lector no tiene prestado el libro ${libro.titulo}`);
        }
    }
}
let autor1 = new Autor("Karl Feige", "Colombia", "06-12-1980");
let autor2 = new Autor("Isabel Allende", "Chile", "02-08-1942");
let autor3 = new Autor("Gabriel García Márquez", "Colombia", "06-03-1927");

let libro1 = new Libro(1, "100 Días en el Infierno", "novela", "Editorial KVC", autor1);
let libro2 = new Libro(2, "La casa de los espíritus", "novela", "Plaza & Janés", autor2);
let libro3 = new Libro(3, "Cien años de soledad", "novela", "Editorial Sudamericana", autor3);
let libro4 = new Libro(4, "El amor en los tiempos del cólera", "novela", "Editorial Oveja Negra", autor3);

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