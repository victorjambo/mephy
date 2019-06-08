import React from 'react';
import { Link } from 'react-router-dom';

const BookAppointment = () => (
  <section className="background-2 overlay">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="appointment margin_auto text-center">
            <h5 className="inner_title color_white pb_30">Appointment</h5>
            <div className="appointment_info">
              <span className="color_white">We Are A Group Of Professional And </span>
              <h3 className="inner_title color_white py_15">Experienced Medical Institute. Book an appointment with us today</h3>
              <span className="color_white">Right Now! <b>Call: +254 720 095 236</b></span>
            </div>
            <Link className="btn btn-default mt_40" to="/#appointment">Make Appointment</Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BookAppointment;
