import { useState } from 'react';
import { ValidateEmail, ValidatePassword } from '../utils';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  return (
    <div>
      <h1>Login</h1>
    </div>
  );
};

export default Login;
