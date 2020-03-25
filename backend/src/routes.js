const express = require('express'); 
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();  
/**
 * Rota / Recursos
 */
/**
 * Métodos HTTP:
 * 
 * GET: Buscar informação do Back-End 
 * POST: Criar uma infromação / registro no Back-End
 * PUT: Alterar informação / registro no Back-End
 * DELETE: Deletar uma informação / registro no Back-End
 * 
 */

 /**
  * Tipos de Parâmetros (Params)
  * 
  * Query Params: São parâmetros enviados (nomeados) pela url após o "?" (ex: /users?nome=Diogo)
  *     Funçôes: Filtros, Paginação(?page=2)]
  * Route Params: Parâmetro utilizado para identificar recursos (Ex: users/1)
  * Request Body: Corpo da requisição. Utilizado para criar ou alterar recursos (deve vir dentro de um json)
  */

  /**
   * Tipos de Bancos de Dados
   * SQL: MySQL; SQLite,... (Banco Estruturado, Linguagem Universal, Amplamente Utilizado)
   * Utilizaremos o SQLite
   * Formas de comunicação com o banco de dados
   * Drivers (depende de cada banco): SELECT * FROM users
   * Query Builder(Utliza o js para se comunicar): table('users').select('x').where()
   *    Utilizaremos o Kenejs.org com com o diver sqlite3
   */

 // Funções
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents' , IncidentController.index);
routes.post('/incidents', IncidentController.create); 
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

//Login de Ong
routes.post('/sessions', SessionController.create);

module.exports = routes;