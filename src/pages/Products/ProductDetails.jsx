/* eslint-disable no-shadow */
/* eslint-disable eqeqeq */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Banner from '../../common/Banner';
import ExtraPadding from '../../common/ExtraPadding';
import ProductItem from '../../components/Products/ProductItem';
import Ratings from '../../components/Products/Ratings';
import Search from '../../components/Products/Search';
import FilterPrice from '../../components/Products/FilterPrice';
import FilterCat from '../../components/Products/FilterCat';
import SidebarProducts from '../../components/Products/SidebarProducts';
import { getProducts } from '../../redux/actions';
import Preloader from '../../common/Preloader';
import SocialMediaShare from '../../common/SocialMediaShare';
import ProductInfoCat from './ProductInfoCat';
import AddToCart from './AddToCart';
import ShortDescription from './ShortDescription';
import PriceBox from './PriceBox';
import SingleProductImage from './SingleProductImage';


class ProductDetails extends React.Component {
  state = {
    product: {},
  }

  componentDidMount() {
    const { getProducts } = this.props;
    getProducts();
  }

  componentWillReceiveProps(props) {
    const { products, match: { params: { id } } } = props;
    const { history } = this.props;
    if (products) {
      const product = products.find(product => product.id === id);
      if (product) {
        this.setState({ product });
      } else {
        history.push('/product-not-found');
      }
    }
  }

  render() {
    const { product } = this.state;
    const { products } = this.props;
    return (
      <React.Fragment>
        <Banner pageTitle={product.title} titlePreviousPageLink="Products" previousPageLink="/products" titleCurrentPage={product.title} />

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

              {
                Object.keys(product).length ? (
                  <div className="col-md-9">
                    <div className="row">
                      <SingleProductImage
                        productTitle={product.title}
                        image={product.image}
                        thumb={product.thumb}
                      />
                      <div className="col-lg-6 col-md-6">
                        <div className="single-product-info">
                          <h5 className="single_product_title">{product.title}</h5>
                          <Ratings rating={product.rating} />
                          <PriceBox initialPrize={product.initialPrize} prize={product.prize} />
                          <ShortDescription description={product.description} />
                          <AddToCart />
                          <ProductInfoCat />
                          <SocialMediaShare />
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
                      {
                        products && products.slice(0, 6).map(item => (
                          <ProductItem
                            prize={item.prize}
                            title={item.title}
                            tag={item.tag}
                            rating={item.rating}
                            image={item.image}
                            id={item.id}
                            flag={item.flag}
                            key={item.id}
                          />
                        ))
                      }
                    </div>
                  </div>
                ) : (<Preloader />)
              }

            </div>
          </div>
        </section>

        <ExtraPadding />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isLoaded: state.firebase.profile.isLoaded,
  isEmpty: state.firebase.profile.isEmpty,
  products: state.firestore.ordered.products,
});

const mapDispatchToProps = dispatch => ({
  getProducts: bindActionCreators(getProducts, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
