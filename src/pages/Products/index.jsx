/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Banner from '../../common/Banner';
import ExtraPadding from '../../common/ExtraPadding';
import ProductItem from '../../components/Products/ProductItem';
// import Paginate from '../../common/Paginate';
import Search from '../../components/Products/Search';
import FilterCat from '../../components/Products/FilterCat';
import SidebarProducts from '../../components/Products/SidebarProducts';
import Preloader from '../../common/Preloader';
import { getProducts } from '../../redux/actions';


class Products extends React.Component {
  state = {
    pageTitle: 'Our Products'
  }

  componentDidMount() {
    const { getProducts, match: { params: { id } } } = this.props;
    getProducts(id);
  }

  render() {
    const { pageTitle } = this.state;
    const { products } = this.props;

    return (
      <React.Fragment>
        <Banner pageTitle={pageTitle} titlePreviousPageLink="Home" previousPageLink="/" titleCurrentPage="Products" />
        <section className="bg_gray pb_170">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="sidebar_style3">
                  <Search />
                  {/* <FilterPrice /> */}
                  <FilterCat />
                  <SidebarProducts />
                </div>
              </div>

              <div className="col-md-9">
                <div className="row">
                  {
                    products ? products.map(product => (
                      <ProductItem
                        prize={product.prize}
                        title={product.title}
                        tag={product.tag}
                        rating={product.rating}
                        image={product.image}
                        id={product.id}
                        flag={product.flag}
                        key={product.id}
                      />
                    )) : (<Preloader />)
                  }
                </div>

                {/* <Paginate /> */}
              </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(Products);
