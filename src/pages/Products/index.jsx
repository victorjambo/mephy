import React from 'react';

import Banner from '../../common/Banner';
import ExtraPadding from '../../common/ExtraPadding';
import ProductItem from '../../components/Products/ProductItem';
import products from '../../mock/products';
import Paginate from '../../common/Paginate';


export default () => {
  const productItems = products.map(item => (
    <ProductItem
      prize={item.prize}
      itemTitle={item.itemTitle}
      tag={item.tag}
      rating={item.rating}
      image={item.image}
      link={item.link}
      flag={item.flag}
    />
  ));

  return (
    <React.Fragment>
      <Banner pageTitle="Our Products" titlePreviousPageLink="Home" previousPageLink="/" titleCurrentPage="Products" />
      <section className="bg_gray pb_170">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sidebar_style3">
                <div className="sidebar-widget mb_30">
                  <form action="#" className="search_form2">
                    <input type="text" className="form-control" placeholder="Search Products..." />
                    <button type="submit"><i className="fa fa-search" /></button>
                  </form>
                </div>
                <div className="price-filter sidebar-widget mb_50">
                  <h5 className="inner-title down_line_left">Filter By Price</h5>
                  <div className="filter">
                    <div id="pricing-range">
                      <div className="filter-range"> </div>
                    </div>
                    <div className="pricing-value">
                      <p>Price: <span id="pricing">Ksh. 300 - Ksh. 620</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="shop-category sidebar-widget mb_30">
                  <h5 className="inner-title down_line_left">Categories</h5>
                  <ul>
                    <li><a href="/">Children’s Health (01)</a></li>
                    <li><a href="/">Geriatrics (07)</a></li>
                    <li><a href="/">Health (20)</a></li>
                    <li><a href="/">Oftamology (02)</a></li>
                    <li><a href="/">Psychology (03)</a></li>
                  </ul>
                </div>
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
              </div>
            </div>

            <div className="col-md-9">
              <div className="row">
                {productItems}
              </div>

              <Paginate />
            </div>

          </div>
        </div>
      </section>
      <ExtraPadding />
    </React.Fragment>
  );
};
