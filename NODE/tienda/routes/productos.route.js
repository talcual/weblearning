
const { listar, buscar, detalle, crear, borrar } = require("../controllers/producto.controller");

function homeRouter(express){
    const router = express.Router()

    router.get('/', listar);
    router.get('/search', buscar)
    router.get('/:id', detalle);

    router.post('/', crear);
    router.delete('/:id', borrar);

    return router
}


module.exports = homeRouter