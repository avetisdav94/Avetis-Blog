import React from 'react';

const AdminDashboard = ({ onLogout }) => {
  const handleLogout = () => {
    if (onLogout) {
      onLogout(() => window.location.reload()); // Обновление страницы после выхода
    } else {
      console.error('onLogout is not defined');
    }
  };

  return (
    <div className='admin-dashboard'>
      <h1 className='text-3xl mb-4'>Панель администратора</h1>
      <button
        onClick={handleLogout}
        className='bg-red-600 text-white px-4 py-2 rounded'>
        Выйти
      </button>
      {/* Здесь можно добавить функционал для добавления, редактирования и удаления постов */}
    </div>
  );
};

export default AdminDashboard;
