const { Router } = require('express');

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = Router();

/**
 * Rota / Recurso
 * Métodos HTTP
 *   -GET: Buscar uma informação do back-end
 *   -POST: Criar uma informação no back-end
 *   -PUT: Alterar uma informação no back-end
 *   -DELETE: Deletar uma informação no back-end
 * 
 * Tipos de Parâmetros
 * 
 * Query Params: São parâmetros nomeados, enviados na rota após o simbolo de interrogação,
 *  além disso, separamos essas parâmetros por e comercial(&), usados para filtros e paginação
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizados para criar ou alterar recursos
 */

routes.post('/sessions', SessionController.store);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);

routes.get('/profiles', ProfileController.index);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.store);
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;