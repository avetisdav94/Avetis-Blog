//Imports

import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

//Style

import './Header.css';

const Header = ({isAdmin, onLogout}) => {
    const navigate = useNavigate();

    const handleLogoutClick = () => {
        if(onLogout) {
            onLogout(navigate);
        }else{
            console.error('onLogout function is not defined');
        }
    }
    return (
        <header className='bg-gray-800 text-white p-4'>
        <nav className='flex justify-around'>
          <Link to='/' className='text-white font-bold'>Главная</Link>
          <Link to='/post' className='text-white font-bold'>Мои статьи</Link>
          <Link to='/travel' className='text-white font-bold'>Путешествия</Link>
          <Link to='/games' className='text-white font-bold'>Мои Игры</Link>
          <Link to='/about' className='text-white font-bold'>Обо мне</Link>
          {!isAdmin && <Link to='/login' className='text-white font-bold'>Вход</Link>}
          {isAdmin && (
            <>
                <Link to='/admin' className='text-white font-bold'>Админ панель</Link>
                <button onClick={handleLogoutClick} className='text-white font-bold'>Выход</button>
            </>
          )}
        </nav>
    </header>
    )
}


export default Header;