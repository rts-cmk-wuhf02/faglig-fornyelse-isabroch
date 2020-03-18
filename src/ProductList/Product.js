import React from "react";
import "rc-input-number/assets/index.css";
import InputNumber from "rc-input-number";
import "./Product.scss";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      purchasingQuantity: 0
    };
  }

  handleChange = value => {
    this.setState({ purchasingQuantity: value });
  };

  render() {
    return (
      <article
        className={
          `product-card ${this.props.productStock === 0 ? "product-card--no-stock" : ""}`.trim()
        }
      >
        <img
          src={`https://picsum.photos/seed/${this.props.productId}/300/200`}
          width="300"
          height="200"
          alt=""
          className="product-card__image"
        />
        <div className="product-card__details">
          <h3 className="product-card__title">
            <span className="product-card__name">{this.props.productName}</span>
            {this.props.productStock === 0 && (
              <span className="product-card__stock-status">
                &nbsp;- out of stock
              </span>
            )}
          </h3>
          <strong className="product-card__price">
            {this.props.productPrice} kr
          </strong>
          <div className="product-card__actions">
            <InputNumber
              min={0}
              max={this.props.productStock}
              className="product-card__quantity"
              value={this.state.purchasingQuantity}
              onChange={this.handleChange}
            />
            <button className="product-card__button">
              <i className="fas fa-cart-plus"></i>
            </button>
          </div>
        </div>
      </article>
    );
  }
}

export default Product;
