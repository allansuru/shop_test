# Shop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.7.

Esse projeto trata-se de um pequeno demo "Adicionando um novo cartão de crédito" utilizando as tecnologias abaixo!

- Angular,
- Camada Server-Side
- Angular Material
- Redux (NGRX)
- Testes automatizados na camada do State
- Site Responsivo (Galaxy)

# O Projeto

Versão Desktop

![alt text](https://github.com/allansuru/shop_test/blob/master/server/images/tela_normal.png)

Versão Mobile (Galaxy)

![alt text](https://github.com/allansuru/shop_test/blob/master/server/images/versao_mobile.png)

# Rodando o Projeto

Clone o projeto e instale as dependências do mesmo.

`https://github.com/allansuru/shop_test.git` e `npm i`

Rode o comando abaixo para rodar o servidor:

`npm run server`

![alt text](https://github.com/allansuru/shop_test/blob/master/server/images/run_server.png)

Após subir o server rode o comando abaixo:

`npm start` e acessa a url: `http://localhost:4200/`

Se desejar verificar as api's usadas no projeto, bastar acessar a url: `http://localhost:3000/`

![alt text](https://github.com/allansuru/shop_test/blob/master/server/images/json_server.png)

## Verificando o estado da Aplicação

Recomendo usar o dev tools do chrome (https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=pt-BR), acessando o f12, conforme imagem abaixo:

![alt text](https://github.com/allansuru/shop_test/blob/master/server/images/store_shop.png)

## Testes integrados

Rode o comando `ng test` [Karma](https://karma-runner.github.io). Os specs se encontrar em src/app/store

![alt text](https://github.com/allansuru/shop_test/blob/master/server/images/karma.png)

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
