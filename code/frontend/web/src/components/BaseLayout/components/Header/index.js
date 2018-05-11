//Dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';
//Internals
import './index.css';

const Header = () => (
  <div className="header">
    <h1 id="header-title">Flip Mart</h1>
    <div className="links-header">
      <p><NavLink activeClassName="selected" className="nav-link-header" to="/women">Women</NavLink></p>
      <p><NavLink activeClassName="selected" className="nav-link-header" to="/men">Men</NavLink></p>
      <p><NavLink activeClassName="selected" className="nav-link-header" to="/accessories">Accessories</NavLink></p>
      <p><NavLink activeClassName="selected" className="nav-link-header" to="/electronics">Electronics</NavLink></p>
    </div>
  </div>
)

export default Header;
