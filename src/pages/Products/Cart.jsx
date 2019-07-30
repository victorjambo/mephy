import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import Banner from '../../common/Banner';
import cartItems from '../../mock/cartItems';


class Cart extends React.Component {
  state = {
    counter: 1
  }

  handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Items have been ordered');
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { counter } = this.state;
    return (
      <React.Fragment>
        <Banner pageTitle="Cart" titlePreviousPageLink="Products" previousPageLink="/products" titleCurrentPage="Cart" />

        <div id="cart" className="bg_gray py_80">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <form>
                  <table className="shop_table shop_table_responsive cart" cellSpacing="0">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Product</th>
                        <th className="product-name">Product Name</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-price">Price</th>
                        <th className="product-subtotal">Total</th>
                        <th className="product-remove">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        cartItems.map(item => (
                          <tr className="cart_item" key={item.id}>
                            <td className="product-thumbnail">
                              <Link to={`/category/${item.id}/products`}>
                                <img src={item.image} alt="" srcSet="" sizes="(max-width: 270px) 100vw, 270px" />
                              </Link>
                            </td>
                            <td className="product-name" data-title="Product"><Link to={`/category/${item.id}/products`}>{item.title}</Link>
                            </td>
                            <td className="product-quantity" data-title="Quantity">
                              <div className="quantity">
                                <input
                                  className="input-text qty text"
                                  step="1"
                                  min="0"
                                  max="86"
                                  name="counter"
                                  value={counter}
                                  title="Qty"
                                  size="4"
                                  pattern="[0-9]*"
                                  inputMode="numeric"
                                  type="number"
                                  onChange={this.handleChange}
                                />
                              </div>
                            </td>
                            <td className="product-price" data-title="Price">
                              <span className="amount">{item.price}</span>
                            </td>
                            <td className="product-subtotal" data-title="Total">
                              <span className="amount">{item.subtotal}</span>
                            </td>
                            <td className="product-remove">
                              <Link to={item.removeLink} className="remove" aria-label="" data-product_id="946" data-product_sku="">&times;</Link>
                            </td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </form>
                <div className="cart_totals ">
                  <h4 className="thumb-title">Cart totals</h4>
                  <table className="shop_table shop_table_responsive" cellSpacing="0">
                    <tbody>
                      <tr className="cart-subtotal">
                        <th>Subtotal</th>
                        <td data-title="Subtotal"><span className="amount"><span>Ksh</span>306.00</span></td>
                      </tr>
                      <tr className="order-total">
                        <th>Total</th>
                        <td data-title="Total"><strong><span className="amount"><span>Ksh</span>306.00</span></strong> </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="wc-proceed-to-checkout">
                    <button className="btn btn-primary" type="button" onClick={this.handleSubmit}>Make Order</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default Cart;
