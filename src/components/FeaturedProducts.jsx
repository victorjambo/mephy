import React from 'react';
import { Link } from 'react-router-dom';
import products from '../mock/products';

const items = products.slice(0, 3).map(product => (
  <div className="col-md-4">
    <div className="thumbnail_block_1 bg_white hover_zoom">
      <div className="overflow_hidden">
        <Link to={product.link}>
          <img src={product.image} alt="product" />
        </Link>
      </div>
      <div className="thumbnail_content">
        <span className="date">{product.brand}</span>
        <h5 className="inner_title">
          <Link className="color_secondary" href={product.link}>
            {product.title}
          </Link>
        </h5>
        <Link to={product.link} className="read_more color_primary">
          Make an order<i className="fa fa-long-arrow-right " aria-hidden="true" />
        </Link>
      </div>
    </div>
  </div>
));

const FeaturedProducts = () => (
  <section className="bg_gray" id="products">
    <div className="container">
      <div className="row ">
        <div className="col-md-12">
          <div className="title_area">
            <h2 className="section_title down_line_center text-center">Products</h2>
            <span className="sub_title text-center">
              Serving all people through exemplary health care, education, research and community outreach
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        {items}
      </div>
      <div className="row more-products">
        <div className="col-md-4 col-md-offset-4">
          <Link to="/products" className="btn btn-primary">More Products</Link>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedProducts;
