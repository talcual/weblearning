
const { listarProductos, search, findone, suscriptors, new_suscriptor } = require("../controllers/home.controller");

function homeRouter(express){
    const router = express.Router()

    router.get('/', listarProductos);
    router.get('/search', search)
    router.get('/suscriptors', suscriptors)
    router.get('/:id', findone);
    router.post('/', new_suscriptor);
    
    return router
}


module.exports = homeRouter