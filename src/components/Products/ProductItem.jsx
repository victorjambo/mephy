import React from 'react';
import { Link } from 'react-router-dom';

import Ratings from './Ratings';

const ProductItem = ({
  prize, initialPrize = null, title, tag, rating, image, flag, id
}) => (
  <div className="col-md-4 col-sm-6">
    <div className="product-item position_relative mb_30">
      {flag && <div className="sale position_absolute">{flag}</div>}
      <Link to={`/products/${id}`}><img src={image} alt="Not found!" /></Link>
      <h5 className="product_title"><Link to={`/products/${id}`}>{title}</Link></h5>
      <div className="tag">{tag}</div>
      <div className="price-box">
        {initialPrize && <del>{initialPrize}</del>}
        <span>{prize}</span>
      </div>
      <Ratings rating={rating} />
    </div>
  </div>
);

export default ProductItem;
