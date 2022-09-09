import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Carrinho from './Components/Carrinho';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/carrinho" component={ Carrinho } />
        </Switch>
      </BrowserRouter>

    );
  }
}
export default App;
