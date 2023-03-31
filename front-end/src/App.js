import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Provider from './Components/Provider';
import Checkout from './Pages/Checkout';
import Orders from './Pages/Orders';
import Products from './Pages/Products';
import SellerOrder from './Pages/SellerOrder';
import { Login, Register } from './Pages';

function App() {
  return (
    <main>
      <Provider>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login" component={ Login } />
          <Route exact path="/register" component={ Register } />
          <Route exact path="/customer/products" component={ Products } />
          <Route exact path="/customer/orders" component={ Orders } />
          <Route exact path="/customer/checkout" component={ Checkout } />
          <Route exact path="/seller/orders" component={ SellerOrder } />
        </Switch>
      </Provider>
    </main>
  );
}

export default App;
