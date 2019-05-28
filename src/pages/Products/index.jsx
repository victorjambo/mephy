import React from 'react';

import Banner from '../../common/Banner';
import ExtraPadding from '../../common/ExtraPadding';
import ProductItem from '../../components/Products/ProductItem';
import products from '../../mock/products';
import Paginate from '../../common/Paginate';
import Search from '../../components/Products/Search';
import FilterPrice from '../../components/Products/FilterPrice';
import FilterCat from '../../components/Products/FilterCat';
import SidebarProducts from '../../components/Products/SidebarProducts';


export default () => {
  const productItems = products.map(item => (
    <ProductItem
      prize={item.prize}
      itemTitle={item.itemTitle}
      tag={item.tag}
      rating={item.rating}
      image={item.image}
      link={item.link}
      flag={item.flag}
    />
  ));

  return (
    <React.Fragment>
      <Banner pageTitle="Our Products" titlePreviousPageLink="Home" previousPageLink="/" titleCurrentPage="Products" />
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
};
