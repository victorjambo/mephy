import React from 'react';
import { Link } from 'react-router-dom';

import Banner from '../../common/Banner';
import ExtraPadding from '../../common/ExtraPadding';
import { baseUrl } from '../../helpers/constants';
import services from '../../mock/services';

const servicesWidgets = services.map(item => (<li key={item.id}><Link to={`/services/${item.id}`}>{item.title}</Link></li>));

class ServiceDetails extends React.Component {
  state = {
    service: {}
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    services.forEach((service) => {
      if (service.id === id) {
        this.setState({ service });
      }
    });
  }

  render() {
    const { service } = this.state;
    return (
      <React.Fragment>
        <Banner pageTitle={service.title} titlePreviousPageLink="Home" previousPageLink="/" titleCurrentPage={service.title} />

        <section className="bg_gray">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="service_details">
                  <img src={`${baseUrl}/assets/images/service/service_details/5.png`} alt="not found" />
                </div>
              </div>
            </div>
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
                      {servicesWidgets}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ExtraPadding />

      </React.Fragment>
    );
  }
}

export default ServiceDetails;
