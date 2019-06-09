import React from 'react';
import { Link } from 'react-router-dom';

import services from '../mock/services';

const items = services.slice(0, 8).map(service => (
  <div className="col-md-3 col-sm-6" key={service.id}>
    <div className="text-center mb_30 py_15 color_white flat_large">
      <i className={service.faIcon} aria-hidden="true" />
      <h6 className="inner_title py_20">
        <Link to="/services" className="color_white">{service.title}</Link>
      </h6>
      <p>{`${service.description.slice(0, 75)}...`}</p>
    </div>
  </div>
));


const Services = () => (
  <section className="bg_primary">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="title_area">
            <h2 className="section_title text-center down_line_center color_white">
              <span className="color_white">Kind of Physiotherapy </span> Provide Service for Patient
            </h2>
            <span className="sub_title text-center color_white">
              For the expected, unexpected and everything in between
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        {items}
      </div>
    </div>
  </section>
);

export default Services;
