const productos = [
    { id: 1, nombre: 'Gafas de Sol', pais: 'España' },
    { id: 2, nombre: 'Camiseta Amarilla', pais: 'España' },
    { id: 3, nombre: 'Vaso Rojo', pais: 'Argentina' },
    { id: 4, nombre: 'Cepillo Suave', pais: 'Argentina' },
    { id: 5, nombre: 'Camiseta Real Madrid', pais: 'España' },
    { id: 6, nombre: 'Zapatos Negros', pais: 'Chile' }
];

var users_suscriptors = [];

module.exports = {

    listarProductos : (request, response) => {
        response.json(productos);
    },
    search : (request, response) => {

        const { q } = request.query;
        console.log(q)
        let productos_filter = productos.filter(producto => {
            if (q) {
                return producto.nombre.toLowerCase().includes(q.toLowerCase());
            }
        }) || productos;

        response.json(productos_filter);
    }, 
    findone: (request, response) => {
        const id = request.params.id;
        let producto = productos.find(producto => producto.id == id);
        response.json(producto);
    },
    suscriptors: (request, response) => {
        response.json(users_suscriptors);
    },
    new_suscriptor: (request, response) => {
        const suscriptor = request.body;
        users_suscriptors.push(suscriptor);
        response.status(201).json(suscriptor);
    }

}