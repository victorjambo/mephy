/* eslint-disable class-methods-use-this */
/* eslint-disable no-eval */
import React from 'react';
import Slider from './Slider';

const styles = {
  width: '1200px', height: '100vh', margin: '0 auto', marginBottom: '0px',
};

export default class extends React.Component {
  componentDidMount() {
    eval('$("#slider").layerSlider({sliderVersion:"6.0.0",type:"fullwidth",responsiveUnder:0,layersContainer:1200,maxRatio:1,parallaxScrollReverse:true,hideUnder:0,hideOver:100000,skin:"outline",showBarTimer:true,thumbnailNavigation:"disabled",allowRestartOnResize:true,skinsPath:"skins/",height:800});');
  }

  render() {
    return (
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
  }
}
