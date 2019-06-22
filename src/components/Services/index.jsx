/* eslint-disable no-shadow */
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

    if (isLoaded && isEmpty && services) {
      return (
        <section className="bg_primary">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="title_area">
                  <h2 className="section_title text-center down_line_center color_white">
                    <span className="color_white">Kind of Physiotherapy </span> Provide Service for Patient
                  </h2>
                  <span className="sub_title text-center color_white">
                  For the expected, unexpected and everything in between
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              {
                services.slice(0, 8).map(service => (
                  <div className="col-md-3 col-sm-6 service-item" role="presentation" key={service.id} onClick={() => this.handleClick(service.id)}>
                    <div className="text-center mb_30 py_15 color_white flat_large">
                      <i className={service.faIcon} aria-hidden="true" />
                      <h6 className="inner_title py_20">
                        <Link to={`/services/${service.id}`} className="color_white">{service.title}</Link>
                      </h6>
                      <p>{`${service.description.slice(0, 75)}...`}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
      );
    }
    return (<Preloader />);
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
