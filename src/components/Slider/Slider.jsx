import React from 'react';
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
  }
};

const dataLs = {
  start: {
    div: 'bgsize:cover; bgposition:50% 50%; duration:8000; transition2d:3; timeshift:-500; deeplink:home; kenburnszoom:in; kenburnsrotate:0; kenburnsscale:1.1; parallaxevent:scroll; parallaxdurationmove:500;',
    pLarge: 'offsetyin:0; offsetxin:-110lw; delayin:300; easingin:easeOutQuint; offsetyout:-250; fadein:false; clipin:0 0 0 100%; durationout:400; parallax:true; parallaxlevel:2;',
    pSmall: 'offsetyin:0; offsetxin:-110lw; delayin:800; easingin:easeOutQuint; offsetyout:-250; fadein:false; clipin:0 0 0 100%; durationout:300; parallax:true; parallaxlevel:2;',
    aLearnMore: 'offsetyin:40; delayin:1200; easingin:easeOutQuint; offsetyout:-300; durationout:400; hover:true; hoverdurationin:300; hoveropacity:1; hoverbgcolor:#ffffff; hovercolor:#444444; parallax:true; parallaxlevel:1;'
  },
  mid: {
    div: 'bgsize:cover; bgposition:50% 50%; duration:8000; transition2d:3; deeplink:latest-works; kenburnszoom:out; kenburnsrotate:0; kenburnsscale:1.1; parallaxtype:3d; parallaxevent:scroll; parallaxdurationmove:500; parallaxrotate:4;',
    pLarge: 'offsetyin:0; offsetxin:-110lw; delayin:300; easingin:easeOutQuint; offsetyout:-250; fadein:false; clipin:0 0 0 100%; durationout:400; parallax:true; parallaxlevel:2;',
    pSmall: 'offsetyin:0; offsetxin:-110lw; delayin:800; easingin:easeOutQuint; offsetyout:-250; fadein:false; clipin:0 0 0 100%; durationout:300; parallax:true; parallaxlevel:2;',
    aLearnMore: 'offsetyin:40; delayin:1200; easingin:easeOutQuint; offsetyout:-300; durationout:400; hover:true; hoverdurationin:300; hoveropacity:1; hoverbgcolor:#ffffff; hovercolor:#444444; parallax:true; parallaxlevel:1;'
  },
  last: {
    div: 'bgsize:cover; bgposition:50% 50%; duration:8000; transition2d:3; deeplink:contact-us; kenburnszoom:in; kenburnsscale:1.2; parallaxevent:scroll;',
    pLarge: 'offsetyin:0; offsetxin:-110lw; delayin:300; easingin:easeOutQuint; offsetyout:-250; fadein:false; clipin:0 0 0 100%; durationout:400; parallax:true; parallaxlevel:2;',
    pSmall: 'offsetyin:0; offsetxin:-110lw; delayin:800; easingin:easeOutQuint; offsetyout:-250; fadein:false; clipin:0 0 0 100%; durationout:300; parallax:true; parallaxlevel:2;',
    aLearnMore: 'offsetyin:40; delayin:1200; easingin:easeOutQuint; offsetyout:-300; durationout:400; hover:true; hoverdurationin:300; hoveropacity:1; hoverbgcolor:#ffffff; hovercolor:#444444; parallax:true; parallaxlevel:1;'
  },
};

const Slider = () => (
  <React.Fragment>
    <div
      className="ls-slide"
      data-ls={dataLs.start.div}
    >
      <img width="1920" height="1080" src={`${baseUrl}/assets/images/slider-1.png`} className="ls-bg" alt="" />
      <p
        style={styles.large}
        className="ls-l color_white"
        data-ls={dataLs.start.pLarge}
      >
      Take Care Your <span className="color_primary">Health</span>
      </p>
      <p
        style={styles.small}
        className="ls-l color_white"
        data-ls={dataLs.start.pSmall}
      >
      Not just better healthcare, but a better healthcare experience.
      </p>
      <a
        className="ls-l"
        href="/"
        target="_self"
        data-ls={dataLs.start.aLearnMore}
      >
        <p
          style={styles.learnMore}
          className="btn btn-primary"
        >LEARN MORE
        </p>
      </a>
    </div>

    <div
      className="ls-slide"
      data-ls={dataLs.mid.div}
    >
      <img width="1920" height="1080" src={`${baseUrl}/assets/images/slider-2.png`} className="ls-bg" alt="" />
      <p
        style={styles.large}
        data-ls={dataLs.mid.pLarge}
        className="ls-l color_white"
      >
        <span className="color_primary">Medicine</span> that touches the world
      </p>
      <p
        style={styles.small}
        data-ls={dataLs.mid.pSmall}
        className="ls-l color_white"
      >
        Not just better healthcare, but a better healthcare experience.
      </p>
      <a
        className="ls-l"
        href="/"
        target="_self"
        data-ls={dataLs.mid.aLearnMore}
      >
        <p
          style={styles.learnMore}
          className="btn btn-primary"
        >LEARN MORE
        </p>
      </a>
    </div>

    <div
      data-ls={dataLs.last.div}
      className="ls-slide"
    >
      <img width="1920" height="1080" src={`${baseUrl}/assets/images/slider-3.png`} className="ls-bg" alt="" />
      <p
        style={styles.large}
        data-ls={dataLs.last.pLarge}
        className="ls-l color_white"
      >
        Bettering the Human <span className="color_primary">Condition</span>
      </p>
      <p
        style={styles.small}
        data-ls={dataLs.last.pSmall}
        className="ls-l color_white"
      >
        Not just better healthcare, but a better healthcare experience.
      </p>
      <a
        className="ls-l"
        href="/"
        target="_self"
        data-ls={dataLs.last.aLearnMore}
      >
        <p
          style={styles.learnMore}
          className="btn btn-primary"
        >LEARN MORE
        </p>
      </a>
    </div>
  </React.Fragment>
);

export default Slider;
