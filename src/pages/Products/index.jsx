import React from 'react';

import Banner from '../../common/Banner';
import ExtraPadding from '../../common/ExtraPadding';
import ProductItem from '../../components/Products/ProductItem';
import mock from '../../mock/products';
import categories from '../../mock/categories';
import Paginate from '../../common/Paginate';
import Search from '../../components/Products/Search';
import FilterPrice from '../../components/Products/FilterPrice';
import FilterCat from '../../components/Products/FilterCat';
import SidebarProducts from '../../components/Products/SidebarProducts';

export default class extends React.Component {
  state = {
    products: mock,
    pageTitle: 'Our Products'
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    if (id) {
      categories.forEach((cat) => {
        if (cat.id === id) {
          this.setState({ products: cat.products, pageTitle: cat.title });
        }
      });
    }
  }

  render() {
    const { products, pageTitle } = this.state;
    const productItems = products.map(product => (
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
    ));

    return (
      <React.Fragment>
        <Banner pageTitle={pageTitle} titlePreviousPageLink="Home" previousPageLink="/" titleCurrentPage="Products" />
        <section className="bg_gray pb_170">
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
  }
}
