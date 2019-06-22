/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Slider from '../components/Slider';
import Summary from '../components/aboutUs/Summary';
import Services from '../components/Services';
import Featured from '../components/Products/Featured';
import Discount from '../components/Discount';
import ExtraPadding from '../common/ExtraPadding';
import { healthcheck } from '../redux/actions';
import Appointment from '../components/Appointment';


class Home extends React.Component {
  // componentDidMount() {
  //   const { healthcheck } = this.props;
  //   healthcheck();
  // }

  render() {
    return (
      <React.Fragment>
        <Slider />
        <Summary />
        <Services />
        <Featured />
        <Discount />
        {/* <Testimonials /> */}
        <Appointment />
        <ExtraPadding />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isLoaded: state.firebase.profile.isLoaded,
  isEmpty: state.firebase.profile.isEmpty,
});

const mapDispatchToProps = dispatch => ({
  healthcheck: bindActionCreators(healthcheck, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
