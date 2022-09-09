import React from 'react';
import { getCategories } from '../services/api';

class Categoria extends React.Component {
  state = {
    listaCategoria: [],
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

  render() {
    const { listaCategoria } = this.state;
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
            />
            {elem.name}

          </label>
        ))}

      </div>
    );
  }
}
export default Categoria;
