import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';


describe('1 - Crie uma página de login', () => {
  const setup = () => render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );

  it ('Renderiza corretamente a página de login', () => {
    setup();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('Renderiza corretamente o formulário de login', () => {
    setup();
    expect(screen.getByTestId('form')).toBeInTheDocument();
  });
  it('Renderiza corretamente o campo de digitação do email', () => {
    setup();
    expect(screen.getByTestId('input-email')).toBeInTheDocument();
  });
  it('Renderiza corretamente o campo de digitação de senha', () => {
    setup();
    expect(screen.getByTestId('input-password')).toBeInTheDocument();
  });
  it('Renderiza corretamente o botão de login', () => {
    setup();
    expect(screen.getByTestId('button-login')).toBeInTheDocument();
  });
});
