import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Carrinho from './Components/Carrinho';
import Detalhes from './Components/Detalhes';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/carrinho" component={ Carrinho } />
          <Route path="/detalhes/:id" render={ (props) => <Detalhes { ...props } /> } />
        </Switch>
      </BrowserRouter>

    );
  }
}
export default App;
