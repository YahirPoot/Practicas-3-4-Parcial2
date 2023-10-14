export class Almacen {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    eliminarProducto(id) {
        const index = this.productos.findIndex(producto => producto.id === id);
        if (index !== -1) {
            this.productos.splice(index, 1);
        }
    }
    

    ordenarProductos() {
        this.productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }
    

    calcularPrecioTotal() {
        return this.productos.reduce((total, producto) => total + producto.precio, 0);
    }
}