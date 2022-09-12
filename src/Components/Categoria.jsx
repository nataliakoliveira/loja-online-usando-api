import React from 'react';
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
    const apiCategoria = await getProductsFromCategoryAndQuery('', target.value);
    console.log(apiCategoria);
    this.setState({
      lista: apiCategoria.results,
    });
  };

  render() {
    const { listaCategoria, lista } = this.state;
    return (
      <div>
        {listaCategoria.map((elem) => (
          <label
            className="category"
            key={ elem.id }
            data-testid="category"
            htmlFor="category"
          >
            <input
              type="radio"
              name="category"
              onChange={ this.handleSelectRadio }
              value={ elem.name }
            />
            {elem.name}

          </label>
        ))}

        {lista.length !== 0 && lista.map((elem) => (
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
        ))}

      </div>
    );
  }
}
export default Categoria;
