import express from 'express'
import httpProxy from 'express-http-proxy';

const usersServiceProxy = httpProxy('http://localhost:3334');

const routes = express.Router();

routes.get('/users', (request, response, next) => {
  usersServiceProxy(request, response, next);
})

export default routes