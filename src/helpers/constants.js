
export const baseUrl = window.location.origin;

export const scripts = [
  `${baseUrl}/assets/js/plugins/jquery.min.js`,
  `${baseUrl}/assets/js/plugins/greensock.js`,
  `${baseUrl}/assets/js/plugins/layerslider.transitions.js`,
  `${baseUrl}/assets/js/plugins/layerslider.kreaturamedia.jquery.js`,
  `${baseUrl}/assets/js/plugins/bootstrap.min.js`,
  `${baseUrl}/assets/js/plugins/owl.js`,
  `${baseUrl}/assets/js/plugins/wow.js`,
  `${baseUrl}/assets/js/plugins/mixitup.js`,
  `${baseUrl}/assets/js/plugins/validate.js`,
  `${baseUrl}/assets/js/plugins/loaders.css.js`,
  `${baseUrl}/assets/js/plugins/jquery-ui.js`,
  `${baseUrl}/assets/js/plugins/jquery.cookie.js`,
  `${baseUrl}/assets/js/settings.js`,
  `${baseUrl}/assets/js/custom.js`,
  `${baseUrl}/assets/js/tabs.js`
];

export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  PRODUCT: '/products/:id',
  SERVICES: '/services',
  SERVICE: '/services/:id',
  CONTACT: '/contact',
  CART: '/cart',
  ABOUTUS: '/about-us',
  APPOINTMENT: '/appointment',
  CATPRODUCTS: '/category/:id/products'
};
