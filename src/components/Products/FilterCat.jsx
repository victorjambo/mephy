import React from 'react';
import { Link } from 'react-router-dom';
import categories from '../../mock/categories';

const items = categories.map(category => (
  <li key={category.id}><Link to={`/category/${category.id}/products`}>{category.title}{' '}({category.count})</Link></li>
));

const FilterCat = () => (
  <div className="shop-category sidebar-widget mb_30">
    <h5 className="inner-title down_line_left">Categories</h5>
    <ul>{items}</ul>
  </div>
);

export default FilterCat;
