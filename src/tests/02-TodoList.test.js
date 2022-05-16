import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';


describe('2 - Quando acessada a página da lista de tarefas,', () => {
  const setup = () => render(
    <React.StrictMode>
      <BrowserRouter>
        <App /> 
      </BrowserRouter>
    </React.StrictMode>
  );

  // mockar a conexão com o banco de dados e utilizar um usuário e tarefas fake,
  
  const login = () => {
    const email = screen.getByLabelText('E-mail');
    const password = screen.getByLabelText('Senha');
    const submit = screen.getByRole('button', {name: 'Entrar'});
    email.value = 'teste@test.com';
    password.value = '123456';
    submit.click();
  };

  // verifica o componentes da página de lista de tarefas,

  // ao final, restaura o mock e exclui as informações do localstorage.


  it ('O título da página e o botão "Sair" são exibidos.', () => {
    setup();
    login();
    expect(screen.getByText(/Ebytr - To Do List/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sair/i })).toBeInTheDocument();
  });

  it ('O nome do usuário e o e-mail são exibidos.', () => {
    setup();
    login();
    expect(screen.getByText('Teste')).toBeInTheDocument();
    expect(screen.getByText('teste@test.com')).toBeInTheDocument();
  });

  it('O campo tarefa e o botão "Adicionar" são exibidos', () => {
    setup();
    login();
    expect(screen.getByTestId('input-task')).toBeInTheDocument();
    expect(screen.getByTestId('button-submit')).toBeInTheDocument();
  });

  it('A tabela é corretamente exibida.', () => {
    setup();
    login();
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
    expect(screen.queryAllByRole(table, 'row')).toHaveLength(2);
  });

  it('O rodapé é corretamente exibido com as quantidades de status corretas.', () => {
    setup();
    login();
    expect(screen.getByText(/Em andamento: 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Pendentes: 0/i)).toBeInTheDocument();
    expect(screen.getByText(/Concluídas: 1/i)).toBeInTheDocument();
  });
});
