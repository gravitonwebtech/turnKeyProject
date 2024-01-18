import React, { useState, useEffect } from 'react';
import LoginWith from './LoginWith';
import Login from './Login';
import Register from './Register';
import CreatAccount from './CreatAccount';  // Import the new component
import WelcomePage from './WelcomePage';

export default function RegisterLogin() {
  const [currentPage, setCurrentPage] = useState('loginWith');

  useEffect(() => {
    // Set the initial page to 'loginWith' when the component mounts
    setCurrentPage('loginWith');
  }, []);

  const togglePage = (page) => {
    setCurrentPage(page);
  };

  const handleRegisterSuccess = () => {
    // Change the page after successful registration to 'CreatAccount'
    setCurrentPage('creatAccount');
  };


  const handleCreatAccountSubmit = () => {
    // Change the page after CreatAccount form submission to 'welcome'
    setCurrentPage('welcome');
  };

  return (
    <>
      {currentPage === 'loginWith' && <LoginWith togglePage={() => togglePage('login')} />}
      {currentPage === 'login' && <Login togglePage={() => togglePage('register')} />}
      {currentPage === 'register' && <Register togglePage={() => togglePage('login')} onRegisterSuccess={handleRegisterSuccess} />}
      {currentPage === 'creatAccount' && <CreatAccount onWelcomeSuccess={handleCreatAccountSubmit} />}
      {currentPage === 'welcome' && <WelcomePage />}  {/* Render the WelcomePage component */}
    </>
  );
}
