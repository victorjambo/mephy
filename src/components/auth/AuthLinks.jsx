import React from 'react';
import { Link } from 'react-router-dom';


const AuthLinks = () => (
  <React.Fragment>
    <li>
      <Link to="/cart">
        <i className="fa fa-shopping-cart" />
      </Link>
    </li>
    <li><Link to="/">Login</Link></li>
  </React.Fragment>
);

export default AuthLinks;
