import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RouterPage } from '../router';

const Header = () => {
  const location = useLocation();

  return (
    <header className='header'>
      <button className={`btn-header ${location.pathname === RouterPage.MAIN ? 'active' : ''}`}>
        <Link to={RouterPage.MAIN} className="header__link">
          Main
        </Link>
      </button>
      <button className={`btn-header ${location.pathname === RouterPage.FAVORITE ? 'active' : ''}`}>
        <Link to={RouterPage.FAVORITE} className="header__link">
          Favorite
        </Link>
      </button>
    </header>
  );
};

export default Header;
