import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import scriptLoader from 'react-async-script-loader';

import Home from './pages/Home';
import Header from './common/Header';
import Footer from './common/Footer';
import Products from './pages/Products';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Cart from './pages/Products/Cart';
import ProductDetails from './pages/Products/ProductDetails';
import PageNotFound from './pages/404';
import store from './redux/store';
import AboutUs from './pages/AboutUs';

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
  <Provider store={store}>
    <Header />

    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/products" exact component={Products} />
      <Route path="/products/:id" exact component={ProductDetails} />
      <Route path="/services" exact component={Services} />
      <Route path="/contact" exact component={ContactUs} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/about-us" exact component={AboutUs} />
      <Route component={PageNotFound} />
    </Switch>

    <Footer />
  </Provider>
);


export default scriptLoader(scripts)(App);
