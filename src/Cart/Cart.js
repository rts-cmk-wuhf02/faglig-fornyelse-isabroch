import React, { Component } from 'react'
import "rc-input-number/assets/index.css";
import InputNumber from "rc-input-number";
import './Cart.scss'

class CartEntry extends Component {
  constructor(props) {
    super(props);
  }

  updatePurchasingQuantity = value => {
    this.props.updateCart(this.props.product.id, value, true);
  };

  removeItem = () => {
    this.props.updateCart(this.props.product.id, 0, true);
  }

  render() {
    return (
      <div className="cart-item">
        <img src="" alt="" className="cart-entry__image"/>
        <h3 className="cart-entry__name"></h3>
        <div className="cart-entry__controls">
        <InputNumber
              precision={0}
              min={0}
              max={this.props.product.stock}
              className="product-card__quantity"
              value={this.props.purchasingQuantity}
              onChange={this.updatePurchasingQuantity}
            />
          <button className="cart-entry__link" onClick={this.removeItem}>Remove</button>
        </div>
        <div className="cart-entry__price"><span className="cart-entry__price-total"></span><span className="cart-entry__price-per"></span></div>
      </div>
    )
  }
}



export default class Cart extends Component {
  render() {
    /* Props:
    products
    cart
    updateCart
    */

    let cartItems = <span className="cart-item">No items in cart yet.</span>;

    if (this.props.cart.length !== 0) {
      cartItems = this.props.cart.map( cartItem => {
        const matchingProductItem = this.props.products.filter(
          productItem => cartItem.id === productItem.id
        )[0]

          return (
            <CartEntry purchasingQuantity={cartItem.quantity} product={matchingProductItem} updateCart={this.props.updateCart}></CartEntry>
          )
      })
    }

    return (
      <div className="cart">
        {cartItems}
      </div>
    )
  }
}
