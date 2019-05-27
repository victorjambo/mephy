import React from 'react';

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
        <div className="col-md-4">
          <div className="thumbnail_block_1 bg_white hover_zoom">
            <div className="overflow_hidden">
              <a href="/">
                <img src="assets/images/prods/7.jpg" alt="product" />
              </a>
            </div>
            <div className="thumbnail_content">
              <span className="date">Brand of product</span>
              <h5 className="inner_title"><a className="color_secondary" href="/">A22 Custom Knee Brace</a></h5>
              <a href="/" className="read_more color_primary">Make an order<i className="fa fa-long-arrow-right " aria-hidden="true" /></a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="thumbnail_block_1 bg_white hover_zoom">
            <div className="overflow_hidden">
              <a href="/">
                <img src="assets/images/prods/2.png" alt="product" />
              </a>
            </div>
            <div className="thumbnail_content">
              <span className="date">Procare inc</span>
              <h5 className="inner_title"><a className="color_secondary" href="/">UltraSling II</a></h5>
              <a href="/" className="read_more color_primary">
                Make an order
                <i className="fa fa-long-arrow-right " aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="thumbnail_block_1 bg_white hover_zoom">
            <div className="overflow_hidden">
              <a href="/">
                <img src="assets/images/prods/1.png" alt="product" />
              </a>
            </div>
            <div className="thumbnail_content">
              <span className="date">Aircast</span>
              <h5 className="inner_title"><a className="color_secondary" href="/">BACK/HIP/RIB CRYO/CUFF</a></h5>
              <a href="/" className="read_more color_primary">Make an order<i className="fa fa-long-arrow-right " aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="row more-products">
        <div className="col-md-4 col-md-offset-4">
          <a href="products.html" className="btn btn-primary">More Products</a>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedProducts;
