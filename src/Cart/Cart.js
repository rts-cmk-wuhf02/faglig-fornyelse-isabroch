import React, { Component } from "react";
import "rc-input-number/assets/index.css";
import InputNumber from "rc-input-number";
import "./Cart.scss";
import priceToString from "../priceToString";

class CartEntry extends Component {
  updatePurchasingQuantity = value => {
    this.props.updateCart(this.props.product.id, value, true);
  };

  removeItem = () => {
    this.props.updateCart(this.props.product.id, 0, true);
  };

  render() {
    const product = this.props.product;

    return (
      <div className="cart-item">
        <img
          src={`https://picsum.photos/seed/${product.id}/100/100`}
          width="100"
          height="100"
          alt=""
          className="cart-item__image"
        />
        <h3 className="cart-item__name">{product.name}</h3>
        <div className="cart-item__controls">
          <InputNumber
            precision={0}
            min={0}
            max={product.stock}
            className="cart-item__quantity"
            value={this.props.purchasingQuantity}
            onChange={this.updatePurchasingQuantity}
          />
          <button className="cart-item__link" onClick={this.removeItem}>
            Remove
          </button>
        </div>
        <div className="cart-item__price">
          <div className="cart-item__price-total">
            {priceToString(product.price * this.props.purchasingQuantity)}
          </div>
          {this.props.purchasingQuantity > 1 && (
            <div className="cart-item__price-per">
              {priceToString(product.price)} per
            </div>
          )}
        </div>
      </div>
    );
  }
}

class CartItems extends Component {
  render() {
    let cartItems = <span className="cart-item">No items in cart yet.</span>;

    if (this.props.cart.length !== 0) {
      cartItems = (
        <ul className="cart-list">
          {this.props.cart.map(cartItem => {
            const matchingProductItem = this.props.products.filter(
              productItem => cartItem.id === productItem.id
            )[0];

            return (
              <CartEntry
                purchasingQuantity={cartItem.quantity}
                product={matchingProductItem}
                key={matchingProductItem.id}
                updateCart={this.props.updateCart}
              ></CartEntry>
            );
          })}
        </ul>
      );
    }

    return cartItems;
  }
}

class CartCallToAction extends Component {
  totalPrice = () => {
    let totalPrice = 0;

    for (let i = 0; i < this.props.cart.length; i++) {
      const { id, quantity } = this.props.cart[i];
      const { price } = this.props.products.filter(
        product => product.id == id
      )[0];

      totalPrice += price * quantity;
    }

    return totalPrice;
  };

  render() {
    return (
      <div className="cart-cta">
        <div className="cart-cta__price-section">
          <h2 className="cart-cta__title">
            Samlet beløb <span className="cart-cta__subtext">inkl. moms</span>
          </h2>
          <div className="cart-cta__price">
            {priceToString(this.totalPrice())}
          </div>
        </div>
        <button className="cart-cta__button">Buy me!</button>
      </div>
    );
  }
}

export default class Cart extends Component {
  render() {
    /* Props:
    products
    cart
    updateCart
    */

    return (
      <section className="box cart">
        <div className="cart-items-container">
        <CartItems {...this.props} />
        </div>
        <CartCallToAction {...this.props} />
      </section>
    );
  }
}
