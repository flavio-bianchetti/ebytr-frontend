import { useState, useEffect } from 'react';
import { ValidateEmail, ValidatePassword } from '../utils';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  useEffect(() => {
    setIsValidEmail(ValidateEmail(email));
    setIsValidPassword(ValidatePassword(password));
  }, [email, password]);

  return (
    <div>
      <h1>Login</h1>
    </div>
  );
};

export default Login;
