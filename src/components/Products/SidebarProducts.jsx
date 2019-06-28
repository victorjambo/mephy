/* eslint-disable no-shadow */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Ratings from './Ratings';


const SidebarProducts = ({ products }) => (
  <div className="shop-product sidebar-widget mb_30">
    <h5 className="inner-title down_line_left">Products</h5>
    <ul>
      {
        products && products.slice(0, 5).map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              <img src={product.image} alt="Not found!" />
            </Link>
            <div className="d_table pull-left">
              <h6><Link to={`/products/${product.id}`}>{product.title}</Link></h6>
              <Ratings rating={product.rating} />
              <div className="price-box">
                {product.initialPrize && <del>{product.initialPrize}</del>}
                <span>{product.prize}</span>
              </div>
            </div>
          </li>
        ))
      }
    </ul>
  </div>
);

const mapStateToProps = state => ({
  products: state.firestore.ordered.products,
});

export default connect(mapStateToProps)(SidebarProducts);
