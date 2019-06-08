import React from 'react';
import Banner from '../common/Banner';

const AboutUs = () => (
  <React.Fragment>
    <Banner pageTitle="About us" titlePreviousPageLink="Home" previousPageLink="/" titleCurrentPage="About us" />

    <section className="bg_gray">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title_area">
              <h2 className="section_title text-center down_line_center">Veterinary Doctors</h2>
              <span className="sub_title text-center">Not just better healthcare, but a better healthcare experience</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="our_member owl_side_arrow">
              <div className="item">
                <div className="member_profile hover_zoom">
                  <div className="member_img circle overflow_hidden"> <img src="assets/images/doctor_2/1.png" alt=".." /></div>
                  <div className="member_description color_secondary_a text-center py_30">
                    <h6 className="inner_title"><a href="doctors_profile.html">Dr. Richard Luis</a></h6>
                    <span>Cardiologist</span>
                    <div className="text_area mt_10">
                      <p>Netus cubilia augue taciti, nunc. Congue nunc nunc in. At per quam penatibus.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="member_profile hover_zoom">
                  <div className="member_img circle overflow_hidden"> <img src="assets/images/doctor_2/4.png" alt=".." /></div>
                  <div className="member_description color_secondary_a text-center py_30">
                    <h6 className="inner_title"><a href="doctors_profile.html">Dr. Caitlin Mansour</a></h6>
                    <span>Ophthalmologist</span>
                    <div className="text_area mt_10">
                      <p>Netus cubilia augue taciti, nunc. Congue nunc nunc in. At per quam penatibus.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="member_profile hover_zoom">
                  <div className="member_img circle overflow_hidden"> <img src="assets/images/doctor_2/3.png" alt=".." /></div>
                  <div className="member_description color_secondary_a text-center py_30">
                    <h6 className="inner_title"><a href="doctors_profile.html">Dr. Christian Becker</a></h6>
                    <span>Heart Specialist</span>
                    <div className="text_area mt_10">
                      <p>Netus cubilia augue taciti, nunc. Congue nunc nunc in. At per quam penatibus.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="member_profile hover_zoom">
                  <div className="member_img circle overflow_hidden"> <img src="assets/images/doctor_2/2.png" alt=".." /></div>
                  <div className="member_description color_secondary_a text-center py_30">
                    <h6 className="inner_title"><a href="doctors_profile.html">Dr. Christian Becker</a></h6>
                    <span>Ophthalmologist</span>
                    <div className="text_area mt_10">
                      <p>Netus cubilia augue taciti, nunc. Congue nunc nunc in. At per quam penatibus.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default AboutUs;
