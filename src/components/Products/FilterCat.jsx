import React from 'react';
import { Link } from 'react-router-dom';
import categories from '../../mock/categories';

const items = categories.map(cat => (
  <li><Link to={cat.link}>{cat.title}{' '}({cat.count})</Link></li>
));

const FilterCat = () => (
  <div className="shop-category sidebar-widget mb_30">
    <h5 className="inner-title down_line_left">Categories</h5>
    <ul>{items}</ul>
  </div>
);

export default FilterCat;
