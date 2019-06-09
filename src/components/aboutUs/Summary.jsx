import React from 'react';
import { Link } from 'react-router-dom';

const Summary = () => (
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
              Mephys rehabilitation clinic – a leader in the city for physiotherapy and sports injuries!
              Our physiotherapists have years of experience in treating musculoskeletal and sporting injuries.
            </p>
            <p>
              At Mephys physiotherapy we believe in treating the person and not just the injury, to ensure their complete recovery.
              Our proven results help patients achieve optimal health, whether it’s to relieve back pain, reach a new level in sports or recover from work injury or accidents.
            </p>
            <p>
              At Mephys rehabilitation clinic we can help you get over your pain and injury quicker as well as help prevent re-occurrence of your problem!
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

export default Summary;
