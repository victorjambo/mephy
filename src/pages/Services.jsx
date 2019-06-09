/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Masonry from 'react-masonry-component';

import Banner from '../common/Banner';
import ExtraPadding from '../common/ExtraPadding';
import services from '../mock/services';

const items = services.map(item => (
  <div className="col-md-4 col-sm-6" key={item.id}>
    <div className="row">
      <div className="service_block_1 flat_primary flat_medium bg_white">
        <i className={item.faIcon} aria-hidden="true" />
        <div className="service_text d_table">
          <h6 className="inner_title pb_10">
            <a className="color_secondary">{item.title}</a>
          </h6>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  </div>
));

const Services = () => (
  <React.Fragment>
    <Banner pageTitle="Services" titlePreviousPageLink="Home" previousPageLink="/" titleCurrentPage="Services" />

    <section className="medical_service bg_gray">
      <div className="container">
        <div className="row">
          <Masonry>
            {items}
          </Masonry>
        </div>
      </div>
    </section>

    <ExtraPadding />
  </React.Fragment>
);

export default Services;
