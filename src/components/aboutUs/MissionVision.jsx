import React from 'react';
import { baseUrl } from '../../helpers/constants';

const MissionVision = () => (
  <section className="position_relative bg_gray">
    <div className="container">
      <div className="row">
        <div className="thumbnail_block_2 mb_50" id="mission">
          <div className="col-md-5">
            <div className="circle"><img src={`${baseUrl}/assets/images/hospital/1.png`} alt="not found" /></div>
          </div>
          <div className="col-md-7">
            <div className="text_box_3 hospital_info">
              <h4 className="inner_title mb_30">Our Mission</h4>
              <p>To provide innovative and holistic services to help our clients achieve the best possible outcomes in health and lifestyle.</p>
            </div>
          </div>
        </div>
        <div className="thumbnail_block_2" id="vision">
          <div className="col-md-7">
            <div className="text_box_3 hospital_info m_mb_30">
              <h4 className="inner_title mb_30">Our Vision</h4>
              <p>To be the most recognized and preferred physiotherapy & health provider of choice within the country and help our customers be healthier tomorrow than today.</p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="circle"><img src={`${baseUrl}/assets/images/hospital/2.png`} alt="not found" /></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MissionVision;
