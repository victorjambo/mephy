import React from 'react';
import { Link } from 'react-router-dom';

import Banner from '../common/Banner';
import ExtraPadding from '../common/ExtraPadding';

const PageNotFound = () => (
  <React.Fragment>
    <Banner pageTitle="Page Not Found" titlePreviousPageLink="Home" previousPageLink="/" titleCurrentPage="Page Not Found" />

    <section className="bg_gray">
      <div className="container">
        <div className="row">
          <div className="col-me-12">
            <div className="error text-center center-block">
              <h1 className="color_primary">404</h1>
              <h2 className="inner_title color_secondary mt_40 mb_30">Page Not Found!</h2>
              <p>Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
              <Link to="/" className="btn btn-primary">Go Back Home</Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ExtraPadding />

  </React.Fragment>
);

export default PageNotFound;
