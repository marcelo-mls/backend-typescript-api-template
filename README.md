# API completa com TypeScript - Backend
Esse repositório tem finalidade de aprendizado e é apenas um **template** para auxiliar na criação de uma API com TypeScript, contém toda a configuração inicial.
o README detalha todas (ou quase todas :upside_down_face:) as etapas que foram executadas para criar este repositório template.

## Node

<!-- <details> -->
  <!-- <summary>. . .</summary> -->
  
  - Inicialização
  ```sh
  npm init -y
  ```
  > Comando para iniciar uma aplicação Node.js. Ele vai criar o arquivo de configurações `package.json`

  - Estrutura de Pastas
  ```sh
  mkdir backend backend/src && cd backend && npm init -y && code .
  ```
  > Mesmo comando, porém já inicia a estrutura de pastas. Neste exemplo a pasta raiz se chama `backend`, se deseja outro nome, basta alterar.

<!-- </details> -->

## TypeScript

<!-- <details> -->
  <!-- <summary>. . .</summary> -->
  

<!-- </details> -->


## Express
<!-- <details> -->
  <!-- <summary>. . .</summary> -->
  
  O framework Express ajuda a organizar e construir APIs robustas e flexíveis
  - Instalação
  ```sh
  npm i express
  ```
  - Lidando com erros assíncronos
  ```sh
  npm i express-async-errors -D
  ```
  > Por padrão, o Express vai encaminhar todos os erros lançados para serem tratados pelos middlewares de erros. No entanto, erros lançados em middlewares assíncronos não são tratados do mesmo jeito. A solução mais simples para esse problema está em um pacote chamado `express-async-errors`

  - Criando o servidor
  ```sh
  touch src/app.js src/server.js
  ```
  ```js
  // src/app.js
  require('express-async-errors');
  const express = require('express');

  const app = express();

  app.use(express.json());

  module.exports = app;
  ```
  ```js
  // src/server.js
  const app = require('./app');

  const PORT = 3001

  app.listen(PORT, () => console.log(`server running on port ${PORT}`));
  ```
  > Neste arquivo, por ora, houve apenas a inicialização do pacote do Express, com a função `express()`. Tudo que o Express nos dá está dentro da variável `app`, é como se ela fosse um “grande objeto” cheio de funções e informações úteis.
  
  - Script
  ```json
  "scripts": {
    "start": "node src/server.js",
  }
  ```
  > No arquivo `package.json`, insira o comando acima, dentro da chave "scripts". Agora, para rodar a aplicação basta executar o comando `npm start`

<!-- </details> -->