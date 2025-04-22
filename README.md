# API de Dados de Desmatamento

Esta API fornece dados sobre desmatamento de florestas e ambientes verdes. Os dados são armazenados em um arquivo JSON simples e a API utiliza a arquitetura MVC (Model-View-Controller) para organizar o código.

## Rotas

* `GET /desmatamento`: Retorna um array JSON contendo todos os registros de desmatamento.
* `GET /desmatamento/regiao/:regiao`: Retorna um array JSON contendo os registros de desmatamento filtrados pela região especificada no parâmetro `:regiao` da URL. Exemplo: `/desmatamento/regiao/Amazônia`.
* `GET /desmatamento/ano/:ano`: Retorna um array JSON contendo os registros de desmatamento filtrados pelo ano especificado no parâmetro `:ano` da URL. Exemplo: `/desmatamento/ano/2020`.

## Como usar

1.  **Clone o repositório**.
2.  **Navegue até o diretório do projeto**.
3.  **Instale as dependências**:
    ```bash
    npm install express
    ```
4.  **Inicie o servidor**:
    ```bash
    npm start
    ```
    Este comando utiliza o script `"start": "node --watch src/app.js"` definido no `package.json`. A flag `--watch` do Node.js reinicia o processo automaticamente quando arquivos dentro do diretório atual são modificados.
5.  **Acesse as rotas** no seu navegador ou utilizando uma ferramenta como `curl` ou Postman.

    * Para obter todos os dados: `http://localhost:3000/desmatamento`
    * Para obter dados por região (ex: Amazônia): `http://localhost:3000/desmatamento/regiao/Amazônia`
    * Para obter dados por ano (ex: 2020): `http://localhost:3000/desmatamento/ano/2020`