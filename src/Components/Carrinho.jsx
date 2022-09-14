import React from 'react';
import { getItem } from '../services/api';

class Carrinho extends React.Component {
  state = {
    listaCarrinho: [],
  };

  componentDidMount() {
    const produtos = getItem('cart');
    this.setState({
      listaCarrinho: produtos,
    });
  }

  render() {
    const { listaCarrinho } = this.state;
    return (
      <div>
        {listaCarrinho.map((elem) => (
          <div
            key={ elem.id }
          >
            <p data-testid="shopping-cart-product-name">
              { elem.title }
            </p>
            <img src={ elem.thumbnail } alt={ elem.title } />
            <p>
              { elem.price}
            </p>
            <p data-testid="shopping-cart-product-quantity">
              {`Quantidade: ${elem.qt}`}
            </p>
          </div>
        ))}
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>

    );
  }
}

export default Carrinho;
