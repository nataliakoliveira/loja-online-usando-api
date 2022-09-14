import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery, setItem } from '../services/api';
import ProductCard from './ProductCard';

class Categoria extends React.Component {
  state = {
    listaCategoria: [],
    lista: [],
    listaCarrinho: [],
    quant: 0,
  };

  componentDidMount() {
    this.handleCategoria();
  }

  handleCategoria = async () => {
    const api = await getCategories();
    this.setState({
      listaCategoria: api,
    });
  };

  handleSelectRadio = async ({ target }) => {
    const apiCategoria = await getProductsFromCategoryAndQuery(target.id, '');
    this.setState({
      lista: apiCategoria.results,
    });
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
    const { listaCategoria, lista, quant } = this.state;
    return (
      <div>
        <p>{`Carrinho Categoria ${quant}`}</p>
        {lista !== 0 && listaCategoria.map((elem) => (
          <label
            className="category"
            key={ elem.id }
            htmlFor="category"
          >
            <button
              id={ elem.id }
              data-testid="category"
              name="category"
              onClick={ this.handleSelectRadio }
              type="button"
              value={ elem.name }
            >
              {elem.name}
            </button>
          </label>
        ))}

        {lista.map((elem) => (
          <div
            key={ elem.id }
          >
            <ProductCard
              nomeProduto={ elem.title }
              img={ elem.thumbnail }
              preco={ elem.price }
            />
            <Link
              data-testid="product-detail-link"
              to={ `/detalhes/${elem.id}` }
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
        ))}
      </div>
    );
  }
}
export default Categoria;
