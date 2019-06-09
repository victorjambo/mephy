import React from 'react';
import Banner from '../common/Banner';
import MissionVision from '../components/aboutUs/MissionVision';
import Introduction from '../components/aboutUs/Introduction';
import CoreValues from '../components/aboutUs/CoreValues';
import ExtraPadding from '../common/ExtraPadding';

class AboutUs extends React.Component {
  intro = React.createRef()

  mission = React.createRef()

  vision = React.createRef()

  values = React.createRef()

  componentDidMount() {
    const { location: { hash } } = this.props;
    const refs = {
      '#intro': this.intro.offsetTop,
      '#mission': this.mission.offsetTop,
      '#vision': this.vision.offsetTop,
      '#values': this.values.offsetTop,
      '': 0
    };
    this.scrollToSection(refs[hash]);
  }

  scrollToSection = ref => window.scrollTo(0, ref);

  render() {
    return (
      <React.Fragment>
        <Banner pageTitle="About us" titlePreviousPageLink="Home" previousPageLink="/" titleCurrentPage="About us" />
        <Introduction intro={(intro) => { this.intro = intro; }} />
        <MissionVision
          mission={(mission) => { this.mission = mission; }}
          vision={(vision) => { this.vision = vision; }}
        />
        <CoreValues values={(values) => { this.values = values; }} />
        <ExtraPadding />
      </React.Fragment>
    );
  }
}

export default AboutUs;
