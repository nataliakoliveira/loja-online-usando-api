import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  render() {
    const { handleChange, handleClick, nome } = this.props;
    return (

      <div>
        <nav className="navHome">
          <input
            type="text"
            data-testid="query-input"
            onChange={ (e) => handleChange(e) }
            value={ nome }
            className="inputHome"
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ () => handleClick() }
          >
            buscar
          </button>
          <h1 className="titleHome1">FRONT-END ONLINE STORE</h1>
        </nav>
        <h2 data-testid="home-initial-message" className="titleHome2">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      </div>

    );
  }
}

Search.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  nome: PropTypes.string.isRequired,
};

export default Search;
