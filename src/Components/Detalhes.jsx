import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Detalhes extends Component {
  render() {
    const { nomeProduto, preco, teste } = this.props;
    return (
      <div>
        <p data-testid="product-detail-name">
          Nome:
          { nomeProduto }
        </p>
        Imagem:
        <img
          src={ teste.thumbnail }
          alt={ teste.name }
          data-testid="product-detail-image"
        />
        <p data-testid="product-detail-price">
          Preço:
          { preco }
        </p>
        <Link
          data-testid="shopping-cart-button"
          to="/carrinho"
        >
          <button
            data-testid="shopping-cart-button"
            type="button"
          >
            Carrinho
          </button>
        </Link>
      </div>
    );
  }
}

Detalhes.propTypes = {
  nomeProduto: PropTypes.string,
  img: PropTypes.string,
  preco: PropTypes.number,
}.isRequired;

export default Detalhes;
