import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Provider from './Components/Provider';
import Login from './Pages/Login';
import Products from './Pages/Products';

function App() {
  return (
    <main>
      <Provider>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/customer/products" component={ Products } />
        </Switch>
      </Provider>
    </main>
  );
}

export default App;
