import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className='h-wrapper'>
      <img className='image' src='./images/logo4.png' alt='logo' width={50} />
      <section className='h-wrappe'>
        <div className='hamburger' onClick={toggleMenu}>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
        <div className={`h-menu ${isOpen ? 'open' : ''}`}>
          <a href='#home'>Home</a>
          <a href='#about'>About</a>
          <a href='#services'>Services</a>
          <a href='#projects'>Projects</a>
          <a href='#Latest'>Blog</a>
          <a href='#contact'>Contact</a>
        </div>
      </section>
    </section>
  );
};

export default Header;
