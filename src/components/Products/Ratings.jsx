import React from 'react';

const Ratings = ({ rating }) => {
  const maxRating = 5;
  const items = [...Array(maxRating).keys()].map((i) => {
    if (i < rating) {
      return (<i className="fa fa-star" />);
    }
    return (<i className="fa fa-star-o" />);
  });

  return (
    <div className="stars">
      {items}
    </div>
  );
};

export default Ratings;
