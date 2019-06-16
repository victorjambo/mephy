import React from 'react';
import { Link } from 'react-router-dom';

import { baseUrl } from '../helpers/constants';
import ProductDropdown from './ProductDropdown';

class Header extends React.Component {
  state = {
    fixed: ''
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  handleScroll = () => {
    this.setState(() => {
      const fixed = this.isFixed() ? 'fixed-header' : '';
      return { fixed };
    });
  };

  isFixed = () => window.scrollY > 300;

  render() {
    const { fixed } = this.state;

    return (
      <header id="header" className={`header_4 nav-on-banner ${fixed}`}>
        <div className="nav_header bg_secondary">
          <div className="container">
            <div className="row">
              <div className="col-md-12 ">
                <div className="nav_menu ">
                  <nav className="navbar navbar-default">
                    <div className="navbar-header">
                      <button
                        id="toggle-button"
                        type="button"
                        className="navbar-toggle collapsed"
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

                    <div className="navbar-collapse collapse" id="bs-example-navbar-collapse-1">
                      <ul className="navbar-nav nav-contact pull-right">
                        <li><Link className="btn btn-primary" to="/cart">cart <i className="fa fa-shopping-cart" /></Link></li>
                      </ul>
                      <ul className="nav navbar-nav navbar-right nav_item nav-mega">
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
                        <li><Link to="/products" id="menu-products-mobile">Products</Link></li>
                        <li className="dropdown" id="menu-products">
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
                          <ul className="dropdown-menu mega-menu">
                            <li><ProductDropdown /></li>
                          </ul>
                        </li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link className="appointment" to="/appointment">Appointment</Link></li>
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
  }
}

export default Header;
