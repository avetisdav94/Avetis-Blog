import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

//Import Components
import Header from './components/Header/Header';

//Import Pages
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import AdminDashboard from './pages/admin/AdminDashboard ';

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const handleLogin = (username, password, navigate) => {
    if(username === 'admin' && password === 'admin') {
      setIsAdmin(true);
      navigate('/admin');
    }else {
      alert('Неверное имя пользователя или пароль');
    }
  }

  const handleLogout = (navigate) => {
    setIsAdmin(false);
    navigate('/');
  }


  return (
    <Router>
      <Header isAdmin={isAdmin} />
      <main className='p-4'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login onLogin={handleLogin} />} />
        {isAdmin && <Route path="admin" element={<AdminDashboard  onLogout={handleLogout}/>} />}
      </Routes>
      </main>
    </Router>
  );
}


export default App;