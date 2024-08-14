class Producto {
    constructor(nombre, precio, cantidad, impuestos) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.impuestos = impuestos;
    }
    existenciaStock() {
        // completer
    }
    agregarProducto() {
        // completar
    }
}
class Pedido {
    constructor(fecha) {
        this.fecha = fecha;
        this.productos = []
        this.formaPago = null;
        this.estado = "pendiente";
    }
    calcularCostoTotal() {
        // Completar
    }
}
class Pago {
    constructor(precio) {
        this.precio = precio;
        this.pedido = []
        numeroGuia = new Pedido;
    }
    pagarPedido() {
        // completar
    }
    metodosPago() {
        // completar
    }
}
class TarjetaCredito extends Pago {
    constructor(fechaCaducidad, numero) {
        this.fechaCaducidad = fechaCaducidad;
        this.numero = numero;
    }
}
class Efectivo extends Pago {
    constructor(moneda) {
        this.moneda = moneda;
    }
}
class Cheque extends Pago {
    constructor(nombre, entidadBancaria) {
        this.nombre = nombre;
        this.entidadBancaria = entidadBancaria;
    }
}
let producto1 = new Producto("Celular", 1500000, 100, 0.17);
let producto2 = new Producto("Televisión", 2000000, 20, 0.21);

let tarjeta = new TarjetaCredito("Crédito", "12/26", "1234567890");
let efectivo = new Efectivo("Efectivo", "Pesos Colombianos");
let cheque = new Cheque("Cheque", "Juan Pérez", "Banco Parabens");

let pedido1 = new Pedido(new Date());
pedido1.agregarProducto(producto1, 5);
pedido1.agregarProducto(producto2, 1);
pedido1.setFormaPago(tarjeta);

pedido1.setEstado("enviado");