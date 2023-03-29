import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Provider from './Components/Provider';
import Checkout from './Pages/Checkout';
import Login from './Pages/Login';
import Orders from './Pages/Orders';
import Products from './Pages/Products';

function App() {
  return (
    <main>
      <Provider>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/customer/products" component={ Products } />
          <Route exact path="/customer/orders" component={ Orders } />
          <Route exact path="/customer/checkout" component={ Checkout } />
        </Switch>
      </Provider>
    </main>
  );
}

export default App;
