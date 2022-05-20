# Ebytr - Frontend

:rotating_light: Você pode encontrar a versão deste documento em português _[aqui](#versão-em-português---ebytr---frontend)_.

This repository contains the project "_Ebytr - Frontend_", technical challenge - Career Blitz - Trybe. This project consists of a to-do list application, made in React, NodeJS, MongoDB and layered architecture.
The "_Ebytr - Backend_" can be viewed _[here](https://github.com/flavio-bianchetti/ebytr-backend)_.


### Functionalities:
- View the task list;
- This list must be sorted alphabetically, by creation date or by status;
- Insert a new task in the list;
- Remove a task from the list;
- Update a task from the list;
- The task must have an editable status: pending, in progress or ready;

### Author:

- _[Flávio Bianchetti](https://www.linkedin.com/in/flaviobianchetti/)_

---

### Technologies used in the construction of this application:

<section>
  <a
    href="https://reactjs.org/"
    target="_blank">
    <img
      align="center"
      height="30"
      src="https://img.shields.io/badge/React-563D7C?style=for-the-badge&logo=react&logoColor=61DAFB"
    />
  </a>
  <!-- <a
    href="https://developer.mozilla.org/en-US/docs/Web/CSS"
    target="_blank">
    <img
      align="center"
      height="30"
      src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white"
    />
  </a> -->
</section>

---

### Author's considerations:

- This project is under development. Wait for information.

<!-- You can see the result of this project _[here]()_. -->

---

by _[Flávio Bianchetti - 2021](https://github.com/flavio-bianchetti)_.

---
---

# Versão em português - Ebytr - Frontend

Este repositório contém o projeto "_Ebytr - Frontend_", desafio técnico - Blitz de Carreira - Trybe. Este projeto consiste em uma aplicação de lista de tarefas, feita em React, NodeJS, MongoDB e arquitetura em camadas.
O "_Ebytr - Backend_" pode ser visualizado _[aqui](https://github.com/flavio-bianchetti/ebytr-backend)_.


### Funcionalidades: 
- Visualizar a lista de tarefas;
- Esta lista deve ser ordenável por ordem alfabética, data de criação ou por status;
- Inserir uma nova tarefa na lista;
- Remover uma tarefa da lista;
- Atualizar uma tarefa da lista;
- A tarefa deve possuir um status editável: pendente, em andamento ou pronto;

### Autor:

- _[Flávio Bianchetti](https://www.linkedin.com/in/flaviobianchetti/)_

---
### Tecnologias utilizadas na construção desta aplicação:

<section>
  <a
    href="https://pt-br.reactjs.org/docs/getting-started.html"
    target="_blank">
    <img
      align="center"
      height="30"
      src="https://img.shields.io/badge/React-563D7C?style=for-the-badge&logo=react&logoColor=61DAFB"
    />
  </a>
  <!-- <a
    href="https://developer.mozilla.org/en-US/docs/Web/CSS"
    target="_blank">
    <img
      align="center"
      height="30"
      src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white"
    />
  </a> -->
</section>

### Instalação

1. Abra o terminal, em um diretório de sua preferência, e faça o clone do projeto:
```bash
  git@github.com:flavio-bianchetti/ebytr-frontend.git
```

2. Entre no diretório do projeto:
```bash
  cd ebytr-frontend
```
3. Instale as dependências:
```bash
  npm install
```

4. Configure o arquivo _[dotenv](https://www.npmjs.com/package/dotenv)_ com suas informações:
```javascript
  // exemplo de preenchimento:
  API_URL=http://localhost //caminho para a aplicação ebytr-backend
  API_PORT=3002 //porta utilizada pela aplicação ebytr-backend
```
5. Inicie a aplicação:
```bash
  npm start 
```
---
### Problemas encontrados:
- Encapsular minha aplicação com um provider tomou mais tempo de que esperava. Precisei rever a documentação e instalar dependências com versões específicas.
- Iniciar este projeto com o método TDD me mostrou que ainda não sou capaz de conciliar rapidez e eficiência. Consegui fazer o teste dos componentes da tela de login e parte dos testes da tela da lista de tarefas.
- Erros ocorridos na implantação da aplicação no *Heroku* estão impedindo o correto funcionamento remoto da API.

### Etapas atuais do desenvolvimento:
  - Ocorreram problemas na instalação da aplicação no *Heroku* e suas correções estão em andamento.
  - Estão sendo feitos testes locais na aplicação utilizando o *Docker*.
  - A estilização da página será feita em breve.
  - Os *Testes* serão implementados em breve.

---

por _[Flávio Bianchetti - 2021](https://github.com/flavio-bianchetti)_.