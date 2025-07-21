import React, { useState } from 'react';

function Navbar({ setActivePage }) {
  const [dropdowns, setDropdowns] = useState({
    admin: false,
    login: false,
    register: false,
  });

  const toggleDropdown = (menu) => {
    setDropdowns((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <header>
      <nav>
        <div className="logo">Library</div>
        <ul className="nav-links">
          <li><a href="#" onClick={() => setActivePage('home')}>Home</a></li>

          <li className="dropdown">
            <a href="#" onClick={() => toggleDropdown('admin')}>Admin ▾</a>
            {dropdowns.admin && (
              <ul className="dropdown-content">
                <li><a href="#" onClick={() => setActivePage('adminDashboard')}>Dashboard</a></li>
                <li><a href="#" onClick={() => setActivePage('manageBooks')}>Manage Books</a></li>
              </ul>
            )}
          </li>

          <li className="dropdown">
            <a href="#" onClick={() => toggleDropdown('login')}>Login ▾</a>
            {dropdowns.login && (
              <ul className="dropdown-content">
                <li><a href="#" onClick={() => setActivePage('userLogin')}>User Login</a></li>
                <li><a href="#" onClick={() => setActivePage('adminLogin')}>Admin Login</a></li>
              </ul>
            )}
          </li>

          <li className="dropdown">
            <a href="#" onClick={() => toggleDropdown('register')}>Register ▾</a>
            {dropdowns.register && (
              <ul className="dropdown-content">
                <li><a href="#" onClick={() => setActivePage('userRegister')}>User Register</a></li>
                <li><a href="#" onClick={() => setActivePage('adminRegister')}>Admin Register</a></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
