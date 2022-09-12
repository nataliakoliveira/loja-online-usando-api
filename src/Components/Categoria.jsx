import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from './ProductCard';

class Categoria extends React.Component {
  state = {
    listaCategoria: [],
    lista: [],
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

  render() {
    const { listaCategoria, lista } = this.state;
    return (
      <div>
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
            <Link data-testid="product-detail-link" to="/detalhes">Detalhes</Link>
          </div>
        ))}

      </div>
    );
  }
}
export default Categoria;
