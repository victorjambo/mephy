/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const ProductDropdown = () => (
  <div className="container padding-0">
    <div className="row">
      <div className="col-sm-3">
        <div className="nav-panel-switch">
          <h6 className="margin-0">Browse by:</h6>
          <ul className="for-panel">
            <li className="has-panel active" data-panel-id="body-part"><a href="#" className="all-caps">Body Part</a></li>
            <li className="has-panel" data-panel-id="business-unit"><a href="#" className="all-caps">Category</a></li>
            <li className="has-panel" data-panel-id="brand"><a href="#" className="all-caps">Brand</a></li>
          </ul>
          <ul><li><Link to="/products" className="search-trigger">Search All Products</Link></li></ul>
          <ul>

            <li><Link to="/products">View All Products</Link></li>
            <li><Link to="/products">View All Brands</Link></li>
            <li><Link to="/products">View Healthcare Solutions</Link></li>

          </ul>
        </div>
      </div>
      <div className="col-sm-9">


        <div className="nav-panel has-switch" id="body-part" style={{ display: 'block' }}>
          <div className="row">
            <div className="col-sm-4">
              <ul className="level-1">
                <li className="level-title"><a className="caps" href="#">Knee</a>
                  <ul className="level-2">
                    <li><Link to="/products">Knee Ligament Bracing</Link></li>
                    <li><Link to="/products">OA Bracing</Link></li>
                    <li><Link to="/products">Post-Op Knee Bracing</Link></li>
                    <li><Link to="/products">Hinged Knee Bracing</Link></li>
                    <li><Link to="/products">Knee Implants</Link></li>
                    <li><em><Link to="/products">View all...</Link></em></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-sm-4">
              <ul className="level-1">
                <li className="level-title"><a className="caps" href="#">Hip</a>
                  <ul className="level-2">
                    <li><Link to="/products">Hip Implants</Link></li>
                    <li><Link to="/products">Cold Therapy</Link></li>
                    <li><em><Link to="/products">View all...</Link></em></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-sm-4">
              <ul className="level-1">
                <li className="level-title"><a className="caps" href="#">Shoulder</a>
                  <ul className="level-2">
                    <li><Link to="/products">Shoulder Implants</Link></li>
                    <li><Link to="/products">Shoulder Bracing</Link></li>
                    <li><Link to="/products">Shoulder Immobilizer</Link></li>
                    <li><Link to="/products">Cold Therapy</Link></li>
                    <li><em><Link to="/products">View All...</Link></em></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <ul className="level-1">
                <li className="level-title"><a className="caps" href="#">Spine</a>
                  <ul className="level-2">
                    <li><Link to="/products">Spine Bracing</Link></li>
                    <li><Link to="/products">Cervical Collars</Link></li>
                    <li><Link to="/products">Bone Growth Stimulation</Link></li>
                    <li><Link to="/products">Traction Therapy</Link></li>
                    <li><em><Link to="/products">View All...</Link></em></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-sm-4">
              <ul className="level-1">
                <li className="level-title"><a className="caps" href="#">Hand / Wrist</a>
                  <ul className="level-2">
                    <li><Link to="/products">Hand and Wrist Bracing</Link></li>
                    <li><Link to="/products">Fracture Management</Link></li>
                    <li><Link to="/products">Arm Slings / Elevators</Link></li>
                    <li><Link to="/products">Cold Therapy</Link></li>
                    <li><em><Link to="/products">View All...</Link></em></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-sm-4">
              <ul className="level-1">
                <li className="level-title"><a className="caps" href="#">Foot/Ankle</a>
                  <ul className="level-2">
                    <li><Link to="/products">Walking Braces</Link></li>
                    <li><Link to="/products">Ankle Bracing</Link></li>
                    <li><Link to="/products">Cold Therapy</Link></li>
                    <li><Link to="/products" target="_blank">Diabetic Shoes, and Orthotics</Link></li>
                    <li><em><Link to="/products">View all...</Link></em></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="nav-panel has-switch" id="business-unit" style={{ display: 'none' }}>
          <div className="row">
            <div className="col-sm-4">
              <ul className="level-1">
                <li className="level-title"><Link className="caps" to="/products">Bracing &amp; Supports</Link>
                  <ul className="level-2">
                    <li>Performance, protection and recovery for knee, ankle, elbow, back, wrist, shoulder and more.</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-sm-4">
              <ul className="level-1">
                <li className="level-title"><Link className="caps" to="/products">Surgical</Link>
                  <ul className="level-2">
                    <li>High-end products that improve quality of life and restore movement. </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <ul className="level-1">
                <li className="level-title"><Link className="caps" to="/products">Footcare</Link>
                  <ul className="level-2">
                    <li>The worldwide leading provider of diabetic footwear.</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-sm-4">
              <ul className="level-1">
                <li className="level-title"><Link className="caps" to="/products">Healthcare Solutions / MotionMD</Link>
                  <ul className="level-2">
                    <li>A consultative approach to customized DME solutions</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-sm-8" />
          </div>
        </div>
        <div className="nav-panel has-switch" id="brand" style={{ display: 'none' }}>
          <div className="row">
            <div className="col-sm-3">
              <ul className="level-1">
                <li className="level-title"><a className="caps" href="#">Aircast</a>
                  <ul className="level-2">
                    <li><Link to="/products">Walking Braces</Link></li>
                    <li><Link to="/products">Ankle Bracing</Link></li>
                    <li><em><Link to="/products">View All...</Link></em></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-sm-3">
              <ul className="level-1">
                <li className="level-title"><a className="caps" href="#">Chattanooga</a>
                  <ul className="level-2">
                    <li><Link to="/products">Therapy Systems</Link></li>
                    <li><Link to="/products">Treatment Tables</Link></li>
                    <li><Link to="/products">VitalStim</Link></li>
                    <li><em><Link to="/products">View All...</Link></em></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-sm-3">
              <ul className="level-1">
                <li className="level-title"><a className="caps" href="#">CMF</a>
                  <ul className="level-2">
                    <li><Link to="/products">Bone Growth Stimulation</Link></li>
                    <li><Link to="/products">Spine Bracing</Link></li>
                    <li><em><Link to="/products">View All...</Link></em></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-sm-3">
              <ul className="level-1">
                <li className="level-title"><a className="caps" href="#">Compex</a>
                  <ul className="level-2">
                    <li><Link to="/products" target="_blank">Muscle Stimulators</Link></li>
                    <li><Link to="/products" target="_blank">TENS Units</Link></li>
                    <li><em><Link to="/products" target="_blank">View All...</Link></em></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <ul className="level-1">
                <li className="level-title"><a className="caps" href="#">Surgical</a>
                  <ul className="level-2">
                    <li><Link to="/products">Hip</Link></li>
                    <li><Link to="/products">Knee</Link></li>
                    <li><Link to="/products">Upper Extremity</Link></li>
                    <li><Link to="/products">Cement Solutions</Link></li>
                    <li><em><Link to="/products">View All...</Link></em></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-sm-3">
              <ul className="level-1">
                <li className="level-title"><a className="caps" href="#">DonJoy</a>
                  <ul className="level-2">
                    <li><Link to="/products">Knee Bracing</Link></li>
                    <li><Link to="/products">Ankle Bracing</Link></li>
                    <li><Link to="/products">Cold Therapy</Link></li>
                    <li><em><Link to="/products">View All...</Link></em></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-sm-3">
              <ul className="level-1">
                <li className="level-title"><a className="caps" href="#">Dr. Comfort</a>
                  <ul className="level-2">
                    <li><Link to="/products" target="_blank">Orthotics and Compression</Link></li>
                    <li><Link to="/products" target="_blank">Women's Shoes</Link></li>
                    <li><Link to="/products" target="_blank">Men's Shoes</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-sm-3">
              <ul className="level-1">
                <li className="level-title"><a className="caps" href="#">Procare</a>
                  <ul className="level-2">
                    <li><Link to="/products">Wrist Braces</Link></li>
                    <li><Link to="/products">Knee Braces</Link></li>
                    <li><Link to="/products">Ankle Braces</Link></li>
                    <li><em><Link to="/products">View All...</Link></em></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <ul className="level-1">
                <li className="level-title"><a className="caps" href="#">Healthcare Solutions</a>
                  <ul className="level-2">
                    <li><Link to="/products">MotionMD</Link></li>
                    <li><Link to="/products">OfficeCare</Link></li>
                    <li><Link to="/products">eCare</Link></li>
                    <li><Link to="/products">VeriPro</Link></li>
                    <li><Link to="/products">OARAScore</Link></li>
                    <li><Link to="/products">MotionIntelligence</Link></li>
                    <li><Link to="/products">JointRegistry</Link></li>
                    <li><em><Link to="/products">View All...</Link></em></li>

                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-sm-9">
              <ul className="level-1">
                <li className="level-title"><a className="caps" href="#">Other Brands</a>
                  <ul className="level-2">
                    <li><Link to="/products">Bell-Horn</Link></li>
                    <li><Link to="/products">DVT / VenaFlow</Link></li>
                    <li><Link to="/products">Exos</Link></li>
                    <li><Link to="/products">Fast Freeze</Link></li>
                    <li><Link to="/products">Saunders</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default ProductDropdown;
