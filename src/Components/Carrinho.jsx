import React from 'react';
import { getItem } from '../services/api';

class Carrinho extends React.Component {
  state = {
    carrinho: {},
  };

  componentDidMount() {
    const produtos = getItem('cart');
    this.setState({
      carrinho: produtos,
    });
  }

  render() {
    const { carrinho } = this.state;
    return (
      <div>
        {Object.values(carrinho).map(({ item, quantity }) => (
          <div
            key={ item.id }
          >
            <p data-testid="shopping-cart-product-name">
              { item.title }
            </p>
            <img src={ item.thumbnail } alt={ item.title } />
            <p>
              { item.price}
            </p>
            <p data-testid="shopping-cart-product-quantity">
              {`Quantidade: ${quantity}`}
            </p>
          </div>
        ))}
        { carrinho.size === 0
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : null}
      </div>

    );
  }
}

export default Carrinho;
