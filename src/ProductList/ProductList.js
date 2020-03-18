import React from "react";
import Product from "./Product";
import Grid from "./Grid";

export class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
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

  render() {
    return (
      <Grid>
        {this.state.products.map(item => {
          const priceInDKK = String(item.price / 100).replace(".", ",");

          return  (
            <Product
              key={item.id}
              productName={item.name}
              productPrice={priceInDKK}
              productId={item.id}
              productStock={item.stock}
            />
          )
        })}
      </Grid>
    );
  }
}

export default ProductList;
