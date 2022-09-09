import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  render() {
    const { handleChange, handleClick, nome } = this.props;
    return (

      <div>
        <input
          type="text"
          data-testid="query-input"
          onChange={ (e) => handleChange(e) }
          value={ nome }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ () => handleClick() }
        >
          buscar
        </button>
        <h2 data-testid="home-initial-message">
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
