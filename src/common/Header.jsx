import React from 'react';
import { Link } from 'react-router-dom';
import { baseUrl } from '../helpers/constants';

const Header = () => (
  <header id="header" className="header_4 nav-on-banner">
    <div className="nav_header bg_secondary">
      <div className="container">
        <div className="row">
          <div className="col-md-12 ">
            <div className="nav_menu ">
              <nav className="navbar navbar-default">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  <Link className="navbar-brand my_brand flexing" to="/">
                    <img className="img-responsive" id="logo" src={`${baseUrl}/assets/images/logo.png`} alt="mephys" />
                    <div className="company-name">
                      ME<span>PHYS</span>
                    </div>
                  </Link>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="navbar-nav nav-contact pull-right">
                    <li><Link className="btn btn-primary" to="/cart">cart <i className="fa fa-shopping-cart" /></Link></li>
                  </ul>
                  <ul className="nav navbar-nav navbar-right nav_item">
                    <li className="dropdown">
                      <Link to="/" className="dropdown-toggle">
                        Home
                      </Link>
                    </li>
                    <li><Link to="/about-us">About us</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li className="dropdown">
                      <Link
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        to="/products"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Products
                      </Link>
                      <ul className="dropdown-menu">
                        <li><Link to="/products">Top seller</Link></li>
                        <li><Link to="/products">Top brands</Link></li>
                        <li><Link to="/products">View All Products</Link></li>
                        <li><Link to="/products">View All Brands</Link></li>
                        <li><Link to="/products">View Healthcare Solutions</Link></li>
                      </ul>
                    </li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/#appointment">Appointment</Link></li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
