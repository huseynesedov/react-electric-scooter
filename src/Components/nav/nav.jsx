import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX, faBox, faUser, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './nav-footer.css';
import { useSelector } from 'react-redux';

function Navbar() {
  const cartList = useSelector((state) => state.basket);

  const [acmaq, setAcmaq] = useState(false);
  const [acmaq2, setAcmaq2] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const handleSearchClick = () => {
    setAcmaq(!acmaq);
  };

  const input = () => {
    setAcmaq2(!acmaq2);
  };

  useEffect(() => {
    // Fetch data here or set data using a different method
    // For the sake of simplicity, let's assume data is already available
    // Replace this with your actual data fetching logic
    const fetchData = async () => {
      try {
        const response = await fetch('https://scooter-api.vercel.app/data');
        const json = await response.json();
        setData(json);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Filter data based on searchValue
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchValue, data]);

  return (
    <>
      <nav>
        <div className={`navbar ${acmaq2 ? 'showInput' : ''}`}>
          <FontAwesomeIcon icon={faBars} className="fas" onClick={handleSearchClick} />
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
                <Link to="/shop">Shop All</Link>
              </li>
              <li>
                <Link to="/electric">Electric Scooters</Link>
              </li>
              <li>
                <Link to="/Accessories">Accessories</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
              <Link to="/Login">
                <FontAwesomeIcon className="fa-solid fas fa-user" icon={faUser} />
              </Link>
            </ul>
          </div>
          <div className="logo">
            <Link to="/">
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
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                </div>
              )}
            </div>
            <Link to="/add">
              <FontAwesomeIcon className="box" icon={faBox} />
            </Link>
            <Link to="/Login">
              <FontAwesomeIcon className="fa" icon={faUser} />
            </Link>
          </div>
        </div>
      </nav>
      {acmaq2 && (
      
     
        <ul className='search-tb'>
          {filteredData.map((item) => (
            <Link className='a' to={`/Detail/${item.id}`} >
            
            <div key={item.id}>
              <div className='search-div'>
              <li>{item.title}</li>
              <li><img src={item.src} alt={item.title} /></li>
              </div>
            </div>

            </Link>
          
          ))}
        </ul>
      
      )}

      <Outlet />
    </>
  );
}

export default Navbar;
