const { Router } = require("express");

const TesteController = require('./Controllers/TesteController')

const routes = Router();

routes.get("/init", (req, res) => {
  return res.status(200).json({ message: "Server is on..." });
});

routes.post('/Copa', TesteController.criar);
routes.get('/Copa', TesteController.listar);

module.exports = routes;