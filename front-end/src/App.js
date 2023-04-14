import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Provider from './Components/Provider';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Products from './Pages/Products';
import Checkout from './Pages/Checkout';
import Admin from './Pages/Admin';
import OrderDetail from './Pages/OrderDetail';
import SellerOrderDetail from './Pages/SellerOrderDetail';
import Order from './Pages/Order';
import SellerOrders from './Pages/SellerOrders';

function App() {
  return (
    <main className="flex items-center justify-center bg-eastern-blue-500">
      <Provider>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login" component={ Login } />
          <Route exact path="/register" component={ Register } />
          <Route exact path="/customer/products" component={ Products } />
          <Route exact path="/customer/checkout" component={ Checkout } />
          <Route exact path="/customer/orders" component={ Order } />
          <Route exact path="/customer/orders/:id" component={ OrderDetail } />
          <Route exact path="/seller/orders/:id" component={ SellerOrderDetail } />
          <Route exact path="/seller/orders" component={ SellerOrders } />
          <Route exact path="/admin/manage" component={ Admin } />
        </Switch>
      </Provider>
    </main>
  );
}

export default App;
