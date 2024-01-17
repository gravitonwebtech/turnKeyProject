import React, { useState, useEffect } from 'react';
import LoginWith from './LoginWith';
import Login from './Login';
import Register from './Register';

export default function RegisterLogin() {
  const [currentPage, setCurrentPage] = useState('loginWith');

  useEffect(() => {
    // Set the initial page to 'loginWith' when the component mounts
    setCurrentPage('loginWith');
  }, []);

  const togglePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {currentPage === 'loginWith' && <LoginWith togglePage={() => togglePage('login')} />}
      {currentPage === 'login' && <Login togglePage={() => togglePage('register')} />}
      {currentPage === 'register' && <Register togglePage={() => togglePage('login')} />}
    </>
  );
}
