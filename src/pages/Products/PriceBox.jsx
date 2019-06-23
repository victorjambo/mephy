import React from 'react';

const PriceBox = ({ initialPrize, prize }) => (
  <div className="price-box">
    {initialPrize && <del>{initialPrize}</del>}
    <span>{prize}</span>
  </div>
);

export default PriceBox;
