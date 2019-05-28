import React from 'react';

const SidebarProducts = () => (
  <div className="shop-product sidebar-widget mb_30">
    <h5 className="inner-title down_line_left">Products</h5>
    <ul>
      <li>
        <a href="product-details.html">
          <img src="assets/images/products/1.png" alt="Not found!" />
        </a>
        <div className="d_table pull-left">
          <h6><a href="product-details.html">Disital Monitor</a></h6>
          <div className="stars">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star-half-empty" />
            <i className="fa fa-star-o" />
          </div>
          <div className="price-box">
            <del>Ksh. 145</del>
            <span>Ksh. 125</span>
          </div>
        </div>
      </li>
      <li>
        <a href="product-details.html"><img src="assets/images/products/2.png" alt="Not found!" /></a>
        <div className="d_table pull-left">
          <h6><a href="product-details.html">Medical Gloves</a></h6>
          <div className="stars">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star-half-empty" />
            <i className="fa fa-star-o" />
          </div>
          <del>Ksh. 170</del>
          <span>Ksh. 150</span>
        </div>
      </li>
      <li>
        <a href="product-details.html"><img src="assets/images/products/1.png" alt="Not found!" /></a>
        <div className="d_table pull-left">
          <h6><a href="product-details.html">Disital Monitor</a></h6>
          <div className="stars">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star-half-empty" />
            <i className="fa fa-star-o" />
          </div>
          <del>Ksh. 170</del>
          <span>Ksh. 150</span>
        </div>
      </li>
      <li>
        <a href="product-details.html"><img src="assets/images/products/3.png" alt="Not found!" /></a>
        <div className="d_table pull-left">
          <h6><a href="product-details.html">Injection</a></h6>
          <div className="stars">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star-half-empty" />
            <i className="fa fa-star-o" />
          </div>
          <del>Ksh. 170</del>
          <span>Ksh. 150</span>
        </div>
      </li>
    </ul>
  </div>
);

export default SidebarProducts;
