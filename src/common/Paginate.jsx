import React from 'react';

const Paginate = () => (
  <div className="row">
    <div className="col-md-12">
      <div className="pagination_style2 color_secondary_a">
        <nav aria-label="page navigation">
          <ul className="pagination">
            <li><a href="/" aria-label="Previous"> <span aria-hidden="true">Prev</span> </a> </li>
            <li className="active"><a href="/">1</a></li>
            <li><a href="/">2</a></li>
            <li><a href="/">3</a></li>
            <li><a href="/">4</a></li>
            <li> <a href="/" aria-label="Next"> <span aria-hidden="true">Next</span> </a> </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
);

export default Paginate;
