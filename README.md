# API completa com TypeScript - Backend
Esse repositório tem finalidade de aprendizado e é apenas um **template** para auxiliar na criação de uma API com **TypeScript**, contém toda a configuração inicial.
o README detalha todas (ou quase todas :upside_down_face:) as etapas que foram executadas para criar este repositório template.

## Node

<details>
  <summary>. . .</summary>
  
  - Inicialização
  ```sh
  npm init -y
  ```
  > Comando para iniciar uma aplicação Node.js. Ele vai criar o arquivo de configurações `package.json`
  ```sh
  npm i @types/node -D
  ```
  > o Node não vem por padrão com os pacotes de tipagens para trabalhar com TypeScript, por isso é necessário instalar a dependência que contém as tipagens do Node.

  - Estrutura de Pastas
  ```sh
  mkdir backend backend/src && cd backend && npm init -y && code .
  ```
  > Mesmo comando, porém já inicia a estrutura de pastas. Neste exemplo a pasta raiz se chama `backend`, se deseja outro nome, basta alterar.

</details>





## TypeScript

<details>
  <summary>. . .</summary>

  - Instalação
  > A melhor prática para a utilização do Typescript em um projeto é instalá-lo como uma `devDependency` (por isso a *flag* `-D`), e utilizá-lo por meio do `npx`
  ```sh
  npm i typescript -D
  ```
  > O que define que um projeto é TypeScript é a presença de um arquivo de configuração `tsconfig.json`. Para gerar o `tsconfig.json` vamos utilizar a ferramenta de compilação da linguagem TypeScript, o `tsc`
  ```sh
  npx tsc --init
  ```
  > O arquivo `tsconfig.json` gerado traz as principais configurações e um comentário à frente de cada linha dizendo o que aquela configuração em específico faz

  - Configurações

  Agora, vamos entender o que já vem configurado dentro do objeto `CompilerOptions` no `tsconfig.json` e quais as principais configurações precisamos fazer para minimamente iniciar o projeto em Typescript

  > O `tsconfig.json` ficaria parecido com isso:
  ```json
  {
    "compilerOptions": {
      ...
      "target": "es2016",
      ...
      "module": "commonjs",
      "rootDir": "./",
      ...
      "outDir": "./dist",
      ...
      "preserveConstEnums": true,
      ...
      "esModuleInterop": true,
      "forceConsistentCasingInFileNames": true,
      ...
      "strict": true,
      ...
      "skipLibCheck": true
    },
    "include": ["src/**/*"], /* incluindo todos os arquivos dentro da pasta src */
    "exclude": ["node_modules"] /* excluindo a pasta node_modules */
  }
  ```
  <details>

  - `module` : especifica o sistema de módulo a ser utilizado no código JavaScript *(que será gerado pelo compilador)*;
  - `target` : define a versão do JavaScript do código compilado;
  - `rootDir` : define a localização raiz dos arquivos TypeScript do projeto;
  - `outDir` : define a pasta onde ficará nosso código JavaScript compilado;
  - `preserveConstEnums` : Não deixa apagar as declarações de `const enum` no código JavaScript compilado;
  - `esModuleInterop` : essa opção possibilita compilar módulos ES6 *(`import/export default`)* para módulos CommonJS *(`require/module.export`)*;
  - `forceConsistentCasingInFileNames` : Garante que as nomenclaturas estejam corretas *(maiúsculas e minúsculas)* nas importações; 
  - `strict` : essa opção ativa a verificação estrita de tipo;
  - `skipLibCheck` : Ignore a verificação de tipo de todos os arquivos `.d.ts.`;

  <br />

  - `include` : essa chave vai depois do objeto `CompilerOptions` ela dita os arquivos ou diretórios que devem ser incluídos compilação para JavaScript;
  - `exclude` : seguindo a mesma lógica essa chave vai depois do objeto `CompilerOptions` e diz o que deve ser excluído da compilação para JavaScript.
  </details>
</details>





