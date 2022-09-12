import React from 'react';
import { Link } from 'react-router-dom';
import Categoria from './Categoria';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Search from './Search';
import ProductCard from './ProductCard';

class Home extends React.Component {
  state = {
    nome: '',
    lista: [],
  };

  handleChange = ({ target }) => {
    const { value } = target;
    console.log(value);
    this.setState({
      nome: value,
    });
  };

  handleClick = async () => {
    const { nome } = this.state;
    const apiProdutos = await getProductsFromCategoryAndQuery(nome, '');
    console.log(apiProdutos);
    if (nome.length < 1) {
      this.setState({
        lista: false,
      });
    } else {
      this.setState({
        lista: apiProdutos.results,
      });
    }
  };

  render() {
    const { lista, nome } = this.state;
    return (
      <div>
        <Search
          handleChange={ this.handleChange }
          handleClick={ this.handleClick }
          nome={ nome }
        />
        <Link data-testid="shopping-cart-button" to="/carrinho">Carrinho</Link>
        <Categoria />
        {lista
          ? (lista.map((elem) => (
            <div
              data-testid="product"
              key={ elem.id }
            >
              <ProductCard
                nomeProduto={ elem.title }
                img={ elem.thumbnail }
                preco={ elem.price }
              />

            </div>
          ))) : <p>Nenhum produto foi encontrado</p> }
      </div>
    );
  }
}
export default Home;
