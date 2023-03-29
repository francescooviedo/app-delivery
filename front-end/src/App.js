import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Provider from './Components/Provider';
import Login from './Pages/Login';

function App() {
  return (
    <main>
      <Provider>
        <Switch>
          <Route exact path="/" component={ Login } />
        </Switch>
      </Provider>
    </main>
  );
}

export default App;
