/* eslint-disable no-shadow */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Preloader from '../../common/Preloader';
import { getProducts } from '../../redux/actions';


class Featured extends React.Component {
  componentDidMount() {
    const { getProducts } = this.props;
    getProducts();
  }

  render() {
    const { products } = this.props;
    return (
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
            {
              products ? products.slice(5, 8).map(product => (
                <div className="col-md-4" key={product.id}>
                  <div className="thumbnail_block_1 bg_white hover_zoom">
                    <div className="overflow_hidden">
                      <Link to={`/products/${product.id}`}>
                        <img src={product.image} alt="product" />
                      </Link>
                    </div>
                    <div className="thumbnail_content">
                      <span className="date">{product.brand}</span>
                      <h5 className="inner_title">
                        <Link className="color_secondary" to={`/products/${product.id}`}>
                          {product.title}
                        </Link>
                      </h5>
                      <Link to={`/products/${product.id}`} className="read_more color_primary">
                        Make an order<i className="fa fa-long-arrow-right " aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              )) : (<Preloader />)
            }
          </div>
          <div className="row more-products">
            <div className="col-md-4 col-md-offset-4">
              <Link to="/products" className="btn btn-primary">More Products</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  products: state.firestore.ordered.products,
});

const mapDispatchToProps = dispatch => ({
  getProducts: bindActionCreators(getProducts, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Featured);
