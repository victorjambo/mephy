import React from 'react';
import Banner from '../common/Banner';
import Appointment from '../components/Appointment';
import ExtraPadding from '../common/ExtraPadding';

const AppointmentPage = () => (
  <React.Fragment>
    <Banner pageTitle="Appointment" titlePreviousPageLink="Home" previousPageLink="/" titleCurrentPage="Appointment" />

    <Appointment />

    <ExtraPadding />

  </React.Fragment>
);

export default AppointmentPage;
