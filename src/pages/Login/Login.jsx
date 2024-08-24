import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(username, password, navigate);
  };

  return (
    <div className='login-container'>
      <h2 className='text-2xl text-center mb-4'>Вход</h2>
      <form onSubmit={handleSubmit} className='login-form'>
        <div className="mb-4">
          <label className="block text-gray-700">Имя пользователя:</label>
          <input 
            type="text" 
            className="border border-gray-400 p-2 w-full rounded mt-1"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className='block text-gray-700'>Пароль:</label>
          <input 
            type="password" 
            className="border border-gray-400 p-2 w-full rounded mt-1" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>Войти</button>
      </form>
    </div>
  );
};

export default Login;
