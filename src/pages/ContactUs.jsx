import React from 'react';

import Contact from '../components/Contact';
import Banner from '../common/Banner';

const ContactUs = () => (
  <React.Fragment>
    <Banner pageTitle="Contact us" titlePreviousPageLink="Home" previousPageLink="/" titleCurrentPage="Contact us" />
    <Contact />
  </React.Fragment>
);

export default ContactUs;
