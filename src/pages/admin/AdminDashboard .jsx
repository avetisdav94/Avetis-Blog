import React from 'react';

const AdminDashboard = ({ onLogout }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button className='btn btn-primary mt-3 ' onClick={() => onLogout()}>Logout</button>
      {/* Здесь будет отображение и управление постами */}
    </div>
  );
};

export default AdminDashboard;
