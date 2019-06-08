import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { baseUrl } from '../../helpers/constants';

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
  },
  hero: {
    width: '1200px', height: '100vh', margin: '0 auto', marginBottom: '0px',
  },
  legend: {
    background: 'rgba(0, 0, 0, 0)',
    opacity: '1'
  }
};

const CarouselSlider = () => (
  <section className="full_row p_0">
    <div
      className="w_100 overflow_hidden"
      style={styles.hero}
    >
      <Carousel showThumbs={false}>
        <div>
          <img src={`${baseUrl}/assets/images/slider-1.png`} alt="slider" />
          <div className="legend" style={styles.legend}>
            <p
              style={styles.large}
              className=" color_white"
            >
            Take Care Your <span className="color_primary">Health</span>
            </p>
            <p
              style={styles.small}
              className=" color_white"
            >
            Not just better healthcare, but a better healthcare experience.
            </p>
            <a
              className=""
              href="/"
              target="_self"
            >
              <p
                style={styles.learnMore}
                className="btn btn-primary"
              >LEARN MORE
              </p>
            </a>
          </div>
        </div>

        <div>
          <img src={`${baseUrl}/assets/images/slider-2.png`} alt="slider" />
          <div className="legend" style={styles.legend}>
            <p
              style={styles.large}
              className=" color_white"
            >
              <span className="color_primary">Medicine</span> that touches the world
            </p>
            <p
              style={styles.small}
              className=" color_white"
            >
              Not just better healthcare, but a better healthcare experience.
            </p>
            <a
              className=""
              href="/"
              target="_self"
            >
              <p
                style={styles.learnMore}
                className="btn btn-primary"
              >LEARN MORE
              </p>
            </a>
          </div>
        </div>

        <div>
          <img src={`${baseUrl}/assets/images/slider-3.png`} alt="slider" />
          <div className="legend" style={styles.legend}>
            <p
              style={styles.large}
              className=" color_white"
            >
              Bettering the Human <span className="color_primary">Condition</span>
            </p>
            <p
              style={styles.small}
              className=" color_white"
            >
              Not just better healthcare, but a better healthcare experience.
            </p>
            <a
              className=""
              href="/"
              target="_self"
            >
              <p
                style={styles.learnMore}
                className="btn btn-primary"
              >LEARN MORE
              </p>
            </a>
          </div>
        </div>

      </Carousel>
    </div>
  </section>
);

export default CarouselSlider;
