import React from 'react';
import Banner from '../common/Banner';
import MissionVision from '../components/aboutUs/MissionVision';

const AboutUs = () => (
  <React.Fragment>
    <Banner pageTitle="About us" titlePreviousPageLink="Home" previousPageLink="/" titleCurrentPage="About us" />
    <MissionVision />
  </React.Fragment>
);

export default AboutUs;
