import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';

class Detalhes extends Component {
  state = {
    /* atributos: [], */
    img: '',
    price: 0,
    nome: '',
  };

  async componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    const requisicao = await getProductById(id);
    this.setState({
      img: requisicao.thumbnail,
      price: requisicao.price,
      nome: requisicao.title,
    });
  }

  render() {
    const { /* atributos, */ img, price, nome } = this.state;
    return (
      <div>
        <p data-testid="product-detail-name">
          {nome}
        </p>
        <img
          src={ img }
          alt={ nome }
          data-testid="product-detail-image"
        />
        <p data-testid="product-detail-price">
          {price}
        </p>
        <Link
          data-testid="shopping-cart-button"
          to="/carrinho"
        >
          Carrinho
        </Link>
      </div>
    );
  }
}

Detalhes.propTypes = {
  img: PropTypes.string,
  preco: PropTypes.number,
}.isRequired;

export default Detalhes;
