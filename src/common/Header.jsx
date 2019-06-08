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
                    <li className="dropdown">
                      <Link
                        to="/about-us"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        About us
                      </Link>
                      <ul className="dropdown-menu">
                        <li><Link to="/about-us#intro">Who are we</Link></li>
                        <li><Link to="/about-us#mission">Mission</Link></li>
                        <li><Link to="/about-us#vision">Vision</Link></li>
                        <li><Link to="/about-us#values">Core Values</Link></li>
                      </ul>
                    </li>
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
                        <li className="dropdown">
                          <Link to="/products">Body part</Link>
                          <ul className="dropdown-menu">
                            <li><Link to="/products">Knee</Link></li>
                            <li><Link to="/products">Hip</Link></li>
                            <li><Link to="/products">Shoulder</Link></li>
                            <li><Link to="/products">Spine</Link></li>
                            <li><Link to="/products">Hand</Link></li>
                            <li><Link to="/products">Foot</Link></li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <Link to="/products">Brand</Link>
                          <ul className="dropdown-menu">
                            <li><Link to="/products">AIRCAST</Link></li>
                            <li><Link to="/products">CMF</Link></li>
                            <li><Link to="/products">COMPEX</Link></li>
                            <li><Link to="/products">DONJOY</Link></li>
                            <li><Link to="/products">DR. COMFORT</Link></li>
                            <li><Link to="/products">PROCARE</Link></li>
                            <li><Link to="/products">MotionMD</Link></li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <Link to="/products">Category</Link>
                          <ul className="dropdown-menu">
                            <li><Link to="/products">BRACING & SUPPORTS</Link></li>
                            <li><Link to="/products">SURGICAL</Link></li>
                            <li><Link to="/products">RECOVERY</Link></li>
                            <li><Link to="/products">FOOTCARE</Link></li>
                          </ul>
                        </li>
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
