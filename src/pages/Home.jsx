import React from 'react';

import Slider from '../components/Slider';
import AboutUsSummary from '../components/AboutUsSummary';
import Services from '../components/Services';
import FeaturedProducts from '../components/FeaturedProducts';
import Discount from '../components/Discount';
import Testimonials from '../components/Testimonials';
import ExtraPadding from '../common/ExtraPadding';

const Home = () => (
  <React.Fragment>
    <Slider />
    <AboutUsSummary />
    <Services />
    <FeaturedProducts />
    <Discount />
    <Testimonials />
    <ExtraPadding />
  </React.Fragment>
);

export default Home;
