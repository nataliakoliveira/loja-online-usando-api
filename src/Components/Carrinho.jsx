import React from 'react';
import { getItem, setItem } from '../services/api';

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

  increaseValue = (product) => {
    // fazer função aqui
    // fazer spread do obj
    const { carrinho } = this.state;
    const obj = { ...carrinho };
    const currencyQuantity = obj[product.id].quantity;
    // acessar chave do produto
    obj[product.id].quantity = currencyQuantity + 1;
    setItem('cart', obj);
    this.setState({
      carrinho: obj,
    });
    // adicionar
    // att localstorage e carrinho
  };

  decreaseValue = (product) => {
    const { carrinho } = this.state;
    const obj = { ...carrinho };
    const currencyQuantity = obj[product.id].quantity;
    if (currencyQuantity === 1) {
      obj[product.id].quantity = 1;
    } else if (currencyQuantity > 1) {
      obj[product.id].quantity = currencyQuantity - 1;
    }
    setItem('cart', obj);
    this.setState({
      carrinho: obj,
    });// fazer função aqui
  };

  // função para remover produto
  removeProduct = (product) => {
    const { carrinho } = this.state;
    const obj = { ...carrinho };
    delete obj[product.id];
    setItem('cart', obj);
    this.setState({
      carrinho: obj,
    });
  };

  render() {
    const { carrinho } = this.state;
    return (
      <div>
        { Object.keys(carrinho).length === 0
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : (Object.values(carrinho).map(({ item, quantity }) => (
            <div
              key={ item.id }
            >
              <p data-testid="shopping-cart-product-name">
                { item.title }
              </p>
              <img src={ item.thumbnail } alt={ item.title } />
              <p>
                Preço:
                { item.price}
              </p>
              <p
                data-testid="shopping-cart-product-quantity"
              >
                { 'Quantidade: ' }
                {quantity}
              </p>

              {/* //botao +++*/}

              <button
                type="button"
                data-testid="product-increase-quantity"
                onClick={ () => this.increaseValue(item) }
              >
                +
              </button>

              {/* //botao ---*/}
              <button
                type="button"
                data-testid="product-decrease-quantity"
                onClick={ () => this.decreaseValue(item) }
              >
                -
              </button>

              {/* //botao excluir */}
              <button
                type="button"
                data-testid="remove-product"
                onClick={ () => this.removeProduct(item) }
              >
                Excluir
              </button>
            </div>
          )))}
      </div>

    );
  }
}

export default Carrinho;
