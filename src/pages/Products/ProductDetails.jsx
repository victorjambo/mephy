/* eslint-disable eqeqeq */
import React from 'react';
import { Link } from 'react-router-dom';

import Banner from '../../common/Banner';
import ExtraPadding from '../../common/ExtraPadding';
import ProductItem from '../../components/Products/ProductItem';
import products from '../../mock/products';
import Ratings from '../../components/Products/Ratings';
import Search from '../../components/Products/Search';
import FilterPrice from '../../components/Products/FilterPrice';
import FilterCat from '../../components/Products/FilterCat';
import SidebarProducts from '../../components/Products/SidebarProducts';
import { baseUrl } from '../../helpers/constants';


const productItems = products.slice(0, 6).map(item => (
  <ProductItem
    prize={item.prize}
    title={item.title}
    tag={item.tag}
    rating={item.rating}
    image={item.image}
    link={item.link}
    flag={item.flag}
    key={item.id}
  />
));

const product = {
  rating: 2,
  link: '/products/1',
  id: 1,
  image: 'assets/images/products/12.png',
  tag: 'Geriatrics, Health, Psychology',
  initialPrize: 'Ksh. 145',
  prize: 'Kes. 124',
  title: 'Medichine',
  flag: 'new',
  description: 'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat leo.'
};

const ProductDetails = () => (
  <React.Fragment>
    <Banner pageTitle="Blue Microscope" titlePreviousPageLink="Products" previousPageLink="/products" titleCurrentPage="Blue Microscope" />

    <section className="bg_gray">
      <div className="container">
        <div className="row">

          <div className="col-md-3">
            <div className="sidebar_style3">
              <Search />
              <FilterPrice />
              <FilterCat />
              <SidebarProducts />
            </div>
          </div>

          <div className="col-md-9">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="single-product-image">
                  <Link to={product.link}>
                    <img src={`${baseUrl}/${product.image}`} alt="Not found!" />
                  </Link>
                  <ul>
                    <li><img src={`${baseUrl}/${product.image}`} alt="Not found!" /></li>
                    <li><img src={`${baseUrl}/${product.image}`} alt="Not found!" /></li>
                    <li><img src={`${baseUrl}/${product.image}`} alt="Not found!" /></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="single-product-info">
                  <h5 className="single_product_title">{product.title}</h5>
                  <Ratings rating={product.rating} />
                  <div className="price-box">
                    {product.initialPrize && <del>{product.initialPrize}</del>}
                    <span>{product.prize}</span>
                  </div>

                  <div className="short-description">
                    <p>
                      {product.description}
                    </p>
                  </div>
                  <form>
                    <div className="quantity">
                      <input type="number" value="1" />
                      <button type="submit" className="btn btn-primary" onClick={() => alert('item added to cart')}>Add to cart</button>
                    </div>
                  </form>
                  <table className="about_product">
                    <tbody>
                      <tr>
                        <td>CATEGORIES : </td>
                        <td>Geriatrics, Health</td>
                      </tr>
                      <tr>
                        <td>TAGS : </td>
                        <td>Digital, Monitors, Tools</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="social_icon color_secondary_a">
                    <span>Social Media Share</span>
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/mephys.ke">
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/MephysK">
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="https://instagram.com/mephys.ke">
                          <i className="fa fa-instagram" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="my_50 p_30 bg_white">
                  <ul className="nav nav-tabs" role="tablist">
                    <li role="presentation" className="active">
                      <a
                        href="#home"
                        aria-controls="home"
                        role="tab"
                        data-toggle="tab"
                      >
                      Description
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content">
                    <div role="tabpanel" className="tab-pane active" id="home">
                      {product.description}
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h4 className="inner_title down_line_left">Related Product</h4>
              </div>
              {productItems}
            </div>
          </div>

        </div>
      </div>
    </section>

    <ExtraPadding />
  </React.Fragment>
);

export default ProductDetails;
