// Importa o módulo do Express, que é a base para criar aplicações web com Node.js.
const express = require('express');
// Importa o módulo de rotas de desmatamento que definimos em 'desmatamentoRoutes.js'.
const desmatamentoRoutes = require('./routes/desmatamentoRoutes.js');

// Cria uma instância do aplicativo Express.
const app = express();
//Define a porta em que o servidor irá escutar por conexões.
const PORT = 3000;

//Middleware para habilitar o parsing de corpos de requisição JSON, isso permite que o servidor entenda dados enviados no formato JSON.
app.use(express.json());

//Monta o router de desmatamento no caminho '/desmatamento'.
app.use("/desmatamento", desmatamentoRoutes);

//Inicia o servidor e o faz escutar na porta definida.
//O segundo argumento é uma função de callback que será executada quando o servidor iniciar.
app.listen(PORT, () => {
    // Exibe uma mensagem no console indicando que o servidor está rodando e em qual porta.
    console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;