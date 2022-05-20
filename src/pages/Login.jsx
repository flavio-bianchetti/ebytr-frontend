import React, { useState, useEffect, useContext } from 'react';
import { ValidateEmail, ValidatePassword } from '../utils';
import { useHistory } from 'react-router-dom';
import TodoListContext from '../context/TodoListContext';
import { requestLogin } from '../services/request';

const Login = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isInvalidUser, setIsInvalidUser] = useState(false);
  const { initialization, requestAccess } = useContext(TodoListContext);
  const history = useHistory();

  const login = (event) => {
    event.preventDefault();
    if (isValidEmail && isValidPassword) {
      requestLogin('/login', { email: userEmail, password: userPassword })
        .then((response) => {
          requestAccess( response.id, response.email, response.name, response.token);
          history.push('/todolist');
        }).catch ((err) => {
        switch (true) {
          case err.response.status === 404:
            setIsInvalidUser(true);
            break;
          case err.response.status === 422:
            console.log(err);
            window.alert('Falha no processo de criptografia. Favor acionar o suporte.');
            break;
          default:
            console.log(err);
            window.alert('Falha no processo de login. Favor acionar o suporte.');
        }
      });
    }
  };

  useEffect(() => {
    initialization();
  }, []);

  useEffect(() => {
    setIsValidEmail(ValidateEmail(userEmail));
    setIsValidPassword(ValidatePassword(userPassword));
    setIsInvalidUser(false);
  }, [userEmail, userPassword]);

  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={ login }
        data-testid="form"
      >
        <label htmlFor="email-label">
          Email:
          <input
            className="email-input"
            data-testid="input-email"
            type="email"
            value={ userEmail }
            onChange={(event) => setUserEmail(event.target.value)}
            placeholder="Digite seu email"
          />
        </label>
        <label htmlFor="password-label">
          Senha:
          <input
            className="password-input"
            data-testid="input-password"
            type="password"
            value={ userPassword }
            onChange={(event) => setUserPassword(event.target.value)}
            placeholder="Digite sua senha"
          />
        </label>
        <button
          className="login-button"
          data-testid="button-login"
          type="submit"
          disabled={ !isValidEmail || !isValidPassword }
        >
          Entrar
        </button>
      </form>
      { 
        ((userEmail.length > 0 && !isValidEmail) || (userPassword.length > 0 && !isValidPassword)) 
        && <p>É necessário um e-mail válido e uma senha com 6 caracteres ou mais.</p> 
      }
      { 
        (isInvalidUser) 
        && <p>Usuário e/ou senha inválidos!</p> 
      }
    </div>
  );
};

export default Login;
