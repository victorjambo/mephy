import React from 'react';

const Introduction = () => (
  <section id="intro">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="title_area">
            <h3 className="section_title text-center down_line_center">Who Are We?</h3>
            {/* <span className="sub_title text-center">The hospital you trust to care for those you love.</span> */}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="who_we_are">
          <div className="col-md-9 col-md-offset-2">
            <div className="who_we_are_info">
              <p>
                Mephys concept emerged from Edwin Maiko who saw an existing opportunity for an innovative and holistic physiotherapy practice that will change the way physiotherapy is delivered while offering sustainable and long term health solutions in Nairobi and its environs.
              </p>
              <p>
                The platform for Mephys concept was creating easily accessible and holistic health services within the hospitals that do not offer physiotherapy services.  The relationship between Mephys and these hospitals helps to create a health driven culture within a welcoming environment that allows easy access to a multitude of physiotherapy services.
              </p>
              <p>
                Mephys philosophy is to move away from the more traditional physiotherapy model that was adopted from many practices. It aims to establish new age clinics with the goal of lifelong results and improved patient care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Introduction;
