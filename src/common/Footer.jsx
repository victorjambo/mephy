import React from 'react';
import { Link } from 'react-router-dom';

import contacts from '../mock/contacts';

const Footer = () => (
  <footer className="pt_80 bg_white">
    <div className="container">
      <div className="footer_full">
        <div className="position_relative">
          <div className="help_area_2 p_30 color_white bg_secondary">
            <div className="row">
              <div className="col-md-3 col-sm-4">
                <div className="footer_minititle">Office Hours</div>
                <div className="color_white_a padding_top_30">
                  <ul>
                    <li>{contacts.officeHours.weekday}</li>
                    <li>{contacts.officeHours.weekend}</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-4">
                <div className="footer_box">
                  <div className="footer_minititle">Contact</div>
                  <span className="icon_number">
                    <i className="fa fa-tty color_primary" aria-hidden="true" />
                    {contacts.contacts.phone}
                    <br />
                    <i className="fa fa-tty color_primary" aria-hidden="true" />
                    {contacts.contacts.phoneAirtel}
                  </span>
                  <br />
                  <span className="email">
                    <i className="fa fa-envelope color_primary" />
                    {contacts.contacts.email}
                  </span>
                </div>

              </div>
              <div className="col-md-3 col-sm-4">
                <div className="footer_box">
                  <div className="footer_minititle">Location</div>
                  <p>{contacts.contacts.location}</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-4">
                <div className="footer_box">
                  <div className="footer_minititle">Social Media Share</div>
                  <div className="social_icon color_white_a padding_top_30">
                    <ul>
                      <li>
                        <a target="blank" href={contacts.contacts.facebook}>
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a target="blank" href={contacts.contacts.twitter}>
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a target="blank" href={contacts.contacts.instagram}>
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
                  <Link to="/">Make an order</Link>
                </li>
                <li>
                  <Link to="/">Track your order</Link>
                </li>
                <li>
                  <Link to="/">Help and Support</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="footer_widget color_secondary_a">
              <h5 className="widget_title">COMPANY INFO</h5>
              <ul className="footer_content">
                <li><Link to="/about-us">About us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/products">Products</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="footer_widget color_secondary_a">
              <h5 className="widget_title">LEGAL</h5>
              <ul className="footer_content">
                <li><Link to="/">Legal Notice</Link></li>
                <li><Link to="/">Privacy policy</Link></li>
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