## Express
<details>
  <summary>. . .</summary>
  
  O framework Express ajuda a organizar e construir APIs robustas e flexíveis

  - Instalação
  ```sh
  npm i express
  ```
  ```sh
  npm i @types/express -D
  ```
  > A biblioteca do Express não vem por padrão com os pacotes de tipagens para trabalhar com TypeScript, por isso é necessário instalar a dependência que contém as tipagens do Express.

  - Lidando com erros assíncronos
  ```sh
  npm i express-async-errors -D
  ```
  > Por padrão, o Express vai encaminhar todos os erros lançados para serem tratados pelos middlewares de erros. No entanto, erros lançados em middlewares assíncronos não são tratados do mesmo jeito. A solução mais simples para esse problema está em um pacote chamado `express-async-errors`

  - Criando o servidor
  ```sh
  touch src/router.ts src/app.ts src/server.ts
  ```
  ```js
  // src/router.ts
  import express from 'express';

  const router = express.Router();

  export default router;
  ```
  ```js
  // src/app.ts
  import express from 'express';
  import 'express-async-errors';

  import router from './router';

  const app = express();

  app.use(express.json());
  app.use(router);

  export default app;
  ```
  ```js
  // src/server.ts
  import app from './app';

  const PORT = 3001
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  ```
  > Neste arquivo, por ora, houve apenas a inicialização do pacote do Express, com a função `express()`. Tudo que o Express nos dá está dentro da variável `app`, é como se ela fosse um “grande objeto” cheio de funções e informações úteis.

  - Executando
  > Para rodar/compilar *(converter de TypeScript para JavaScript)* a aplicação execute:
  ```sh
  npx tsc
  ```
  > Os arquivos JavaScript serão gerados dentro do diretório `./dist` *(diretório especificado na chave `outDir` do arquivo `tsconfig.json`)*. Agora, basta rodar a aplicação compilada utilizando o Node.
  ```sh
  node ./dist/src/server.js
  ```
  - Script
  ```json
  "scripts": {
    "build": "npx tsc",
    "start": "npm run build && node ./dist/src/server.js",
  }
  ```
  > No arquivo `package.json`, insira os comandos acima, dentro da chave "scripts".
</details>





## Outras dependências & Configurações

<details>
  <summary>

### TS-Node-Dev
  </summary>

  - Instalação
  ```sh
  npm i ts-node-dev -D
  ```
  > Usando o servidor com `ts-node-dev`, toda vez que algum arquivo é salvo, o `ts-node-dev` compila e reinicia o servidor automaticamente!

  - Script
  ```json
  "scripts": {
    "dev": "ts-node --respawn --transpileOnly src/server.ts",
  }
  ```
  > No arquivo `package.json`, insira o comando acima, dentro da chave "scripts". Agora, para rodar a aplicação basta executar o comando `npm run dev`
</details>





<details>
  <summary>
  
### Linter
  </summary>
  
  Para garantir a qualidade de escrita do código! Vamos instalar e configurar o `ESLint`
  - Instalação
  ```sh
  npx eslint --init
  ```
  > Após executar o comando acima, leia e responda atentamente as perguntas que apareceram no terminal para realizar a configuração do `ESLint`
  - Script
  ```json
  "scripts": {
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx"
  }
  ```
  > No arquivo `package.json`, insira o comando acima, dentro da chave "scripts". Agora, para que o lint realize a autocorreção do código basta executar o comando `npm run lint`

</details>





<details>
  <summary>
  
### Git
  </summary>

  Criando e configurando o arquivo `.gitignore`
  ```sh
  touch .gitignore && echo "node_modules\ndist" > .gitignore
  ```
  > Ao longo do desenvolvimento da aplicação utilize o `.gitignore` para inserir arquivos e diretórios que não devem subir para o `github`
</details>




<details>
    <summary>

### DotEnv

  </summary>

  O pacote `dotenv` vai lidar com informações sensíveis da aplicação de uma forma mais segura. Ele vai nos ajudar a trabalhar com variáveis de ambiente. Principalmente na integração entre o `Express` e o `MySQL`.

  - Instalação
  ```sh
  npm i dotenv
  ```
  - Configurações
  ```sh
  touch .env.example
  ```
  ```txt
  // .env.example
  MYSQL_HOST=localhost
  MYSQL_PORT=3306
  MYSQL_USER=root
  MYSQL_PASSWORD=password
  MYSQL_DATABASE=database
  ```
  > Após criar o arquivo não se esqueça de deletar o `.example` da extensão e adicionar o `.env` ao arquivo `.gitignore`
  ```sh
  echo ".env" >> .gitignore
  ```
  > Adicione a linha abaixo no arquivo `server.js`
  ```js
  // src/database/connection.ts
  require('dotenv').config();
  
  dotenv.config()
  ```
  > Quando criar o arquivo de conexão ao banco de dados. Adicione as linhas acima.
  </details>





  ## Banco de Dados
