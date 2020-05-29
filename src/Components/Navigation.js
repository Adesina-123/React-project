import React from 'react';
import {Link} from 'react-router-dom'

const Navigation = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <Link className="navbar-brand text-light" to="/">
        Navbar
      </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link text-light" to="/">
              Home 
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/About">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/Price">
              Price
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/Deposit">
              Deposit
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navigation;
