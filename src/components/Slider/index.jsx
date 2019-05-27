import React from 'react';
import Slider from './Slider';

const styles = {
  width: '1200px', height: '100vh', margin: '0 auto', marginBottom: '0px',
};

export default () => (
  <section className="full_row p_0">
    <div
      id="slider"
      className="w_100 overflow_hidden"
      style={styles}
    >
      <Slider />
    </div>
  </section>
);
