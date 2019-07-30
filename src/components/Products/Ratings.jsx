/* eslint-disable react/no-array-index-key */
import React from 'react';

const Ratings = ({ rating }) => {
  const maxRating = 5;
  const items = [...Array(maxRating).keys()].map((k, i) => {
    if (k < rating) {
      return (<i className="fa fa-star" key={i} />);
    }
    return (<i className="fa fa-star-o" key={i} />);
  });

  return (
    <div className="stars">
      {items}
    </div>
  );
};

export default Ratings;
