import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import Checkout from './containers/Checkout/Checkout';
import Wrap from './hoc/wrap';
import {Route,Switch} from 'react-router-dom';
import Orders from './containers/Orders/Orders';

library.add(fab, faCheckSquare, faCoffee)

class App extends Component {
  render() {
    return (
      <Wrap>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/" exact component={Layout} />
        </Switch>
      </Wrap>
    );
  }
}

export default App;
