import React, { Component } from "react";

import "./App.scss";
import ProductList from "./ProductList/ProductList";
import Cart from "./Cart/Cart";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
      products: []
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        "http://my-json-server.typicode.com/isabroch/shopData/products"
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const productsData = await response.json();
      this.setState({ products: productsData });
    } catch (error) {
      console.log(error);
    }
  }

  updateCart = (productId, purchasingQuantity, isAbsolute = false) => {
    let orderNumber = null;
    const cartData = this.state.cart;

    for (let i = 0; i < cartData.length; i++) {
      if (cartData[i].id === productId) {
        orderNumber = i;
        break;
      }
    }

    if (orderNumber === null) {
      cartData.push({
        id: productId,
        quantity: purchasingQuantity
      });
    } else if (purchasingQuantity > 0) {
      const updatedQuantity = isAbsolute
        ? purchasingQuantity
        : cartData[orderNumber].quantity + purchasingQuantity;
      cartData[orderNumber].quantity = updatedQuantity;
    } else if (purchasingQuantity === 0) {
      cartData.splice(orderNumber, 1);
    }

    this.setState({ cart: cartData });
  };

  render() {
    return (
      <main className="app-container">
        <section className="box cart-list">
          <Cart
            products={this.state.products}
            cart={this.state.cart}
            updateCart={this.updateCart}
          />
        </section>
        <section className="box product-list">
          <ProductList
            products={this.state.products}
            cart={this.state.cart}
            updateCart={this.updateCart}
          />
        </section>
      </main>
    );
  }
}

export default App;
