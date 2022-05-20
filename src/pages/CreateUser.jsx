import React, { useState, useEffect } from 'react';
import { ValidateEmail, ValidatePassword, ValidateName } from '../utils';
import { useHistory } from 'react-router-dom';
import { requestLogin } from '../services/request';

const CreateUser = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidName, setIsValidName] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const history = useHistory();

  const createUser = async (event) => {
    event.preventDefault();
    await requestLogin('/create', { email: userEmail, name: userName, password: userPassword })
      .then((response) => {
        window.alert('Cadastro efetuado com sucesso!');
        history.push('/');
      }).catch((err) => {
        switch (true) {
          case err.response.status === 409:
            window.alert('Email já cadastrado!');
            break;
          case err.response.status === 422:
            console.log(err);
            window.alert('Falha no processo de criptografia. Favor acionar o suporte.');
            history.push('/');
            break;
          default:
            console.log(err);
            window.alert('Falha no processo de cadastro. Favor acionar o suporte.');
            history.push('/');
        }
      });
  };

  useEffect(() => {
    setIsValidEmail(ValidateEmail(userEmail));
    setIsValidName(ValidateName(userName));
    setIsValidPassword(ValidatePassword(userPassword));
  }, [userEmail, userName, userPassword]);

  return (
    <div>
      <h1>Novo usuário</h1>
      <form
        onSubmit={ createUser }
        data-testid="form"
      >
        <label htmlFor="name-label">
          Nome:
          <input
            className="name-input"
            data-testid="input-name"
            type="text"
            value={ userName }
            onChange={(event) => setUserName(event.target.value)}
            placeholder="Digite seu nome"
          />
        </label>
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
          disabled={ !isValidEmail || !isValidName || !isValidPassword }
        >
          Cadastrar
        </button>
      </form>
      { 
        ((userEmail.length > 0 && !isValidEmail)
          || (userName.length > 0 && !isValidName)
          || (userPassword.length > 0 && !isValidPassword)) 
        && <p>É necessário informar um nome com 3 caracteres ou mais, um e-mail válido e uma senha com 6 caracteres ou mais.</p> 
      }
    </div>
  );
};

export default CreateUser;
