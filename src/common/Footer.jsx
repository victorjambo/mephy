import React from 'react';

const Footer = () => (
  <footer className="pt_80 bg_gray">
    <div className="container">
      <div className="footer_full">
        <div className="position_relative">
          <div className="help_area_2 p_30 color_white bg_secondary">
            <div className="row">
              <div className="col-md-3 col-sm-4">
                <div className="footer_minititle">Office Hours</div>
                <div className="color_white_a padding_top_30">
                  <ul>
                    <li>Monday - Friday: 8am - 5pm</li>
                    <li>Saturday: 8am – 12pm</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-4">
                <div className="footer_box">
                  <div className="footer_minititle">Contact</div>
                  <span className="icon_number">
                    <i className="fa fa-tty color_primary" aria-hidden="true" />+254720095236
                    <br />
                    <i className="fa fa-tty color_primary" aria-hidden="true" />+254734095236
                  </span>
                  <br />
                  <span className="email">
                    <i className="fa fa-envelope color_primary" />
                    mephysclinicltd@gmail.com
                  </span>
                </div>

              </div>
              <div className="col-md-3 col-sm-4">
                <div className="footer_box">
                  <div className="footer_minititle">Location</div>
                  <p>Nairobi, Kenya</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-4">
                <div className="footer_box">
                  <div className="footer_minititle">Social Media Share</div>
                  <div className="social_icon color_white_a padding_top_30">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/mephys.ke">
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/MephysK">
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="https://instagram.com/mephys.ke">
                          <i className="fa fa-instagram" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="footer_widget color_secondary_a">
              <h5 className="widget_title">HELP</h5>
              <ul className="footer_content">
                <li>
                  <a href="/">Make an order</a>
                </li>
                <li>
                  <a href="/">Track your order</a>
                </li>
                <li>
                  <a href="/">Help and Support</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="footer_widget color_secondary_a">
              <h5 className="widget_title">COMPANY INFO</h5>
              <ul className="footer_content">
                <li><a href="about-us.html">About us</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="products.html">Products</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="footer_widget color_secondary_a">
              <h5 className="widget_title">LEGAL</h5>
              <ul className="footer_content">
                <li><a href="/">Legal Notice</a></li>
                <li><a href="/">Privacy policy</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="footer_widget">
              <h5 className="widget_title">Newsletter</h5>
              <div className="footer_content">
                <p>Get notified on arrival of new products</p>
                <form className="pt_15 form_3">
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Enter email" />
                  </div>
                  <button type="submit" className="btn btn-primary">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg_white unicoder_copy py_20 text-center">
      © Copyright 2019. All Rights Reserved by Mephys
    </div>
  </footer>
);

export default Footer;
