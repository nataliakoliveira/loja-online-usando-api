import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById, setItem, getItem } from '../services/api';

class Detalhes extends Component {
  state = {
    /* atributos: [], */
    img: '',
    price: 0,
    nome: '',
    id: '',
    carrinho: {},
  };

  async componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    const requisicao = await getProductById(id);
    const produtos = getItem('cart');
    this.setState({
      img: requisicao.thumbnail,
      price: requisicao.price,
      nome: requisicao.title,
      id,
      carrinho: produtos,
    });
  }

  addCart = (title, thumbnail, price, id) => {
    const { carrinho } = this.state;
    const product = {
      title,
      thumbnail,
      price,
      id,
    };
    console.log(product);

    if (!carrinho[product.id]) {
      carrinho[product.id] = { item: product, quantity: 1 };
      this.setState({
        carrinho,
      });
      setItem('cart', carrinho);
    }
  };

  render() {
    const { /* atributos, */ img, price, nome, id } = this.state;
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
        <br />
        <br />
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.addCart(nome, img, price, id) }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}
// teste

Detalhes.propTypes = {
  img: PropTypes.string,
  preco: PropTypes.number,
}.isRequired;

export default Detalhes;
