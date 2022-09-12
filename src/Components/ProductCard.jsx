import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ProductCard extends Component {
  render() {
    const { nomeProduto, img, preco } = this.props;
    return (
      <div>
        <p>
          Nome:
          { nomeProduto }
        </p>
        Imagem:
        <img src={ img } alt={ nomeProduto } />
        <p>
          Preço:
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
