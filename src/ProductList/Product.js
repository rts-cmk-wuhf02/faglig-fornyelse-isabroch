import React from 'react';
import 'rc-input-number/assets/index.css';
import InputNumber from 'rc-input-number';
import './Product.scss';

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article className="product-card">
        <img
          src="http://placekitten.com/300/200"
          height="200"
          width="300"
          alt=""
          className="product-card__image"
        />
        <div className="product-card__details">
          <h3 className="product-card__title"><span className="product-card__name">This is a really long item name to test </span><span className="product-card__stock-status">- out of stock</span></h3>
          <strong className="product-card__price">1.000 kr</strong>
          <div className="product-card__actions">
            <InputNumber
            min={0}
            max={99}
            className="product-card__quantity"
            defaultValue={0}/>
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