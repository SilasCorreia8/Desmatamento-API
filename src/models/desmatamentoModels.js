//Importar o conteúdo do darquivo JSON
const dadosDesmatamento = require("../../dadosDesmatamento.json");

//Função para obter os dados
function obterDados() {
    return dadosDesmatamento; //Retorna o array completo dos dados
}

//Função para obter dados por região
function obterDadosPorRegiao(regiao) {
    //Utiliza o método 'filter' do array para criar um novo array contendo
    //apenas os elementos onde a propriedade 'regiao' é igual ao valor passado
    return dadosDesmatamento.filter((dado) => dado.regiao === regiao);
}

//Função para obter dados por ano
function obterDadosPorAno(ano) {
    //Utiliza o método 'filter' para criar um novo array.
    //'parseInt(ano)' converte a entrada 'ano' para um número inteiro
    //para garantir a comparação correta com a propriedade 'ano' dos dados.
    return dadosDesmatamento.filter((dado) => dado.ano === parseInt(ano));
}

// Exporta as funções para que possam ser utilizadas por outros módulos
module.exports = {
    obterDados,
    obterDadosPorRegiao,
    obterDadosPorAno
};