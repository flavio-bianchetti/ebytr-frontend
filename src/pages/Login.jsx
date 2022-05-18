import React, { useState, useEffect, useContext } from 'react';
import { ValidateEmail, ValidatePassword } from '../utils';
import { useHistory } from 'react-router-dom';
import TodoListContext from '../context/TodoListContext';

const Login = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const { requestAccess } = useContext(TodoListContext);
  const history = useHistory();

  const login = async (event) => {
    event.preventDefault();
    if (isValidEmail && isValidPassword) {
      requestAccess(email, password);
      history.push('/todolist');
    }
  };

  useEffect(() => {
    setIsValidEmail(ValidateEmail(userEmail));
    setIsValidPassword(ValidatePassword(userPassword));
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
    </div>
  );
};

export default Login;
