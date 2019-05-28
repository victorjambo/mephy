import React from 'react';

const Contact = () => (
  <section className="bg_gray contact" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-8 col-md-offset-2 col-sm-offset-2">
          <h3 className="section_title down_line_left w_100">Send us a Message</h3>
          <span className="sub_title w_100">Get in touch with our qualified team.</span>
          <div className="form_3">
            <form>
              <div className="form-group">
                <input type="text" name="name" placeholder="Name" className="form-control" />
              </div>
              <div className="form-group">
                <input type="text" name="email" placeholder="Email Address" className="form-control" />
              </div>
              <div className="form-group">
                <input type="text" name="subject" placeholder="Subject" className="form-control" />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Message" className="form-control" cols="30" rows="10" />
              </div>
              <div className="form-group">
                <a className="btn btn-primary" href="/">Send</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
