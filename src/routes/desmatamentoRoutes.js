//Importa o módulo do Express para criar rotas.
const express = require('express');
//Cria uma instância do Router do Express, que permite definir rotas modulares.
const router = express.Router();
//Importa o módulo do controller para acessar as funções que lidam com as requisições.
const desmatamentoController = require('../controllers/desmatamentoController.js');

//Define uma rota GET para '/'. Quando um cliente faz uma requisição GET para '/desmatamento/',
//a função 'listarDados' do 'desmatamentoController' será executada.
router.get("/", desmatamentoController.listarDados);

//Define uma rota GET para '/regiao/:regiao'. O valor desse parâmetro será acessível em 'req.params.regiao' no controller.
//Quando um cliente faz uma requisição GET para '/desmatamento/regiao/NOMEDAREGIAO',
//a função 'listarDadosPorRegiao' do 'desmatamentoController' será executada.
router.get("/regiao/:regiao", desmatamentoController.listarDadosPorRegiao);

//Define uma rota GET para '/ano/:ano'.
//':ano' é outro parâmetro dinâmico na URL. O valor desse parâmetro será acessível em 'req.params.ano' no controller.
//Quando um cliente faz uma requisição GET para '/desmatamento/ano/2023',
// a função 'listarDadosPorAno' do 'desmatamentoController' será executada.
router.get("/ano/:ano", desmatamentoController.listarDadosPorAno);

//Exporta o router para que ele possa ser montado no aplicativo principal (app.js).
module.exports = router;
