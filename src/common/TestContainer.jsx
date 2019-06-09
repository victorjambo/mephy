import React from 'react';
import { Link } from 'react-router-dom';

const TestContainer = () => (
  <div className="block-menu dropdown-menu open">
    <div className="menu-close">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#]#5f5f5f" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    </div>
    <div className="nav-panel">
      <div className="container no-padding">
        <div className="row">
          <div className="col-sm-4">
            <ul className="level-1">
              <li>Billing / Insurance
                <ul className="level-2">
                  <li><a href="/" target="_blank">Pay Bills</a></li>
                  <li><Link href="/contact">Contact Us</Link></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="col-sm-4">
            <ul className="level-1">
              <li>Buy / Shop
                <ul className="level-2">
                  <li><a href="/" target="_blank">DrComfort.com</a></li>
                  <li><a href="/" target="_blank">Compex.com</a></li>
                  <li><a href="/" target="_blank">DonJoyPerformance.com</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="col-sm-4">
            <ul className="level-1">
              <li><a href="/">Warranty / Registration</a>
                <ul className="level-2">
                  <li><a href="/">Knee Brace Registration</a></li>
                  <li><a href="/">Knee Protection Program</a></li>
                  <li><a href="/">Chattanooga Warranty Registration</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <ul className="level-1">
              <li>Patient Stories
                <ul className="level-2">
                  <li><a href="/our-brands/donjoy/testimonials">DonJoy Testimonials</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="col-sm-4">
            <ul className="level-1">
              <li> Patient Rights &amp; Responsibilities
                <ul className="level-2">
                  <li><a href="/" target="_blank">Patients Bill of Rights</a></li>
                  <li><a href="/" target="_blank">DMEPOS Supplier Standards</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="col-sm-4">
            <ul className="level-1">
              <li><a href="/">Find a Surgeon</a> </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TestContainer;
