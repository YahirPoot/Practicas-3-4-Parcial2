import Producto from "./producto.js";
import {Almacen} from "./almacen.js";

const almacen = new Almacen();
const listaProductos = document.getElementById('listaProductos');
const costoTotal = document.getElementById('costoTotal');
const agregarProductoBoton  = document.getElementById('agregar-producto');
const eliminarProductoBoton = document.getElementById('eliminar-producto');

agregarProductoBoton.addEventListener('click', () => {
    const nombreProducto = document.getElementById('nombreProducto').value;
    const precioProducto = parseFloat(document.getElementById('precioProducto').value);
    const producto = new Producto(nombreProducto, precioProducto);
    almacen.agregarProducto(producto);
    actualizarLista();
});

eliminarProductoBoton.addEventListener('click', () => {
    const idProducto = parseFloat(document.getElementById('claveProducto').value);
    almacen.eliminarProducto(idProducto);
    actualizarLista();
});

function actualizarLista() {
    listaProductos.innerHTML = '';
    almacen.ordenarProductos();
    almacen.productos.forEach(producto => {
        const listItem = document.createElement('li');
        listItem.textContent = `ID: ${producto.id} - Nombre: ${producto.nombre} Precio: ${producto.precio.toFixed(2)}`;
        listaProductos.appendChild(listItem);
    });
    costoTotal.textContent = almacen.calcularPrecioTotal().toFixed(2);
}
