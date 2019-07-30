import React from 'react';
import { toast } from 'react-toastify';

class AddToCart extends React.Component {
  state = {
    counter: 1
  }

  handleSubmit = (e) => {
    e.preventDefault();
    toast.success('item added to cart');
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { counter } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="quantity">
          <input type="number" value={counter} name="counter" onChange={this.handleChange} />
          <button type="submit" className="btn btn-primary">Add to cart</button>
        </div>
      </form>
    );
  }
}

export default AddToCart;
