import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Player from '../containers/Player';
import Layout from '../components/Layout';
import Login2 from '../containers/Login2';
import Home2 from '../containers/Home2';
import Transfer from '../containers/Transfer';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/player/:id" component={Player} />
        <Route exact path="/login2" component={Login2} />
        <Route exact path="/home2" component={Home2} />
        <Route exact path="/transfer" component={Transfer} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App;