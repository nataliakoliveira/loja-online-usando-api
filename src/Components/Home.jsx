import React from 'react';
import { Link } from 'react-router-dom';
import Categoria from './Categoria';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <Link data-testid="shopping-cart-button" to="/carrinho">Carrinho</Link>
        <Categoria />
      </div>
    );
  }
}

export default Home;
