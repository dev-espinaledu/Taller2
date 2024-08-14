class Persona {
    constructor(nombre, edad, tipo) {
        this.nombre = nombre;
        this.edad = edad;
        this.tipo = tipo;
    }
}
class Empleado extends Persona {
    constructor(nombre, edad, tipo, sueldoBruto) {
        super(nombre, edad, tipo);
        this.sueldoBruto = sueldoBruto;
    }
    informacionEmpleado() {
        console.log(`Empleado: ${this.nombre}, Edad: ${this.edad}, Sueldo: ${this.sueldoBruto}`);
    }
    asignarCategoria() {
        console.log("Categoría asignada");
    }
}
class Cliente extends Persona {
    constructor(nombre, edad, tipo, telefono) {
        super(nombre, edad, tipo);
        this.telefono = telefono;
    }
    informacionCliente() {
        console.log(`Cliente: ${this.nombre}, Edad: ${this.edad}, Teléfono: ${this.telefono}`);
    }
}
class Empresa {
    constructor(nombre, direccion) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.personas = [];
    }
    informacionEmpresa() {
        console.log(`Empresa: ${this.nombre}, Dirección: ${this.direccion}`);
    }
    agregarPersona(persona) {
        this.personas.push(persona);
    }
}
const empleado1 = new Empleado("Ana López", 30, "Empleado", 1300000);
const cliente1 = new Cliente("Eduardo Espinal", 19, "Cliente", "3237083100");

let empresa1 = new Empresa("TecnoCell", "Calle Tecnológica 1120");
empresa1.agregarPersona(empleado1);
empresa1.agregarPersona(cliente1);

empleado1.informacionEmpleado();
cliente1.informacionCliente();
empresa1.informacionEmpresa();