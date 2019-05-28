import React from 'react';
import { Route, Switch } from 'react-router-dom';
import scriptLoader from 'react-async-script-loader';

import Home from './pages/Home';
import Header from './common/Header';
import Footer from './common/Footer';
import Products from './pages/Products';

const url = window.location.origin;
const scripts = [
  `${url}/assets/js/plugins/jquery.min.js`,
  `${url}/assets/js/plugins/greensock.js`,
  `${url}/assets/js/plugins/layerslider.transitions.js`,
  `${url}/assets/js/plugins/layerslider.kreaturamedia.jquery.js`,
  `${url}/assets/js/plugins/bootstrap.min.js`,
  `${url}/assets/js/plugins/owl.js`,
  `${url}/assets/js/plugins/wow.js`,
  `${url}/assets/js/plugins/mixitup.js`,
  `${url}/assets/js/plugins/validate.js`,
  `${url}/assets/js/plugins/loaders.css.js`,
  `${url}/assets/js/plugins/jquery-ui.js`,
  `${url}/assets/js/plugins/jquery.timepicker.min.js`,
  `${url}/assets/js/plugins/jquery.cookie.js`,
  `${url}/assets/js/settings.js`,
  `${url}/assets/js/custom.js`
];
const App = () => (
  <React.Fragment>
    <Header />

    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/products" exact component={Products} />
    </Switch>

    <Footer />
  </React.Fragment>
);


export default scriptLoader(scripts)(App);
