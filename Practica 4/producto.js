
export default class Producto {
    constructor(nombre, precio) {
        this.id = Math.floor(Math.random() * 100000);
        this.nombre = nombre;
        this.precio = precio;
    }

}
