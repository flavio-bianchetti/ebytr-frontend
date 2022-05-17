import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouterProvider from '../renderWithRouterProvider';


describe('1 - Crie uma página de login', () => {
  it ('Renderiza corretamente a página de login', () => {
    const { getByText } = renderWithRouterProvider(<App />);
    expect(getByText('Login')).toBeInTheDocument();
  });

  it('Renderiza corretamente o formulário de login', () => {
    const { getByTestId } = renderWithRouterProvider(<App />);
    expect(getByTestId('form')).toBeInTheDocument();
  });

  it('Renderiza corretamente o campo de digitação do email', () => {
    const { getByTestId } = renderWithRouterProvider(<App />);
    expect(getByTestId('input-email')).toBeInTheDocument();
  });

  it('Renderiza corretamente o campo de digitação de senha', () => {
    const { getByTestId } = renderWithRouterProvider(<App />);
    expect(getByTestId('input-password')).toBeInTheDocument();
  });

  it('Renderiza corretamente o botão "Entrar"', () => {
    const { getByTestId } = renderWithRouterProvider(<App />);
    expect(getByTestId('button-login')).toBeInTheDocument();
  });

  it('o botão "Entrar" está desabilitado', () => {
    const { getByTestId } = renderWithRouterProvider(<App />);
    expect(getByTestId('button-login')).toBeDisabled();
  });

  it('o botão "Entrar" fica habilitado após a inserção das informações corretas.', () => {
    const { getByTestId } = renderWithRouterProvider(<App />);
    const email = getByTestId('input-email');
    const password = getByTestId('input-password');
    const button = getByTestId('button-login');
    userEvent.type(email, 'teste@test.com');
    expect(button).toBeDisabled();
    userEvent.type(password, '123456');
    expect(button).not.toBeDisabled();
  });
});
