import React, { Component } from "react";
import Product from "./Product";
import Grid from "./Grid";
import priceToString from "../priceToString";
import "./ProductList.scss";

export class ProductList extends Component {
  render() {
    const products = this.props.products.map(productItem => {
      const matchingCartProduct = this.props.cart.filter(
        cartItem => cartItem.id === productItem.id
      )[0];

      const tempReservedStock =
        matchingCartProduct === undefined ? 0 : matchingCartProduct.quantity;

      return (
        <Product
          key={productItem.id}
          productName={productItem.name}
          productPrice={priceToString(productItem.price)}
          productId={productItem.id}
          existingStock={productItem.stock}
          reservedStock={tempReservedStock}
          updateCart={this.props.updateCart}
        />
      );
    });

    return (
      <section className="box product-list">
      <Grid>
        {products}
      </Grid>
      </section>
    );
  }
}

export default ProductList;
