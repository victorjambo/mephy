/* eslint-disable react/no-array-index-key */
import React from 'react';
import ModalImage from 'react-modal-image';

const Thumbs = ({ thumb, productTitle }) => (
  <ul>
    { // TODO - Thumbs should have good url
      thumb.map((k, i) => (<li key={i}><ModalImage small={k} large={k} alt={productTitle} /></li>))
    }
  </ul>
);

const SingleProductImage = ({ productTitle, image, thumb }) => (
  <div className="col-lg-6 col-md-6">
    <div className="single-product-image">
      <ModalImage small={image} large={image} alt={productTitle} />
      {(thumb && thumb.length) && <Thumbs thumb={thumb} productTitle={productTitle} />}
    </div>
  </div>
);

export default SingleProductImage;
