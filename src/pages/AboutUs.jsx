import React from 'react';
import Banner from '../common/Banner';
import MissionVision from '../components/aboutUs/MissionVision';
import Introduction from '../components/aboutUs/Introduction';

const AboutUs = () => (
  <React.Fragment>
    <Banner pageTitle="About us" titlePreviousPageLink="Home" previousPageLink="/" titleCurrentPage="About us" />
    <Introduction />
    <MissionVision />
  </React.Fragment>
);

export default AboutUs;
