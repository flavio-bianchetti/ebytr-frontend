import { useState, useEffect } from 'react';
import { ValidateEmail, ValidatePassword } from '../utils';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const history = useNavigate();

  const login = async (event) => {
    event.preventDefault();
    // verifica se o e-mail está cadastrado
    // se não estiver, exibe mensagem de erro.
    // se estiver, grava vai gravar, email, nome e token no localStorage (abaixo).
    const nome = 'Teste';
    const token = '123.456.789';
    localStorage.setItem('ebytrUser', JSON.stringify({ email, nome, token }));
    history('/todolist');
  };

  useEffect(() => {
    setIsValidEmail(ValidateEmail(email));
    setIsValidPassword(ValidatePassword(password));
  }, [email, password]);

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
            value={ email }
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Digite seu email"
          />
        </label>
        <label htmlFor="password-label">
          Senha:
          <input
            className="password-input"
            data-testid="input-password"
            type="password"
            value={ password }
            onChange={(event) => setPassword(event.target.value)}
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
        ((email.length > 0 && !isValidEmail) || (password.length > 0 && !isValidPassword)) 
        && <p>É necessário um e-mail válido e uma senha com 6 caracteres ou mais.</p> 
      }
    </div>
  );
};

export default Login;
