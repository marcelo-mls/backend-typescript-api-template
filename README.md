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
  touch src/app.ts src/index.ts
  ```
  ```js
  // src/app.ts
  import express from 'express';
  import 'express-async-errors';

  const app = express();

  app.use(express.json());

  export default app;
  ```
  ```js
  // src/index.ts
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
  node ./dist/src/index.js
  ```
  - Script
  ```json
  "scripts": {
    "build": "npx tsc",
    "start": "npm run build && node ./dist/src/index.js",
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
    "dev": "ts-node --respawn --transpileOnly src/index.ts",
  }
  ```
  > No arquivo `package.json`, insira o comando acima, dentro da chave "scripts". Agora, para rodar a aplicação basta executar o comando `npm run dev`
</details>