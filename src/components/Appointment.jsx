/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import Datetime from 'react-datetime';
import { bindActionCreators } from 'redux';

import 'react-datetime/css/react-datetime.css';

import whatToExpect from '../mock/whatToExpect';
import { createAppointment } from '../redux/actions';
import firebase from '../helpers/firebase';

const staticServices = [
  {
    id: 1,
    title: 'Massage Therapy',
  },
  {
    id: 2,
    title: 'Headache Management',
  },
  {
    id: 3,
    title: 'Injury',
  },
  {
    id: 4,
    title: 'Hand Therapy',
  }
];

class Appointment extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { createAppointment } = this.props;
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      service: formData.get('service'),
      phone: formData.get('phone'),
      datetime: firebase.firestore.Timestamp.fromDate(new Date(formData.get('datetime')))
    };

    createAppointment(data);
    e.target.reset();
  }

  render() {
    const { services } = this.props;
    const servicesOptions = services || staticServices;
    const options = servicesOptions.map(item => (<option key={item.id}>{item.title}</option>));

    return (
      <section className="bg_gray flat_medium flat_primary" id="appointment">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <div className="performance mt_50">
                <h3 className="down_line_left">What to Expect At Mephys</h3>
                <ul>
                  {
                    whatToExpect.map(item => (
                      <li key={item.id}>
                        <div className="inner_title pb_10">
                          {item.title}
                        </div>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="sidebar_style2">
                <div className="form_3 sidebar-widget bg_primary p_30 mb_30">
                  <h5 className="color_white down_line_left line_white">Book Appointment</h5>
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <select className="form-control" name="service">
                        <option>Select a Service</option>
                        {options}
                      </select>
                    </div>
                    <div className="form-group">
                      <input type="text" name="name" placeholder="Name" className="form-control" required />
                    </div>
                    <div className="form-group">
                      <input type="email" name="email" placeholder="Email" className="form-control" required />
                    </div>
                    <div className="form-group">
                      <input type="number" name="phone" placeholder="Phone" className="form-control" required />
                    </div>
                    <div className="form-group">
                      <Datetime
                        isValidDate={current => current.day() !== 0 && current.day() !== 6 && current.isAfter(Datetime.moment().subtract(1, 'day'))}
                        inputProps={{
                          placeholder: 'Date', name: 'datetime', required: true, autoComplete: 'off'
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <button className="btn" type="submit">Book Appointment</button>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  services: state.firestore.ordered.services,
});

const mapDispatchToProps = dispatch => ({
  createAppointment: bindActionCreators(data => createAppointment(data), dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Appointment);
