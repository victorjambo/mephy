/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createContactUs } from '../redux/actions';
import firebase from '../helpers/firebase';

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

class Contact extends React.Component {
  state = { ...initialState }

  handleSubmit = (e) => {
    e.preventDefault();
    const { createContactUs } = this.props;
    const handleContactUs = firebase.functions().httpsCallable('handleContactUs');
    const {
      name, email, subject, message
    } = this.state;

    createContactUs({
      name, email, subject, message
    });

    handleContactUs().then(res => console.log(res));

    this.setState({ ...initialState });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const {
      name, email, subject, message
    } = this.state;

    return (
      <section className="bg_gray contact" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-8 col-md-offset-2 col-sm-offset-2">
              <h3 className="section_title down_line_left w_100">Send us a Message</h3>
              <span className="sub_title w_100">Get in touch with our qualified team.</span>
              <div className="form_3">
                <form onSubmit={this.handleSubmit} autoComplete="off">
                  <div className="form-group">
                    <input type="text" name="name" placeholder="Name" className="form-control" onChange={this.handleChange} value={name} required />
                  </div>
                  <div className="form-group">
                    <input type="text" name="email" placeholder="Email Address" className="form-control" onChange={this.handleChange} value={email} required />
                  </div>
                  <div className="form-group">
                    <input type="text" name="subject" placeholder="Subject" className="form-control" onChange={this.handleChange} value={subject} required />
                  </div>
                  <div className="form-group">
                    <textarea name="message" placeholder="Message" className="form-control" cols="30" rows="10" onChange={this.handleChange} value={message} required />
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary" type="submit">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createContactUs: bindActionCreators(data => createContactUs(data), dispatch)
});

export default connect(null, mapDispatchToProps)(Contact);
