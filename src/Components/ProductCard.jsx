import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { nomeProduto, img, preco } = this.props;
    return (
      <div data-testid="product">
        <p>
          { nomeProduto }
        </p>
        <img src={ img } alt={ nomeProduto } />
        <p>
          { preco }
        </p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  nomeProduto: PropTypes.string,
  img: PropTypes.string,
  preco: PropTypes.number,
}.isRequired;

export default ProductCard;