<details>
  <summary>

### MySQL
  </summary>

  - Conector
  ```sh
  npm i mysql2
  ```
  > A integração entre o `Express` e o `MySQL` será feita através do módulo `mysql2`.

  - Docker
  ```sh
  docker run --name mysql -e MYSQL_ROOT_PASSWORD=password -p 3306:3306 -d mysql
  ```
  > **ATENÇÃO!** na flag `MYSQL_ROOT_PASSWORD` informe a senha definida do arquivo `.env`, o arquivo que **NÃO** vai para o `github`. Neste **EXEMPLO** foi utilizada a senha ilustrativa `password`. Informe também a porta passada no `.env`. Exemplo: **[porta_no_pc]:[porta_no_docker]**

  [Documentação Docker:MySQL](https://hub.docker.com/_/mysql)

  - Configurando a Conexão
  ```sh
  mkdir src/database && touch src/database/mySqlConnection.ts
  ```
  ```js
  // src/database/mySqlConnection.ts
  import dotenv from 'dotenv';
  import mysql from 'mysql2/promise';

  dotenv.config();

  const port = Number(process.env.MYSQL_USER)

  const connection = mysql.createPool({
    port,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });

  export default connection;
  ```

   - Criando Tabela de Exemplo
  ```sql
  CREATE DATABASE IF NOT EXISTS database_example;

  USE database_example;

  CREATE TABLE table_example (
    id INT PRIMARY KEY AUTO_INCREMENT,
    column_example VARCHAR(45) NOT NULL,
    created_at VARCHAR(45) NOT NULL
  );

  INSERT INTO table_example (`id`, `column_example`, `created_at`)
  VALUES ('1', 'example', 'example');
  ```
  > Execute a query acima no `MySQL Workbench`
</details>





<details>
  <summary>
  
### MongoDB
  </summary>

  - ODM
  ```sh
  npm i mongoose
  ```

  - Docker
  ```sh
  docker run --name mongodb -p 27017:27017 -d mongo
  ```
  [Documentação Docker:MongoDB](https://hub.docker.com/_/mongo)

  - Configurando a Conexão (e um pouco mais)
  ```sh
  mkdir src/database src/models && touch src/database/mongoConnection.ts src/models/example.ts
  ```
  ```js
  // src/database/mongoConnection.ts

  import mongoose from 'mongoose';
  import dotenv from 'dotenv';

  dotenv.config();

  async function connectToMongo() {
    mongoose.connect('mongodb://localhost:27017/typescript_db')
      .then(() => console.log('MongoDB successfully connected!'))
      .catch((error) => console.log('Error connecting to MongoDB\n', error));
  }

  export default connectToMongo;
  ```
  ```js
  // src/server.ts

  import dotenv from 'dotenv';
  import connectToMongo from './database/mongoConnection';
  // import app from './app';
  
  dotenv.config();
  connectToMongo();

  // const PORT = 3001
  // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  ```
  > Adicione as linhas acima no arquivo `src/server.ts`
  ```js
  // src/models/example.ts

  import { Schema, model, Document } from 'mongoose';

  interface IExample extends Document {
    column_example: string
  }

  const exampleSchema = new Schema(
    { column_example: { type: String, required: true }},
    { timestamps: true }
  );

  const ModelExample = model<IExample>('examples', exampleSchema);

  export default ModelExample;
  ```

  - Criando Coleção de Exemplo
  ```sh
  docker exec -it mongodb sh
  ```
  > Agora vc está dentro do terminal do Container com Mongo
  ```sh
  mongosh
  ```
  ```sh
  show dbs
  ```
  ```sh
  use typescript_db
  ```
  > Seguindo todos os passos acima, o banco criado deve ser o "typescript_db". Caso ele não exista, acesse o db correspondente pelo comando `use <nome do db>`
  ```sh
  show collections
  ```
  ```js
  db.examples.insertOne({column_example: 'example'})
  ```
  > Da mesma forma a única collection em "typescript_db" deve ser "examples". Caso contrário apenas troque pelo nome da coleção correspondente em `db.<nome da collection>.insertOne()`
  ```js
  db.examples.find()
  ```
  > Este ultimo comando é apenas para ver os documentos existentes na coleção.
</details>