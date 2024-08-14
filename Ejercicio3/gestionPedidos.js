class Producto {
    constructor(nombre, precio, cantidad, impuestos) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.impuestos = impuestos;
    }
    existenciaStock(cantidadSolicitada) {
        return this.cantidad >= cantidadSolicitada;
    }
    agregarProducto(cantidad) {
        this.cantidad += cantidad;
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
        if (producto.existenciaStock(cantidad)) {
            this.productos.push({ producto, cantidad });
            producto.cantidad -= cantidad;
        } else {
            console.log("No hay suficiente stock para el producto:", producto.nombre);
        }
    }
    calcularCostoTotal() {
        let total = 0;
        for (let i = 0; i < this.productos.length; i++) {
            const item = this.productos[i];
            const { producto, cantidad } = item;
            total += (producto.precio * cantidad) * (1 + producto.impuestos);
        }
        return total;
    }
    setFormaPago(formaPago) {
        this.formaPago = formaPago;
    }
    setEstado(nuevoEstado) {
        this.estado = nuevoEstado;
    }
}
class Pago {
    constructor(precio) {
        this.precio = precio;
        this.pedido = null;
        this.numeroGuia = this.generarNumeroGuia();
    }
    generarNumeroGuia() {
        // completar
    }
    pagarPedido(pedido) {
        if (pedido.calcularCostoTotal() <= this.precio) {
            this.pedido = pedido;
            console.log("Pedido pagado con éxito. Número de guía:", this.numeroGuia);
        } else {
            console.log("Fondos insuficientes para completar el pago.");
        }
    }
    metodosPago() {
        console.log("Método de pago no especificado.");
    }
}
class TarjetaCredito extends Pago {
    constructor(precio, fechaCaducidad, numero, tipo) {
        super(precio);
        this.fechaCaducidad = fechaCaducidad;
        this.numero = numero;
        this.tipo = tipo;
    }
    metodosPago() {
        console.log("Pago realizado con tarjeta de crédito:", this.tipo);
    }
}
class Efectivo extends Pago {
    constructor(precio, moneda) {
        super(precio);
        this.moneda = moneda;
    }
    metodosPago() {
        console.log("Pago realizado en efectivo con moneda:", this.moneda);
    }
}
class Cheque extends Pago {
    constructor(precio, nombre, entidadBancaria) {
        super(precio);
        this.nombre = nombre;
        this.entidadBancaria = entidadBancaria;
    }
    metodosPago() {
        console.log("Pago realizado con cheque a nombre de:", this.nombre, "del banco:", this.entidadBancaria);
    }
}
let producto1 = new Producto("Celular", 1500000, 100, 0.17);
let producto2 = new Producto("Televisión", 2000000, 20, 0.21);

let tarjeta = new TarjetaCredito(5000000, "12/26", "1234567890", "Visa");
let efectivo = new Efectivo(5000000, "Pesos Colombianos");
let cheque = new Cheque(5000000, "Juan Pérez", "Banco Parabens");

let pedido1 = new Pedido(new Date());
pedido1.agregarProducto(producto1, 5);
pedido1.agregarProducto(producto2, 1);
pedido1.setFormaPago(tarjeta);

pedido1.setEstado("enviado");

tarjeta.pagarPedido(pedido1);
tarjeta.metodosPago();