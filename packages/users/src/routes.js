import express from 'express'

const routes = express.Router();

const users = [
  {id: Math.random(), name: 'Vini'},
  {id: Math.random(), name: 'LG'},
  {id: Math.random(), name: 'Gabriel'},
];

routes.get('/users', async (request, response, next) => {
  return response.json(users);
})

export default routes