/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Link } from 'react-router-dom';
import { getCategories } from '../../redux/actions';

class FilterCat extends React.Component {
  componentDidMount() {
    const { getCategories } = this.props;
    getCategories();
  }

  render() {
    const { categories } = this.props;

    return (
      <div className="shop-category sidebar-widget mb_30">
        <h5 className="inner-title down_line_left">Categories</h5>
        <ul>
          {
            categories && categories.map(category => (
              <li key={category.id}><Link to={`/category/${category.id}/products`}>{category.title}</Link></li>
            ))
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.firestore.ordered.categories,
});

const mapDispatchToProps = dispatch => ({
  getCategories: bindActionCreators(getCategories, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterCat);
