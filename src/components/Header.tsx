import React from 'react';
import {RouterPage} from '../router';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <button className='btn-header'>
        <Link to={RouterPage.MAIN} className="header__link">
          Main
        </Link>
      </button>
      <button className='btn-header'>
        <Link to={RouterPage.FAVORITE}>
          Favorite
        </Link>
      </button>
    </header>
  );
};

export default Header;
