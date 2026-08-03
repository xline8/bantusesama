import { useState } from 'react';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'login'

  if (currentPage === 'login') {
    return <LoginPage onNavigate={setCurrentPage} />;
  }

  return <HomePage onNavigate={setCurrentPage} />;
}

export default App;
