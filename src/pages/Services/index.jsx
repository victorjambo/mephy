/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Masonry from 'react-masonry-component';
import { Link } from 'react-router-dom';

import Banner from '../../common/Banner';
import ExtraPadding from '../../common/ExtraPadding';
import services from '../../mock/services';

const items = services.map(item => (
  <div className="col-md-4 col-sm-6" key={item.id}>
    <div className="row">
      <div className="service_block_1 flat_primary flat_medium bg_white">
        <i className={item.faIcon} aria-hidden="true" />
        <div className="service_text d_table">
          <h6 className="inner_title pb_10">
            <Link to={`/services/${item.id}`} className="color_secondary">{item.title}</Link>
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
          <div className="col-md-12">
            <div className="title_area">
              <h2 className="section_title text-center color_secondary down_line_center">Our Special Services</h2>
              <span className="sub_title text-center color_gray">We aim to provide world class services.</span>
            </div>
          </div>
        </div>
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
