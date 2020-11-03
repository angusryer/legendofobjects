import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Layout from './Layout/Layout';
import { Layout, Home, Play, Info } from './pages'
import './src/styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact render={routeProps => <Home />} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
