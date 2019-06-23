import React from 'react';
import { Link } from 'react-router-dom';

const Thumbs = ({ thumb }) => (
  <ul>
    {
      thumb.map((k, i) => (<li key={i}><img src={k} alt="Not found!" /></li>))
    }
  </ul>
);

const SingleProductImage = ({ productId, image, thumb }) => (
  <div className="col-lg-6 col-md-6">
    <div className="single-product-image">
      <Link to={`/products/${productId}`}>
        <img src={image} alt="Not found!" />
      </Link>
      {(thumb && thumb.length) && <Thumbs thumb={thumb} />}
    </div>
  </div>
);

export default SingleProductImage;
