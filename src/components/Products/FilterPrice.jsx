import React from 'react';

const FilterPrice = () => (
  <div className="price-filter sidebar-widget mb_50">
    <h5 className="inner-title down_line_left">Filter By Price</h5>
    <div className="filter">
      <div id="pricing-range">
        <div className="filter-range"> </div>
      </div>
      <div className="pricing-value">
        <p>Price: <span id="pricing">Ksh. 300 - Ksh. 620</span>
        </p>
      </div>
    </div>
  </div>
);

export default FilterPrice;
