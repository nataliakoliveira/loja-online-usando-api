import React from 'react';
import { Link } from 'react-router-dom';
import Categoria from './Categoria';
import { getProductsFromCategoryAndQuery, setItem } from '../services/api';
import Search from './Search';

class Home extends React.Component {
  state = {
    nome: '',
    lista: [],
    quant: 0,
    listaCarrinho: [],
  };

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({
      nome: value,
    });
  };

  handleClick = async () => {
    const { nome } = this.state;
    const apiProdutos = await getProductsFromCategoryAndQuery('', nome);
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

  addCart = (elem) => {
    const { title, thumbnail, price, id } = elem;
    const { listaCarrinho } = this.state;
    // const produtos = getItem('cart');
    // console.log(produtos.indexOf(elem.id));
    const product = {
      title,
      thumbnail,
      price,
      id,
      qt: 1,
    };
    const quant = listaCarrinho.push(product);

    this.setState({
      listaCarrinho,
      quant,
    });

    setItem('cart', listaCarrinho);
  };

  render() {
    const { nome, lista, quant } = this.state;
    return (
      <div>
        <Search
          handleChange={ this.handleChange }
          handleClick={ this.handleClick }
          nome={ nome }
        />
        <Link data-testid="shopping-cart-button" to="/carrinho">
          {`Carrinho ${quant}`}
        </Link>
        <Categoria />
        {lista
          ? (lista.map((elem) => (
            <div
              data-testid="product"
              key={ elem.id }
            >
              <p>
                Nome:
                { elem.title }
              </p>
              Imagem:
              <img src={ elem.thumbnail } alt={ elem.title } />
              <p>
                Preço:
                { elem.price}
              </p>
              <Link
                data-testid="product-detail-link"
                to={ `/detalhes/${elem.id}` }
                id={ elem.id }
              >
                Detalhes
              </Link>
              <br />
              <br />
              <button
                type="button"
                data-testid="product-add-to-cart"
                onClick={ () => this.addCart(elem) }
              >
                Adicionar ao Carrinho
              </button>
            </div>
          ))) : <p>Nenhum produto foi encontrado</p> }
      </div>
    );
  }
}
export default Home;
