class Producto {
    constructor(nombre, precio, stock, impuestos) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.impuestos = impuestos;
    }
}
class FormaPago {
    constructor(tipo) {
        this.tipo = tipo;
    }
}
class TarjetaCredito extends FormaPago {
    constructor(tipo, fechaCaducidad, numero) {
        super(tipo);
        this.fechaCaducidad = fechaCaducidad;
        this.numero = numero;
    }
}
class Efectivo extends FormaPago {
    constructor(tipo, moneda) {
        super(tipo);
        this.moneda = moneda;
    }
}
class Cheque extends FormaPago {
    constructor(tipo, nombre, entidadBancaria) {
        super(tipo);
        this.nombre = nombre;
        this.entidadBancaria = entidadBancaria;
    }
}
class Pedido {
    constructor(fecha) {
        this.fecha = fecha;
        this.productos = [];
        this.formaPago = null;
        this.estado = "pendiente";
    }
    agregarProducto(producto, cantidad) {
        this.productos.push({producto, cantidad});
    }
    calcularTotal() {
        // Completar
    }
    setFormaPago(formaPago) {
        this.formaPago = formaPago;
    }
    setEstado(estado) {
        this.estado = estado;
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