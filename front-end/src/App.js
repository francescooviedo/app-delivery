import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Provider from './Components/Provider';
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
        </Switch>
      </Provider>
    </main>
  );
}

export default App;
