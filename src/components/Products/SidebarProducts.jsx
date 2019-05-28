import React from 'react';
import { Link } from 'react-router-dom';

import Ratings from './Ratings';
import products from '../../mock/products';

const items = products.slice(0, 5).map(product => (
  <li>
    <Link to={product.link}>
      <img src={product.image} alt="Not found!" />
    </Link>
    <div className="d_table pull-left">
      <h6><Link to={product.link}>{product.title}</Link></h6>
      <Ratings rating={product.rating} />
      <div className="price-box">
        {product.initialPrize && <del>{product.initialPrize}</del>}
        <span>{product.prize}</span>
      </div>
    </div>
  </li>
));

const SidebarProducts = () => (
  <div className="shop-product sidebar-widget mb_30">
    <h5 className="inner-title down_line_left">Products</h5>
    <ul>{items}</ul>
  </div>
);

export default SidebarProducts;
