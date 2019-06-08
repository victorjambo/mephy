import React from 'react';
import { Link } from 'react-router-dom';

const AboutUsSummary = () => (
  <section className="full_row" id="about">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="title_area">
            <h4 className="section_title w_100">About Mephys</h4>
            <span className="sub_title w_100">Mephys has a holistic and integral approach to the health system</span>
          </div>
          <div className="text_area">
            <p>
              <font style={{ verticalAlign: 'inherit' }}>
                <font style={{ verticalAlign: 'inherit' }}>A method that acts as a means of diagnosis and treatment, which uses manual resources (that is, using the hands as a working tool) for a therapeutic approach to the body and its pains. </font>
                <font style={{ verticalAlign: 'inherit' }}>The philosophy of osteopathy is based on an in-depth knowledge of human anatomy and physiology. </font>
                <font style={{ verticalAlign: 'inherit' }}>Treatment through it allows the rebalancing of the functions of the body and the functioning of the body.</font>
              </font>
            </p>
            <Link to="/about-us" className="btn btn-primary">Read More</Link>
          </div>

        </div>
        <div className="col-md-6">
          <div className="intro-video intro-mini icon_primary">
            <a className="video-popup middle" href="https://vimeo.com/124622047" title="video popup">
              <div className="loader middle">
                <div className="loader-inner ball-scale-multiple">
                  <div />
                  <div />
                </div>
                <span className="tooltip" />
              </div>
              <i className="fa fa-play" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUsSummary;
