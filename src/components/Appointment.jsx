import React from 'react';

const Appointment = () => (
  <section className="bg_gray flat_medium flat_primary">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-12">

          <div className="performance mt_50">
            <h3 className="down_line_left">What to Expect At Mephys</h3>
            <ul>
              <li>
                <div className="inner_title pb_10">
                  Hands on treatment.
                </div>
              </li>
              <li>
                <div className="inner_title pb_10">
                  State of the art facilities.
                </div>
              </li>
              <li>
                <div className="inner_title pb_10">
                  Goal centered outcomes.
                </div>
              </li>
              <li>
                <div className="inner_title pb_10">
                  Friendly and professional service.
                </div>
              </li>
              <li>
                <div className="inner_title pb_10">
                  Holistic treatment.
                </div>
              </li>
              <li>
                <div className="inner_title pb_10">
                  Evidence based approach.
                </div>
              </li>
              <li>
                <div className="inner_title pb_10">
                  Motivated clinicians.
                </div>
              </li>
              <li>
                <div className="inner_title pb_10">
                  Welcoming and open environment.
                </div>
              </li>
            </ul>

          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="sidebar_style2">
            <div className="form_3 sidebar-widget bg_primary p_30 mb_30">
              <h5 className="color_white down_line_left line_white">Book Appointment</h5>
              <form action="#" method="post">
                <div className="form-group">
                  <select className="form-control">
                    <option>Select Service</option>
                    <option>Massage Therapy</option>
                    <option>Headache Management</option>
                    <option>Injury</option>
                    <option>Hand Therapy</option>
                  </select>
                </div>
                <div className="form-group">
                  <input type="text" name="name" placeholder="Name" className="form-control" />
                </div>
                <div className="form-group">
                  <input type="text" name="phone" placeholder="Phone" className="form-control" />
                </div>
                <div className="form-group">
                  <input type="text" name="date" id="datepicker" placeholder="Date" className="form-control" />
                </div>
                <div className="form-group">
                  <input type="text" name="time" placeholder="Time" className="timepicker form-control" />
                </div>
                <div className="form-group">
                  <a href="/" className="btn btn-default" onClick={() => alert('Appointment Booked')}>Book Appointment</a>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
);
export default Appointment;
