const express = require("express");
const crypto = require("crypto");
const connection = require('./database/connection');
const IncidentController = require('./controllers/IncidentController');
const OngController = require('./controllers/OngController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();
/*
routes.get('/ongs', async (request, response) =>{
	const ongs = await connection('ongs').select('*');
	
	return response.json(ongs);
});
*/

routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id',IncidentController.delete);
//routes.post('/incidents/:id',IncidentController.update);
routes.get('/incidents',IncidentController.index);
routes.get('/profiles',IncidentController.indexAll);

routes.get('/ongs',OngController.index);
routes.get('/profile',ProfileController.index);
routes.post('/sessions',SessionController.index);
routes.post('/ongs', OngController.create);

module.exports = routes;

