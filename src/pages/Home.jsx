/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import Slider from '../components/Slider';
import Summary from '../components/aboutUs/Summary';
import Services from '../components/Services';
import FeaturedProducts from '../components/FeaturedProducts';
import Discount from '../components/Discount';
import ExtraPadding from '../common/ExtraPadding';
import { testAction, testGetProducts } from '../redux/actions/testAction';
import Appointment from '../components/Appointment';
import CarouselSlider from '../components/Slider/CarouselSlider';


class Home extends React.Component {
  componentDidMount() {
    const { testGetProducts } = this.props;
    testGetProducts();
  }

  render() {
    return (
      <React.Fragment>
        {/* <Slider /> */}
        <CarouselSlider />
        <Summary />
        <Services />
        <FeaturedProducts />
        <Discount />
        {/* <Testimonials /> */}
        <Appointment />
        <ExtraPadding />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  firestore: state.firestore,
  firebase: state.firestore
});

const mapDispatchToProps = dispatch => ({
  testAction: bindActionCreators(testAction, dispatch),
  testGetProducts: bindActionCreators(testGetProducts, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
