import React from 'react';

const styles = {
  large: {
    top: '301px',
    left: '40px',
    textAlign: 'initial',
    fontWeight: 700,
    fontStyle: 'normal',
    textDecoration: 'none',
    fontFamily: 'Poppins',
    fontSize: '65px',
    lineHeight: '76px',
    width: '600px',
    whiteSpace: 'normal',
  },
  small: {
    fontWeight: 300,
    textAlign: 'left',
    width: '500px',
    fontFamily: 'Poppins',
    fontSize: '20px',
    lineHeight: '30px',
    top: '480px',
    left: '40px',
    whiteSpace: 'normal'
  },
  learnMore: {
    fontWeight: 500,
    textAlign: 'center',
    cursor: 'pointer',
    paddingRight: '35px',
    paddingLeft: '35px',
    fontFamily: 'Poppins',
    fontSize: '14px',
    lineHeight: '30px',
    top: '577px',
    left: '40px',
    paddingTop: '10px',
    paddingBottom: '10px',
    whiteSpace: 'normal'
  }
};

const Slider = () => (
  <div className="ls-slide">
    <img width="1920" height="1080" src="assets/images/slider-1.png" className="ls-bg" alt="" />
    <p style={styles.large} className="ls-l color_white">
      Take Care Your <span className="color_primary">Health</span>
    </p>
    <p style={styles.small} className="ls-l color_white">
      Not just better healthcare, but a better healthcare experience.
    </p>
    <a className="ls-l" href="/" target="_self">
      <p
        style={styles.learnMore}
        className="btn btn-primary"
      >LEARN MORE
      </p>
    </a>
  </div>
);

export default Slider;
