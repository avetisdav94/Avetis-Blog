import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isAdmin, onLogout }) => {
  return (
    <header className='bg-gray-800 text-white p-4 shadow-md'>
      <nav className='flex justify-between items-center'>
        <div className='flex space-x-4'>
          <Link
            to='/'
            className='text-white font-bold text-lg hover:text-blue-300 transition-colors duration-300'
          >
            Главная
          </Link>
          {isAdmin && (
            <Link
              to='/admin'
              className='text-white font-bold text-lg hover:text-blue-300 transition-colors duration-300'
            >
              Админ Панель
            </Link>
          )}
        </div>
        <div className='flex items-center space-x-4'>
          {!isAdmin && (
            <Link
              to='/login'
              className='bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg py-2 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300'
            >
              Войти
            </Link>
          )}
          {isAdmin && (
            <button
              onClick={onLogout}
              className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300'
            >
              Выйти
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
