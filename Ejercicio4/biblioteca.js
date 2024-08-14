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
let libro1 = new Libro(1, "100 Días en el Infierno", "novela", "Editorial KVC", autor1);

let lector1 = new Lector("Sara", "Jiménez", "1512545");
lector1.prestarLibro(libro1);
lector1.devolverLibro(libro1);