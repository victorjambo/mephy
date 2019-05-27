import React from 'react';

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
                  <a className="navbar-brand my_brand flexing" href="/">
                    <img className="img-responsive" id="logo" src="./assets/images/logo.png" alt="mephys" />
                    <div className="company-name">
                      ME<span>PHYS</span>
                    </div>
                  </a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="navbar-nav nav-contact pull-right">
                    <li><a className="btn btn-primary" href="/">Track Order</a></li>
                  </ul>
                  <ul className="nav navbar-nav navbar-right nav_item">
                    <li className="dropdown">
                      <a
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        href="/"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Home
                          </a>
                    </li>
                    <li><a href="about-us.html">About us</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li className="dropdown">
                      <a
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        href="/"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Products
                          </a>
                      <ul className="dropdown-menu">
                        <li><a href="products.html">Top seller</a></li>
                        <li><a href="products.html">Top brands</a></li>
                        <li><a href="products.html">View All Products</a></li>
                        <li><a href="products.html">View All Brands</a></li>
                        <li><a href="products.html">View Healthcare Solutions</a></li>
                      </ul>
                    </li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="cart.html">cart</a></li>
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
