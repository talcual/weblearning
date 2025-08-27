
const tasks = [
    { id: 1, nombre: 'Leer un libro', pais: 'España' },
    { id: 2, nombre: 'Salir a pasear al perro', pais: 'España' },
    { id: 3, nombre: 'Lavar la ropa', pais: 'Argentina' },
    { id: 4, nombre: 'Comprar comida', pais: 'Argentina' },
];

function taskRouter(express){
    const router = express.Router()
        
    router.get('/', (request, response) => {
        response.json(tasks);
    })


    router.get('/search', function (request, response) {

        const { q } = request.query;
        let tasks_filter = tasks.filter(task => {
            if (q) {
                return task.nombre.toLowerCase().includes(q.toLowerCase());
            }
        }) || tasks;

        response.json(tasks_filter);
    })

    
    router.get('/:id', (request, response) => {
        const id = request.params.id;
        let task = tasks.find(task => task.id == id);
        response.json(task);
    })





    return router
}


module.exports = taskRouter