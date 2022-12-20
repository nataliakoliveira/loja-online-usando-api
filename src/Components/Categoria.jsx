import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from './ProductCard';
import '../Home.css';

class Categoria extends React.Component {
  state = {
    categorias: [],
    resultados: [],
  };

  componentDidMount() {
    this.handleCategoria();
  }

  handleCategoria = async () => {
    const api = await getCategories();
    this.setState({
      categorias: api,
    });
  };

  handleSelectRadio = async ({ target }) => {
    const apiCategoria = await getProductsFromCategoryAndQuery(target.id, '');
    this.setState({
      resultados: apiCategoria.results,
    });
  };

  render() {
    const { categorias, resultados } = this.state;
    const { addCart } = this.props;
    return (
      <div className="categoryLabel">
        {categorias !== 0 && categorias.map((elem) => (
          <label
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
              className="category"
            >
              {elem.name}
            </button>
          </label>
        ))}

        {resultados.map((elem) => (
          <div
            key={ elem.id }
            className="produto"
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
              onClick={ () => addCart(elem) }
            >
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    );
  }
}

Categoria.propTypes = {
  addCart: PropTypes.func.isRequired,
};

export default Categoria;
