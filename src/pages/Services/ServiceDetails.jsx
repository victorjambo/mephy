/* eslint-disable no-shadow */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Banner from '../../common/Banner';
import ExtraPadding from '../../common/ExtraPadding';
import { getServices } from '../../redux/actions';
import Preloader from '../../common/Preloader';

class ServiceDetails extends React.Component {
  state = {
    service: {}
  }

  componentDidMount() {
    const { getServices } = this.props;
    getServices();
  }

  componentWillReceiveProps(props) {
    const { services, match: { params: { id } } } = props;
    if (services) {
      services.forEach((service) => {
        if (service.id === id) {
          this.setState({ service });
        }
      });
    }
  }

  render() {
    const { services } = this.props;
    const { service } = this.state;

    return (
      <React.Fragment>
        <Banner
          pageTitle={service && service.title}
          titlePreviousPageLink="Home"
          previousPageLink="/"
          titleCurrentPage={service && service.title}
        />

        {
          services ? (
            <section className="bg_gray">
              <div className="container">
                <div className="row">
                  <div className="col-md-8">
                    <div className="service_details">
                      <div className="my_30">
                        <p>{service.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="sidebar bg_white m_mt_30 mt_30">
                      <div className="widget category_block_1 bg_primary color_white_a p_30">
                        <ul>
                          {
                            services.map(item => (<li key={item.id}><Link to={`/services/${item.id}`}>{item.title}</Link></li>))
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ) : (<Preloader />)
        }

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

export default connect(mapStateToProps, mapDispatchToProps)(ServiceDetails);
