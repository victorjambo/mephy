/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Masonry from 'react-masonry-component';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Banner from '../../common/Banner';
import ExtraPadding from '../../common/ExtraPadding';
import { getServices } from '../../redux/actions';
import Preloader from '../../common/Preloader';


class Services extends React.Component {
  state = {
    redirect: false,
    id: ''
  }

  componentDidMount() {
    const { getServices } = this.props;
    getServices();
  }

  handleClick = (id) => {
    this.setState({ redirect: true, id });
  }

  render() {
    const { isLoaded, isEmpty, services } = this.props;
    const { redirect, id } = this.state;

    if (redirect) {
      return <Redirect push to={`/services/${id}`} />;
    }

    return (
      <React.Fragment>
        <Banner pageTitle="Services" titlePreviousPageLink="Home" previousPageLink="/" titleCurrentPage="Services" />

        <section className="medical_service bg_gray">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="title_area">
                  <h2 className="section_title text-center color_secondary down_line_center">Our Special Services</h2>
                  <span className="sub_title text-center color_gray">We aim to provide world class services.</span>
                </div>
              </div>
            </div>
            <div className="row">
              {
                (isLoaded && isEmpty && services) ? (
                  <Masonry>
                    {
                      services.map(service => (
                        <div className="col-md-4 col-sm-6" key={service.id} role="presentation" onClick={() => this.handleClick(service.id)}>
                          <div className="row">
                            <div className="service_block_1 flat_primary flat_medium bg_white">
                              <i className={service.faIcon} aria-hidden="true" />
                              <div className="service_text d_table">
                                <h6 className="inner_title pb_10">
                                  <Link to={`/services/${service.id}`} className="color_secondary">{service.title}</Link>
                                </h6>
                                <p>{service.description}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </Masonry>
                ) : (<Preloader />)
              }
            </div>
          </div>
        </section>

        <ExtraPadding />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isLoaded: state.firebase.profile.isLoaded,
  isEmpty: state.firebase.profile.isEmpty,
  services: state.firestore.ordered.services,
});

const mapDispatchToProps = dispatch => ({
  getServices: bindActionCreators(getServices, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Services);
