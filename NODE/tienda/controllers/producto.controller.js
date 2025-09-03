
const productos = require('../db/tmpdb');

module.exports = {
    listar: (request, response) => {
        response.json(productos);
    },
    buscar: (request, response) => {
        const { q } = request.query;
        console.log(q)
        let productos_filter = productos.filter(producto => {
            if (q) {
                return producto.nombre.toLowerCase().includes(q.toLowerCase());
            }
        }) || productos;

        response.json(productos_filter);
    },
    detalle: (request, response) => {
        const { id } = request.params;
        const producto = productos.find(producto => producto.id === parseInt(id));
        if (producto) {
            response.json(producto);
        } else {
            response.status(404).json({ error: 'Producto no encontrado' });
        }
    },
    crear: (request, response) => {
        const { nombre, pais } = request.body;
        const nuevoProducto = {
            id: productos.length + 1,
            nombre,
            pais
        };
        productos.push(nuevoProducto);
        response.status(201).json(nuevoProducto);
    },
    borrar: (request, response) => {
        const { id } = request.params;
        const index = productos.findIndex(producto => producto.id === parseInt(id));

        if (index !== -1) {
            productos.splice(index, 1);
            response.status(204).send();
        } else {
            response.status(404).json({ error: 'Producto no encontrado' });
        }
    },
}