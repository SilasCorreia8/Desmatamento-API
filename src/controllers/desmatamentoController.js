//Importar o módulo do model para acessar as funções dos dadsos
const desmatamentoModel = require('../models/desmatamentoModel.js');

//Função para a requisição GET na rota '/desmatamento'
function listarDados(requisicao, resposta) {
    const dados = desmatamentoModel.obterDados(); //Chama a função do model para obter todos os dados de desmatamento
    resposta.json(dados); //Envia os dados como uma resposta JSON para o cliente
}

//Função para a requisição GET na rota '/desmatamento/regiao/:regiao'
function listarDadosPorRegiao(requisicao, resposta) {
    const regiao = requisicao.params.regiao; //Extrai o valor do parâmetro 'regiao' da URL da requisição
    const dados = desmatamentoModel.obterDadosPorRegiao(regiao);  //Chama a função do model para obter os dados por região
    resposta.json(dados); //Envia os dados filtrados por região como resposta JSON
}

//Função para a requisição GET na rota '/desmatamento/ano/:ano'
function listarDadosPorAno(requisicao, resposta) {
    const ano = requisicao.params.ano; //Extrai o valor do parâmetro 'ano' da URL da requisição
    const dados = desmatamentoModel.obterDadosPorAno(ano); //Chama a função do model para obter os dados por ano
    resposta.json(dados); //Envia os dados filtrados por ano como uma resposta JSON.
}

//Exporta as funções para que possam ser utilizadas por outros módulos
module.exports = {
    listarDados,
    listarDadosPorRegiao,
    listarDadosPorAno,
  };