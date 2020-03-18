import React from "react";
import Product from "./Product";
import Grid from "./Grid";

export class ProductList extends React.Component {
  render() {
    return (
      <Grid>
        {this.props.products.map(item => {
          const priceInDKK = String(item.price / 100).replace(".", ",");

          return  (
            <Product
              key={item.id}
              productName={item.name}
              productPrice={priceInDKK}
              productId={item.id}
              productStock={item.stock}
              updateCart={this.props.updateCart}
            />
          )
        })}
      </Grid>
    );
  }
}

export default ProductList;
