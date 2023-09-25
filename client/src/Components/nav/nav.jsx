import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX, faBox, faUser, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './nav-footer.css';

function Navbar() {
  
  const [acmaq, setAcmaq] = useState(false);
  const [acmaq2, setAcmaq2] = useState(false);

  const handleSearchClick = () => {
    setAcmaq(!acmaq);
  };

  const input = () => {
    setAcmaq2(!acmaq2);
  };

  return (
    <>
      <nav>
        <div className={`navbar ${acmaq2 ? 'showInput' : ''}`}>
          <FontAwesomeIcon icon={faBars} className='fas' onClick={handleSearchClick} />
          <div className={`nav-links ${acmaq ? 'gosder' : 'baglamaq'}`}>
            <div className="sidebar-logo">
              <span className="logo-name">
                <img
                  src="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/logo-regular.png"
                  alt=""
                />
              </span>
              <FontAwesomeIcon className="bx-x" onClick={handleSearchClick} icon={faX} />
            </div>
            <ul className="links">
              <li>
                <Link to='/shop'>Shop All</Link>
              </li>
              <li>
                <Link to="/electric">Electric Scooters</Link>
              </li>
              <li>
                <Link to='/Accessonries'>Accessories</Link>
              </li>
              <li>
                <Link to='/Contact'>Contact</Link>
              </li>
              <Link to='/Login'>

              <FontAwesomeIcon className="fa-solid fas fa-user " icon={faUser} />
              </Link>
            </ul>
          </div>
          <div className="logo">
            <Link to='/'>
              <img
                src="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/logo-regular.png"
                alt=""
              />
            </Link>
          </div>
          <div className="icons">
            <div className={`search-box ${acmaq2 ? 'showInput' : ''}`}>
              <FontAwesomeIcon
                icon={acmaq2 ? faTimes : faSearch}
                className="search-icon"
                onClick={input}
              />
              {acmaq2 && (
                <div className="input-box">
                  <input type="text" placeholder="Search..." />
                </div>
              )}
            </div>
            <Link to='/add'>
            
            <FontAwesomeIcon icon={faBox} />
            </Link>
            <Link to='/Login'>
            
            <FontAwesomeIcon className='fa' icon={faUser} />
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
