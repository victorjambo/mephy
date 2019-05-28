import React from 'react';
import { Link } from 'react-router-dom';

const Banner = ({
  pageTitle, titlePreviousPageLink, previousPageLink, titleCurrentPage
}) => (
  <section className="banner overlay-1">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="banner_info position_relative">
            <h1 className="inner_title color_primary pb_20">{pageTitle}</h1>
            <ul className="color_white_a">
              <li>
                <Link to={previousPageLink}>{titlePreviousPageLink}</Link>
              </li>
              <li><Link to={previousPageLink}>.</Link>
              </li>
              <li>{titleCurrentPage}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
