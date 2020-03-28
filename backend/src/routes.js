const { Router } = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

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

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), OngController.store);

routes.get('/profiles', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentsController.index);
routes.post('/incidents', IncidentsController.store);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), IncidentsController.delete);

module.exports = routes;